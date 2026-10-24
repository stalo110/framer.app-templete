import { prisma } from "../lib/prisma.js";
export const settingsModel = {
    get: (key) => prisma.siteSetting.findUnique({
        where: { key },
        select: { key: true, value: true, description: true, updatedAt: true },
    }),
    set: (key, value, description) => prisma.siteSetting.upsert({
        where: { key },
        update: { value, description: description ?? null },
        create: { key, value, description: description ?? null },
        select: { key: true, value: true, description: true, updatedAt: true },
    }),
    getRegistrationEnabled: async () => {
        const value = await settingsModel.get("REGISTRATION_ENABLED");
        if (!value)
            return true;
        return value.value !== "false";
    },
    setRegistrationEnabled: (enabled) => settingsModel.set("REGISTRATION_ENABLED", String(enabled), "Whether the public audition form is open for submissions."),
};
//# sourceMappingURL=settings.model.js.map