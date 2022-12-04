import { bob } from "./user";

export const cart = {
    where: { isActive: true },
    update: { isActive: true },
    create: {
        isActive: true,
        user: {
            create: bob
        },
    },
}