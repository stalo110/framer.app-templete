import { prisma } from "../lib/prisma.js";
export const eventModel = {
    list: () => prisma.event.findMany({
        where: { status: { in: ["UPCOMING", "PAST"] } },
        orderBy: { eventDate: "asc" },
        include: { category: { select: { name: true, slug: true } } },
    }),
    findById: (id) => prisma.event.findUnique({ where: { id } }),
};
//# sourceMappingURL=event.model.js.map