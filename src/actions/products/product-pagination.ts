"use server"

import prisma from "@/lib/prisma"

export const getPaginatedProductsWithImages = async ({
	page = 1,
	take = 12,
}: PaginationOptions) => {
	if (isNaN(page)) page = 1
	if (page < 1) page = 1

	try {
		const products = await prisma.product.findMany({
			take: take,
			skip: (page - 1) * take,
			include: {
				images: {
					take: 2,
					select: {
						url: true,
					},
				},
			},
		})

		const totalCount = await prisma.product.count()
		const totalPages = Math.ceil(totalCount / take)

		return {
			products: products.map((product) => ({
				...product,
				images: product.images.map((image) => image.url),
			})),
			totalPages,
			totalCount,
		}
	} catch (error) {
		throw new Error("Error getting products with images")
	}
}

interface PaginationOptions {
	page?: number
	take?: number
}
