import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended"
import type { PrismaClient } from "../generated/prisma/internal/class.js";


// beforeEach(() => {
//   mockReset(prismaClient)
// })

export const prismaClient = mockDeep<PrismaClient>()