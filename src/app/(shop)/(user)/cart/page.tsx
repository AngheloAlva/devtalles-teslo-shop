import ProductsInCart from "./ui/ProductsInCart"
import { Title } from "@/components"
import Link from "next/link"
import OrderSumary from "./ui/OrderSumary"

export default function CartPage(): React.ReactElement {
	return (
		<div className="mb-72 flex items-center justify-center px-10 sm:px-0">
			<div className="flex w-[1000px] flex-col">
				<Title title="Cart" />

				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
					<div className="mt-5 flex flex-col">
						<span className="text-xl">Add more items</span>
						<Link href={"/"} className="mb-5 underline">
							Continue shopping
						</Link>

						<ProductsInCart />
					</div>

					<div className="h-fit rounded-xl bg-white p-7 shadow-xl">
						<h2 className="mb-2 text-2xl">Order Summary</h2>
						<OrderSumary />

						<Link
							href={"/checkout/address"}
							className="btn-primary mb-2 mt-5 flex w-full justify-center"
						>
							Checkout
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
