import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { Pool } from "pg"
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@prisma/client'

// const pool = new Pool({ connectionString: process.env.DATABASE_URL })
// const adapter = new PrismaPg(pool)
// const prisma = new PrismaClient({ adapter })

export default {
    providers: [Google],
    // adapter: PrismaAdapter(prisma)
} satisfies NextAuthConfig