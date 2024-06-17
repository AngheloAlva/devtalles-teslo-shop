export const revalidate = 60

import { Pagination, ProductGrid, Title } from "@/components"
import { getPaginatedProductsWithImages } from "@/actions"
import { redirect } from "next/navigation"

export default async function Home({ searchParams }: HomeProps) {
	const page = searchParams.page ? parseInt(searchParams.page) : 1
	const { products, totalCount, totalPages } = await getPaginatedProductsWithImages({ page })

	if (products.length === 0) {
		redirect("/")
	}

	return (
		<>
			<Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
			<ProductGrid products={products} />
			<Pagination totalPages={totalPages} />
		</>
	)
}

interface HomeProps {
	searchParams: {
		page?: string
	}
}
