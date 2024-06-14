import { inter } from "@/config/fonts"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Teslo | Shop",
	description: "A simple e-commerce website built with Next.js and TypeScript.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
