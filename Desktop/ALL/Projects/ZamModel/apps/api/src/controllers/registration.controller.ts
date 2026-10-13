import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { HttpError } from "../lib/http-error.js";
import { initializePaystackTransaction } from "../lib/paystack.js";
import { paymentModel } from "../models/payment.model.js";
import { registrationModel } from "../models/registration.model.js";
import { randomUUID } from "node:crypto";

const registrationSchema = z.object({
  fullName: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(32),
  location: z.enum(["LAGOS", "AWKA"]),
  categoryId: z.coerce.number().int().positive(),
  bio: z.string().trim().min(20).max(3000),
});

export async function createRegistration(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const input = registrationSchema.parse(request.body);
    const registration = await registrationModel.create({
      ...input,
      imagePath: request.file?.filename,
    });
    const amountKobo = Number(process.env.AUDITION_REGISTRATION_FEE_KOBO ?? 500000);
    if (!Number.isSafeInteger(amountKobo) || amountKobo < 1) {
      throw new HttpError(503, "The registration fee is not configured correctly.");
    }

    const reference = randomUUID();
    await paymentModel.createPending({
      reference,
      registrationId: registration.id,
      email: input.email,
      amountKobo,
    });
    try {
      const checkout = await initializePaystackTransaction({
        email: input.email,
        amountKobo,
        reference,
        registrationId: registration.id,
        eventTitle: "Zam audition registration",
      });
      response.status(201).json({
        data: { registration, payment: { authorizationUrl: checkout.authorization_url, reference, amountKobo } },
        message: "Registration saved. Complete payment to finish your audition entry.",
      });
    } catch (error) {
      await paymentModel.markFailed(reference);
      throw error;
    }
  } catch (error) {
    next(error);
  }
}
