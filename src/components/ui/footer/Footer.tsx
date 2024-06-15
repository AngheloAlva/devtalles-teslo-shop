import { titleFont } from "@/config/fonts"
import Link from "next/link"

export default function Footer(): React.ReactElement {
	return (
		<div className="mb-10 flex w-full justify-center text-xs">
			<Link href={"/"}>
				<span className={`${titleFont.className} mr-1 font-bold antialiased`}>Teslo</span>
				<span className="">| shop</span>
				<span className="">© {new Date().getFullYear()}</span>
			</Link>

			<Link href={"/"} className="mx-3">
				Legal and Privacy
			</Link>

			<Link href={"/"} className="mx-3">
				Ubications
			</Link>
		</div>
	)
}
