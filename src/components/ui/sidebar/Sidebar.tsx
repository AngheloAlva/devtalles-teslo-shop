"use client"

import { useSession } from "next-auth/react"
import { useUIStore } from "@/store"
import { logout } from "@/actions"
import clsx from "clsx"
import {
	IoCloseOutline,
	IoLogInOutline,
	IoShirtOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSearchOutline,
	IoTicketOutline,
} from "react-icons/io5"
import SidebarItem from "./SidebarItem"

export default function Sidebar(): React.ReactElement {
	const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
	const closeSideMenu = useUIStore((state) => state.closeSideMenu)

	const { data: session } = useSession()
	const isAuthenticated = !!session?.user
	const isAdmin = session?.user?.role === "admin"

	return (
		<div className="">
			{isSideMenuOpen && (
				<>
					<div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-30" />
					<div
						onClick={closeSideMenu}
						className="fade-in fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur-sm backdrop-filter"
					/>
				</>
			)}

			<nav
				className={clsx(
					"fixed right-0 top-0 z-20 h-screen w-[500px] transform bg-white p-5 shadow-2xl transition-all duration-300",
					{
						"translate-x-full": !isSideMenuOpen,
					}
				)}
			>
				<IoCloseOutline
					size={30}
					className="absolute right-5 top-5 cursor-pointer"
					onClick={closeSideMenu}
				/>
				<div className="relative mt-14">
					<IoSearchOutline size={20} className="absolute left-2 top-2" />
					<input
						type="text"
						placeholder="Search"
						className="w-full rounded border-b-2 border-gray-200 bg-gray-50 py-1 pl-10 pr-10 text-xl focus:border-blue-500 focus:outline-none"
					/>
				</div>

				{isAuthenticated ? (
					<>
						<SidebarItem onClick={logout} title="Logout" icon={<IoLogOutOutline size={30} />} />

						<SidebarItem
							path="/profile"
							onClick={closeSideMenu}
							title="Profile"
							icon={<IoPersonOutline size={30} />}
						/>
						<SidebarItem
							path="/orders"
							onClick={closeSideMenu}
							title="Orders"
							icon={<IoTicketOutline size={30} />}
						/>
					</>
				) : (
					<SidebarItem
						path="/auth/login"
						title="Login"
						onClick={closeSideMenu}
						icon={<IoLogInOutline size={30} />}
					/>
				)}

				{isAdmin && (
					<>
						<div className="my-10 h-px w-full bg-gray-200" />

						<SidebarItem
							path="/products"
							onClick={closeSideMenu}
							title="Products"
							icon={<IoShirtOutline size={30} />}
						/>
						<SidebarItem
							path="/"
							onClick={closeSideMenu}
							title="Orders"
							icon={<IoTicketOutline size={30} />}
						/>
						<SidebarItem
							path="/"
							onClick={closeSideMenu}
							title="Users"
							icon={<IoPeopleOutline size={30} />}
						/>
					</>
				)}
			</nav>
		</div>
	)
}
