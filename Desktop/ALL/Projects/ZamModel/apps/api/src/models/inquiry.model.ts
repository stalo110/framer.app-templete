import { prisma } from "../lib/prisma.js";

export interface InquiryRecord {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const inquiryModel = {
  create: (input: InquiryRecord) =>
    prisma.inquiry.create({
      data: { ...input, email: input.email.toLowerCase() },
      select: { id: true, createdAt: true },
    }),
};
