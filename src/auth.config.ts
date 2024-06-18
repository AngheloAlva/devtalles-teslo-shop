import NextAuth, { type NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import prisma from "./lib/prisma"
import bcryptjs from "bcryptjs"
import { z } from "zod"

export const authConfig: NextAuthConfig = {
	pages: {
		signIn: "/auth/login",
		newUser: "/auth/new-account",
	},
	providers: [
		credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials)

				if (!parsedCredentials.success) return null

				const { email, password } = parsedCredentials.data

				const user = await prisma.user.findUnique({
					where: { email: email.toLowerCase() },
				})

				if (!user) return null
				if (!bcryptjs.compareSync(password, user.password)) return null

				const { password: _, ...rest } = user

				return rest
			},
		}),
	],
}

export const { auth, signIn, signOut } = NextAuth(authConfig)
