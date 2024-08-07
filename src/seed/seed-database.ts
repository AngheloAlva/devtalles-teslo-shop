import { countries } from "./seed-countries"
import { initialData } from "./seed"
import prisma from "../lib/prisma"

async function main() {
	console.log("Seeding database...")

	// await Promise.all([
	await prisma.productImage.deleteMany()
	await prisma.product.deleteMany()
	await prisma.category.deleteMany()
	await prisma.userAddress.deleteMany()
	await prisma.user.deleteMany()
	await prisma.country.deleteMany()
	// ])

	const { categories, products, users } = initialData

	await prisma.user.createMany({
		data: users,
	})

	await prisma.country.createMany({
		data: countries,
	})

	const categoriesData = categories.map((category) => ({
		name: category,
	}))

	await prisma.category.createMany({
		data: categoriesData,
	})

	const categoriesDb = await prisma.category.findMany()

	const categoriesMap = categoriesDb.reduce(
		(map, category) => {
			map[category.name.toLowerCase()] = category.id
			return map
		},
		{} as Record<string, string>
	) //<string=shirt, string=categoryID>

	products.forEach(async (product) => {
		const { images, type, ...rest } = product

		const dbProduct = await prisma.product.create({
			data: {
				...rest,
				categoryId: categoriesMap[type],
			},
		})

		const imagesData = images.map((image) => ({
			url: image,
			productId: dbProduct.id,
		}))

		await prisma.productImage.createMany({
			data: imagesData,
		})
	})

	console.log("Database seeded!")
}

;(() => {
	if (process.env.NODE_ENV === "production") return

	main()
})()
