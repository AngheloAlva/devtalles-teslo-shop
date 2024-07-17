import prisma from "@/lib/prisma"

export const getUserAddress = async (userId: string) => {
	try {
		const adderss = await prisma.userAddress.findUnique({
			where: { userId },
		})

		if (!adderss) return null

		const { countryId, address2, ...rest } = adderss

		return {
			...rest,
			country: countryId,
			adderss2: address2 ? address2 : "",
		}
	} catch (error) {
		return null
	}
}
