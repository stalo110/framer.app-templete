import { prisma } from "../lib/prisma.js";

export interface RegistrationRecord {
  fullName: string;
  email: string;
  phone: string;
  location: "LAGOS" | "AWKA";
  bio: string;
  categoryId: number;
  imagePath?: string;
}

export const registrationModel = {
  create: async (input: RegistrationRecord) => {
    const email = input.email.toLowerCase();
    const user = await prisma.user.upsert({
      where: { email },
      update: { fullName: input.fullName, phone: input.phone },
      create: { email, fullName: input.fullName, phone: input.phone },
    });
    return prisma.registration.create({
      data: { ...input, email, userId: user.id, imagePath: input.imagePath },
      select: { id: true, status: true, createdAt: true },
    });
  },
  findPaymentDetails: (id: string) =>
    prisma.registration.findUnique({
      where: { id },
      select: { id: true, email: true, status: true },
    }),
};
