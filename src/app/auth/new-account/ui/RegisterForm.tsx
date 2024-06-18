"use client"

import { login, registerUser } from "@/actions"
import { useForm } from "react-hook-form"
import { useState } from "react"
import Link from "next/link"
import clsx from "clsx"

export default function RegisterForm(): React.ReactElement {
	const [errorMessage, setErrorMessage] = useState("")
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormInputs>()

	const onSubmit = async (data: RegisterFormInputs) => {
		setErrorMessage("")
		const { email, name, password } = data
		const response = await registerUser(name, email, password)

		if (!response.ok) {
			setErrorMessage(response.message)
			return
		}

		await login(email.toLowerCase(), password)

		window.location.replace("/")
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
			{/* {errors.name?.type === "required" && (
				<span className="text-sm text-red-500">Name is required</span>
			)} */}

			<label htmlFor="text">Full name</label>
			<input
				className={clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
					"border-red-500": errors.name,
				})}
				type="text"
				{...(register("name"), { required: true })}
			/>

			<label htmlFor="email">Email</label>
			<input
				className={clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
					"border-red-500": errors.email,
				})}
				type="email"
				{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
			/>

			<label htmlFor="email">Password</label>
			<input
				className={clsx("mb-5 rounded border bg-gray-200 px-5 py-2", {
					"border-red-500": errors.password,
				})}
				type="password"
				{...(register("password"), { required: true, minLength: 6 })}
			/>

			{errorMessage && <span className="text-red-500">{errorMessage}</span>}
			<button className="btn-primary">Register</button>

			{/* divisor l ine */}
			<div className="my-5 flex items-center">
				<div className="flex-1 border-t border-gray-500"></div>
				<div className="px-2 text-gray-800">O</div>
				<div className="flex-1 border-t border-gray-500"></div>
			</div>

			<Link href="/auth/login" className="btn-secondary text-center">
				Log in
			</Link>
		</form>
	)
}

interface RegisterFormInputs {
	name: string
	email: string
	password: string
}
