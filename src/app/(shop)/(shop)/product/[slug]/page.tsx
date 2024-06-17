import { ProductSlideshow, QuantitySelector, SizeSelector } from "@/components"
import { titleFont } from "@/config/fonts"
import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation"

export default function PoductBySlugPage({ params }: ProductPageProps): React.ReactElement {
	const { slug } = params
	const product = initialData.products.find((product) => product.slug === slug)

	if (!product) {
		notFound()
	}

	return (
		<div className="mb-20 mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
			<div className="col-span-1 md:col-span-2">
				<ProductSlideshow title={product.title} images={product.images} />
			</div>

			<div className="col-span-1 px-5">
				<h1 className={`${titleFont.className} text-xl font-bold antialiased`}>{product.title}</h1>
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
