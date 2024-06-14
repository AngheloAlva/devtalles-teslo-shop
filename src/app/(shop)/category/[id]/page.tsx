import { notFound } from "next/navigation"

export default function CategoryPage({ params }: GetServerSideProps): React.ReactElement {
	const { id } = params

	if (id === "kids") {
		notFound()
	}

	return (
		<div>
			<h1>Cart Page</h1>
		</div>
	)
}

interface GetServerSideProps {
	params: { id: string }
}
