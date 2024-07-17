import { getCountries, getUserAddress } from "@/actions"

import AddressForm from "./ui/AddressForm"
import { Title } from "@/components"
import { auth } from "@/auth.config"

export default async function AddressPage() {
	const countries = await getCountries()

	const session = await auth()

	if (!session?.user) {
		return <h3>You need to be logged in to access</h3>
	}

	const userAddress = await getUserAddress(session.user.id)

	return (
		<div className="mb-72 flex flex-col px-10 sm:items-center sm:justify-center sm:px-0">
			<div className="flex w-full flex-col justify-center text-left xl:w-[1000px]">
				<Title title="Dirección" subtitle="Dirección de entrega" />

				<AddressForm countries={countries} userStoredAddress={userAddress as any} />
			</div>
		</div>
	)
}
