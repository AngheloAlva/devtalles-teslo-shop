"use client"

import { useState } from "react"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

export default function QuantitySelector({
	quantity,
	onQuantityChange,
}: QuantitySelectorProps): React.ReactElement {
	const onValueChange = (value: number) => {
		if (quantity + value < 1) return

		onQuantityChange(quantity + value)
	}

	return (
		<div className="flex">
			<button className="" onClick={() => onValueChange(-1)}>
				<IoRemoveCircleOutline size={30} />
			</button>
			<span className="mx-3 w-20 rounded bg-gray-200 px-5 text-center">{quantity}</span>
			<button className="" onClick={() => onValueChange(1)}>
				<IoAddCircleOutline size={30} />
			</button>
		</div>
	)
}

interface QuantitySelectorProps {
	quantity: number
	onQuantityChange: (value: number) => void
}
