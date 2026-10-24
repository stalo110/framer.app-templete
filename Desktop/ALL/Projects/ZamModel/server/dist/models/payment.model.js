import { prisma } from "../lib/prisma.js";
export const paymentModel = {
    createPending: (input) => prisma.payment.create({
        data: { ...input, email: input.email.toLowerCase() },
        select: { id: true, reference: true, amountKobo: true, status: true },
    }),
    findByReference: (reference) => prisma.payment.findUnique({ where: { reference } }),
    markFailed: (reference) => prisma.payment.updateMany({
        where: { reference, status: "PENDING" },
        data: { status: "FAILED" },
    }),
    markSuccess: (reference, gatewayTransactionId) => prisma.payment.update({
        where: { reference },
        data: { status: "SUCCESS", gatewayTransactionId, paidAt: new Date() },
        select: {
            reference: true,
            eventId: true,
            amountKobo: true,
            currency: true,
            status: true,
            paidAt: true,
        },
    }),
};
//# sourceMappingURL=payment.model.js.map