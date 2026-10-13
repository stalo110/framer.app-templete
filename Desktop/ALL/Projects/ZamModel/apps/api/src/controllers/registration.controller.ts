import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { registrationModel } from "../models/registration.model.js";

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
    response
      .status(201)
      .json({
        data: registration,
        message: "Your audition registration has been received.",
      });
  } catch (error) {
    next(error);
  }
}
