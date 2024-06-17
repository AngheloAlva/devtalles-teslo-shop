export const revalidate = 60

import { Pagination, ProductGrid, Title } from "@/components"
import { getPaginatedProductsWithImages } from "@/actions"
import { notFound, redirect } from "next/navigation"
import { Gender } from "@prisma/client"

export default async function CategoryPage({
	params,
	searchParams,
}: GetServerSideProps): Promise<React.ReactElement> {
	const { gender } = params
	const page = searchParams.page ? parseInt(searchParams.page) : 1
	const { products, totalCount, totalPages } = await getPaginatedProductsWithImages({
		page,
		gender,
	})

	if (products.length === 0) {
		redirect(`/gender/${gender}`)
	}

	if (gender !== "kid" && gender !== "men" && gender !== "unisex" && gender !== "women") {
		notFound()
	}

	return (
		<>
			<Title title={gender} subtitle={`All ${gender} articles`} />
			<ProductGrid products={products} />
			<Pagination totalPages={totalPages} />
		</>
	)
}

interface GetServerSideProps {
	params: { gender: Gender }
	searchParams: {
		page?: string
	}
}
