import { QuantitySelector, Title } from "@/components"
import { initialData } from "@/seed/seed"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]]

export default function (): React.ReactElement {
	if (productsInCart.length === 0) {
		redirect("/empty")
	}

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

						{productsInCart.map((product) => (
							<div className="mb-7 flex" key={product.slug}>
								<Image
									src={`/products/${product.images[0]}`}
									width={100}
									height={100}
									alt={product.title}
									className="mr-5 rounded object-contain"
								/>

								<div>
									<p className="font-medium">{product.title}</p>
									<p className="">${product.price}</p>
									<QuantitySelector quantity={3} />

									<button className="mt-3 underline">Remove</button>
								</div>
							</div>
						))}
					</div>

					<div className="h-fit rounded-xl bg-white p-7 shadow-xl">
						<h2 className="mb-2 text-2xl">Order Summary</h2>
						<div className="grid grid-cols-2">
							<span>Products Quantity</span>
							<span className="text-right">3 articles</span>

							<span>Subtotal</span>
							<span className="text-right">$100</span>

							<span>Tax</span>
							<span className="text-right">$19</span>

							<span className="mt-5 text-2xl">Total</span>
							<span className="mt-5 text-right text-2xl">$119</span>
						</div>

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
