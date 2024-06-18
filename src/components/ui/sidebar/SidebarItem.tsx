import Link from "next/link"

export default function SidebarItem({
	icon,
	title,
	path,
	onClick,
}: SidebarItemProps): React.ReactElement {
	return (
		<Link
			href={path || "#"}
			onClick={() => {
				onClick()
			}}
			className="mt-10 flex items-center rounded p-2 transition-colors hover:bg-gray-100"
		>
			{icon}
			<span className="ml-3 text-xl">{title}</span>
		</Link>
	)
}

interface SidebarItemProps {
	title: string
	path?: string
	icon: React.ReactElement
	onClick: () => void
}
