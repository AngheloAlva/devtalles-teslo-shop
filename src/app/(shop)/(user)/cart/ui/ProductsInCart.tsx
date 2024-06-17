"use client"

import { QuantitySelector } from "@/components"
import { useCartStore } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProductsInCart(): React.ReactElement {
	const updatePoductQuantity = useCartStore((state) => state.updateProductQuantity)
	const removeProduct = useCartStore((state) => state.removeProduct)

	const [loaded, setLoaded] = useState(false)
	const productsInCart = useCartStore((state) => state.cart)

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) {
		return <p>Loading...</p>
	}

	return (
		<>
			{productsInCart.map((product) => (
				<div className="mb-7 flex" key={`${product.slug}-${product.size}`}>
					<Image
						src={`/products/${product.image}`}
						width={100}
						height={100}
						alt={product.title}
						className="mr-5 rounded object-contain"
					/>

					<div>
						<Link
							href={`/product/${product.slug}`}
							className="cursor-pointer font-medium hover:underline"
						>
							{product.title} - {product.size}
						</Link>
						<p className="">${product.price}</p>
						<QuantitySelector
							quantity={product.quantity}
							onQuantityChange={(quantity) => updatePoductQuantity(product, quantity)}
						/>

						<button
							onClick={() => {
								removeProduct(product)
							}}
							className="mt-3 cursor-pointer underline"
						>
							Remove
						</button>
					</div>
				</div>
			))}
		</>
	)
}
