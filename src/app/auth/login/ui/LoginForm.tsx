"use client"

import { useFormState, useFormStatus } from "react-dom"
import { IoInformationOutline } from "react-icons/io5"
import { useRouter } from "next/navigation"
import { authenticate } from "@/actions"
import { useEffect } from "react"
import Link from "next/link"
import clsx from "clsx"

export default function LoginForm(): React.ReactElement {
	const [state, dispatch] = useFormState(authenticate, undefined)

	useEffect(() => {
		if (state === "Success") {
			window.location.replace("/")
		}
	}, [state])

	return (
		<form action={dispatch} className="flex flex-col">
			<label htmlFor="email">Email</label>
			<input name="email" className="mb-5 rounded border bg-gray-200 px-5 py-2" type="email" />

			<label htmlFor="password">Password</label>
			<input
				name="password"
				className="mb-5 rounded border bg-gray-200 px-5 py-2"
				type="password"
			/>

			<div className="mb-2 flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
				{state === "CredentialsSignin" && (
					<>
						<IoInformationOutline className="h-5 w-5 text-red-500" />
						<p className="text-sm text-red-500">Invalid credentials</p>
					</>
				)}
			</div>

			<LoginButton />

			{/* divisor l ine */}
			<div className="my-5 flex items-center">
				<div className="flex-1 border-t border-gray-500"></div>
				<div className="px-2 text-gray-800">O</div>
				<div className="flex-1 border-t border-gray-500"></div>
			</div>

			<Link href="/auth/new-account" className="btn-secondary text-center">
				Create new account
			</Link>
		</form>
	)
}

function LoginButton() {
	const { pending } = useFormStatus()

	return (
		<button
			type="submit"
			className={clsx("btn-primary", {
				"opacity-50": pending,
			})}
			disabled={pending}
		>
			Login
		</button>
	)
}
