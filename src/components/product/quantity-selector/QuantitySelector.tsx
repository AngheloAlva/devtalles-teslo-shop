"use client"

import { useState } from "react"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

export default function QuantitySelector({ quantity }: QuantitySelectorProps): React.ReactElement {
	const [count, setCount] = useState(quantity)

	const onQuantityChange = (value: number) => {
		if (count + value < 1) return

		setCount(count + value)
	}

	return (
		<div className="flex">
			<button className="" onClick={() => onQuantityChange(-1)}>
				<IoRemoveCircleOutline size={30} />
			</button>
			<span className="mx-3 w-20 rounded bg-gray-200 px-5 text-center">{count}</span>
			<button className="" onClick={() => onQuantityChange(1)}>
				<IoAddCircleOutline size={30} />
			</button>
		</div>
	)
}

interface QuantitySelectorProps {
	quantity: number
}
