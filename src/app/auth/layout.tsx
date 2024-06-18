import { redirect } from "next/navigation"
import { auth } from "@/auth.config"

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode
}): Promise<React.ReactElement> {
	// const sesion = await auth()

	// if (sesion?.user) {
	// 	redirect("/")
	// }

	return (
		<main className="flex items-center justify-center">
			<div className="w-full sm:w-[350px]">{children}</div>
		</main>
	)
}
