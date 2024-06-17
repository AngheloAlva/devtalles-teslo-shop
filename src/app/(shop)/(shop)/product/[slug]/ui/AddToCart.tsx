"use client"

import { QuantitySelector, SizeSelector } from "@/components"
import { useCartStore } from "@/store"
import { useState } from "react"

import type { Product } from "@/interfaces/product.interface"
import type { CartProduct } from "@/interfaces"
import type { Size } from "@/seed/seed"

export default function AddToCart({ product }: AddToCartProps): React.ReactElement {
	const addProductToCart = useCartStore((state) => state.addProductToCart)

	const [size, setSize] = useState<Size | undefined>()
	const [quantity, setQuantity] = useState<number>(1)
	const [posted, setPosted] = useState<boolean>(false)

	const addToCart = () => {
		setPosted(true)
		if (!size) return

		const cartProduct: CartProduct = {
			size,
			quantity,
			id: product.id,
			slug: product.slug,
			price: product.price,
			image: product.images[0],
			title: product.title,
		}

		addProductToCart(cartProduct)

		setSize(undefined)
		setPosted(false)
		setQuantity(1)
	}

	return (
		<>
			{posted && !size && <span className="fade-in mt-2 text-red-500">Please select a size</span>}

			<SizeSelector availableSizes={product.sizes} selectedSize={size} onSizeChanged={setSize} />
			<QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
			<button onClick={addToCart} className="btn-primary my-5">
				Add to cart
			</button>
		</>
	)
}

interface AddToCartProps {
	product: Product
}
