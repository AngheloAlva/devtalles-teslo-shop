export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}): React.ReactElement {
	return (
		<main className="flex items-center justify-center">
			<div className="w-full sm:w-[350px]">{children}</div>
		</main>
	)
}
