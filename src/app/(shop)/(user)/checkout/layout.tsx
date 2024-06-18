import { auth } from "@/auth.config"
import { redirect } from "next/navigation"

export default async function layout({
	children,
}: {
	children: React.ReactElement
}): Promise<React.ReactElement> {
	const session = await auth()

	if (!session?.user) {
		redirect("/auth/login?redirectTo=/checkout/address")
	}

	return <>{children}</>
}
