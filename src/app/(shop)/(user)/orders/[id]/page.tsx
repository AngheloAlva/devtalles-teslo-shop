import { initialData } from "@/seed/seed"
import { Title } from "@/components"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { IoCardOutline } from "react-icons/io5"

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]]

export default function OrderByIdPage({ params }: IProps): React.ReactElement {
	const { id } = params

	return (
		<div className="mb-72 flex items-center justify-center px-10 sm:px-0">
			<div className="flex w-[1000px] flex-col">
				<Title title={`Order #${id}`} />

				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
					<div className="mt-5 flex flex-col">
						<div
							className={clsx(
								"mb-5 flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold text-white",
								{ "bg-red-500": true },
								{ "bg-green-600": false }
							)}
						>
							<IoCardOutline size={30} />
							Pending payment
						</div>

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
									<p className="">${product.price} x 3</p>
									<p className="font-bold">Subtotal: ${product.price * 3}</p>
								</div>
							</div>
						))}
					</div>

					<div className="h-fit rounded-xl bg-white p-7 shadow-xl">
						<h2 className="mb-2 text-2xl font-bold">Shipping Address</h2>
						<div className="mb-10">
							<p className="text-xl">Anghelo Alva</p>
							<p className="">Av. Siempre viva 123</p>
							<p className="">Col. Centro</p>
							<p className="">Santiago</p>
							<p className="">Renca</p>
							<p className="">123456789</p>
						</div>

						<div className="mb-10 h-0.5 w-full rounded bg-gray-200" />

						<h2 className="mb-2 text-2xl font-bold">Order Summary</h2>
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

						<div
							className={clsx(
								"mb-5 flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold text-white",
								{ "bg-red-500": false },
								{ "bg-green-600": true }
							)}
						>
							<IoCardOutline size={30} />
							Payment accepted
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

interface IProps {
	params: {
		id: string
	}
}
