"use server"

import prisma from "@/lib/prisma"

export const getPaginatedProductsWithImages = async ({
	page = 1,
	take = 12,
	gender,
}: PaginationOptions) => {
	if (isNaN(page)) page = 1
	if (page < 1) page = 1

	let filters = {}

	if (gender) {
		filters = {
			...filters,
			gender,
		}
	}

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
			where: filters,
		})

		const totalCount = await prisma.product.count({
			where: filters,
		})
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
	gender?: string
}
