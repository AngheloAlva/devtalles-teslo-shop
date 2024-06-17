"use client"

import { useEffect, useState } from "react"
import { getStockBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"

export default function StockLabel({ slug }: StockLabelProps): React.ReactElement {
	const [stock, setStock] = useState<number>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchStock = async () => {
			const stock = await getStockBySlug(slug)
			setStock(stock)
			setLoading(false)
		}

		fetchStock()
	}, [slug])

	return (
		<>
			{loading ? (
				<h1
					className={`${titleFont.className} animate-pulse rounded-md bg-gray-200 text-lg font-medium antialiased`}
				>
					&nbsp;
				</h1>
			) : (
				<h1 className={`${titleFont.className} text-lg font-medium antialiased`}>Stock: {stock}</h1>
			)}
		</>
	)
}

interface StockLabelProps {
	slug: string
}
