import { ProductGrid, Title } from "@/components"
import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation"

const products = initialData.products

export default function CategoryPage({ params }: GetServerSideProps): React.ReactElement {
	const { id } = params
	const filterProducts = products.filter((product) => product.gender === id)

	if (id !== "kid" && id !== "men" && id !== "women") {
		notFound()
	}

	return (
		<>
			<Title title={id} subtitle={`All ${id} articles`} />
			<ProductGrid products={filterProducts} />
		</>
	)
}

interface GetServerSideProps {
	params: { id: string }
}
