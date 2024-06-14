"use client"

import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProductGridItem({ product }: ProductGridItemProps): React.ReactElement {
	const [displayImage, setDisplayImage] = useState(product.images[0])

	return (
		<div className="fade-in overflow-hidden rounded-md">
			<Image
				src={`/products/${displayImage}`}
				alt={product.title}
				width={500}
				height={500}
				className="w-full rounded-md object-cover"
				onMouseEnter={() => {
					setDisplayImage(product.images[1])
				}}
				onMouseLeave={() => {
					setDisplayImage(product.images[0])
				}}
			/>

			<div className="flex flex-col p-4">
				<Link className="transition-colors hover:text-blue-600" href={`/product/${product.slug}`}>
					{product.title}
				</Link>
				<span className="font-bold">${product.price}</span>
			</div>
		</div>
	)
}

interface ProductGridItemProps {
	product: Product
}
