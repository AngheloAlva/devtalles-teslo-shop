export const revalidate = 604800 // 7 days

import { ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components"
import { getProductBySlug } from "@/actions"
import { titleFont } from "@/config/fonts"
import { notFound } from "next/navigation"

import type { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(
	{ params }: ProductPageProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const slug = params.slug
	const product = await getProductBySlug(slug)

	return {
		title: product?.title || "Product not found",
		description: product?.description || "Product not found",
		openGraph: {
			title: product?.title || "Product not found",
			description: product?.description || "Product not found",
			images: [`/products/${product?.images[1]}`],
		},
	}
}

export default async function PoductBySlugPage({
	params,
}: ProductPageProps): Promise<React.ReactElement> {
	const { slug } = params
	const product = await getProductBySlug(slug)

	if (!product) {
		notFound()
	}

	return (
		<div className="mb-20 mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
			<div className="col-span-1 md:col-span-2">
				<ProductSlideshow title={product.title} images={product.images} />
			</div>

			<div className="col-span-1 px-5">
				<StockLabel slug={slug} />
				<h1 className={`${titleFont.className} mt-2 text-xl font-bold antialiased`}>
					{product.title}
				</h1>
				<p className="mb-5 text-lg">${product.price}</p>

				<SizeSelector availableSizes={product.sizes} selectedSize={product.sizes[0]} />

				<QuantitySelector quantity={0} />

				<button className="btn-primary my-5">Add to cart</button>

				<h3 className="text-sm font-bold">Description</h3>
				<p className="font-light">{product.description}</p>
			</div>
		</div>
	)
}

interface ProductPageProps {
	params: {
		slug: string
	}
}
