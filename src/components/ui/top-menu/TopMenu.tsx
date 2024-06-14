import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

export default function TopMenu(): React.ReactElement {
	return (
		<nav className="flex w-full items-center justify-between px-5">
			<div>
				<Link href={"/"}>
					<span className={`${titleFont.className} font-bold antialiased`}>Teslo</span>
					<span> | Shop</span>
				</Link>
			</div>

			<div className="hidden sm:block">
				<Link
					href={"/category/men"}
					className="mr-2 rounded-md p-2 transition-all hover:bg-gray-100"
				>
					Men
				</Link>
				<Link
					href={"/category/women"}
					className="mr-2 rounded-md p-2 transition-all hover:bg-gray-100"
				>
					Women
				</Link>
				<Link
					href={"/category/kids"}
					className="mr-2 rounded-md p-2 transition-all hover:bg-gray-100"
				>
					Kids
				</Link>
			</div>

			<div className="flex items-center">
				<Link href={"/search"} className="mx-2">
					<IoSearchOutline className="h-5 w-5" />
				</Link>
				<Link href={"/cart"} className="mx-2">
					<div className="relative">
						<span className="absolute -right-2 -top-2 rounded-full bg-blue-700 px-1 text-xs font-bold text-white">
							3
						</span>
						<IoCartOutline className="h-5 w-5" />
					</div>
				</Link>
				<button className="mr-2 rounded-md p-2 transition-all hover:bg-gray-100">Menu</button>
			</div>
		</nav>
	)
}
