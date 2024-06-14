export default function ShopLayout({
	children,
}: {
	children: React.ReactNode
}): React.ReactElement {
	return <main className="min-h-screen bg-red-500 text-white">{children}</main>
}
