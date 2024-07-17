"use server"

import prisma from "@/lib/prisma"

import type { Address } from "@/interfaces"

export const setUserAddress = async (address: Address, userId: string) => {
	try {
		const newAddres = await createOrReplaceAddress(address, userId)

		return {
			ok: true,
			message: "Dirección guardada correctamente",
			address,
		}
	} catch (error) {
		return {
			ok: false,
			message: "Error al guardar la dirección",
		}
	}
}

const createOrReplaceAddress = async (address: Address, userId: string) => {
	try {
		const storedAddress = await prisma.userAddress.findUnique({
			where: { userId },
		})

		if (!storedAddress) {
			const newAddress = await prisma.userAddress.create({
				data: {
					...address,
					userId,
				},
			})

			return newAddress
		}

		const updatedAddress = await prisma.userAddress.update({
			where: { userId },
			data: {
				...address,
			},
		})

		return updatedAddress
	} catch (error) {
		throw new Error("Error al guardar la dirección")
	}
}
