export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}): React.ReactElement {
	return <main className="min-h-screen bg-gray-500 text-white">{children}</main>
}
