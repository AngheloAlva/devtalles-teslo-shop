import { inter } from "@/config/fonts"
import type { Metadata } from "next"
import "./globals.css"
import { Provider } from "@/components"

export const metadata: Metadata = {
	title: {
		template: "%s - Teslo | Shop",
		default: "Home - Teslo | Shop",
	},
	description: "A simple e-commerce website built with Next.js and TypeScript.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactElement
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
