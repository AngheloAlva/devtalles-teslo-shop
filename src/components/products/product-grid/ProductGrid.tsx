import { Product } from "@/interfaces"
import ProductGridItem from "./ProductGridItem"

export default function ProductGrid({ products }: ProductGridProps): React.ReactElement {
	return (
		<div className="mb-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
			{products.map((product) => (
				<ProductGridItem product={product} key={product.slug} />
			))}
		</div>
	)
}

interface ProductGridProps {
	products: Product[]
}
