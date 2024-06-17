import { persist } from "zustand/middleware"
import { create } from "zustand"

import type { CartProduct } from "@/interfaces"

interface State {
	cart: CartProduct[]
	getTotalItems: () => number
	getSummaryInformation: () => {
		tax: number
		total: number
		subTotal: number
		itemsInCart: number
	}
	addProductToCart: (product: CartProduct) => void
	updateProductQuantity: (product: CartProduct, quantity: number) => void
	removeProduct: (product: CartProduct) => void
}

export const useCartStore = create<State>()(
	persist(
		(set, get) => ({
			cart: [],
			addProductToCart: (product: CartProduct) => {
				const { cart } = get()

				const productInCart = cart.some(
					(item) => item.id === product.id && item.size === product.size
				)

				if (!productInCart) {
					set({ cart: [...cart, product] })
					return
				}

				const updatedCartProducts = cart.map((item) => {
					if (item.id === product.id && item.size === product.size) {
						return { ...item, quantity: item.quantity + product.quantity }
					}

					return item
				})

				set({ cart: updatedCartProducts })
			},
			getTotalItems: () => {
				const { cart } = get()

				return cart.reduce((total, item) => total + item.quantity, 0)
			},
			getSummaryInformation: () => {
				const { cart } = get()

				const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
				const tax = subTotal * 0.19
				const total = subTotal + tax
				const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)

				return {
					tax,
					total,
					subTotal,
					itemsInCart,
				}
			},
			updateProductQuantity: (product: CartProduct, quantity: number) => {
				const { cart } = get()

				const updatedCartProducts = cart.map((item) => {
					if (item.id === product.id && item.size === product.size) {
						return { ...item, quantity }
					}

					return item
				})

				set({ cart: updatedCartProducts })
			},
			removeProduct: (product: CartProduct) => {
				const { cart } = get()

				const updatedCartProducts = cart.filter(
					(item) => item.id !== product.id || item.size !== product.size
				)

				set({ cart: updatedCartProducts })
			},
		}),
		{
			name: "shopping-cart",
		}
	)
)
