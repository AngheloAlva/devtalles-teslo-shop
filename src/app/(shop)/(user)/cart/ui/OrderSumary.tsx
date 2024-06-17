"use client"

import { useEffect, useState } from "react"
import { currencyFormat } from "@/utils"
import { useCartStore } from "@/store"

export default function OrderSumary(): React.ReactElement {
	const [loaded, setLoaded] = useState(false)
	const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
		state.getSummaryInformation()
	)

	useEffect(() => {
		setLoaded(true)
	}, [])

	if (!loaded) {
		return <p>Loading...</p>
	}

	return (
		<div className="grid grid-cols-2">
			<span>Products Quantity</span>
			<span className="text-right">{itemsInCart} articles</span>

			<span>Subtotal</span>
			<span className="text-right">{currencyFormat(subTotal)}</span>

			<span>Tax</span>
			<span className="text-right">{currencyFormat(tax)}</span>

			<span className="mt-5 text-2xl">Total</span>
			<span className="mt-5 text-right text-2xl">{currencyFormat(total)}</span>
		</div>
	)
}
