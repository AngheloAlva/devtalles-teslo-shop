import { Size } from "@/seed/seed"
import clsx from "clsx"

export default function SizeSelector({
	selectedSize,
	availableSizes,
}: SizeSelectorProps): React.ReactElement {
	return (
		<div className="my-5">
			<h3 className="mb-4 font-bold">Available sizes:</h3>

			<div className="flex">
				{availableSizes.map((size) => (
					<button
						className={clsx("mx-2 text-lg hover:underline", {
							underline: size === selectedSize,
						})}
						key={size}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	)
}

interface SizeSelectorProps {
	selectedSize: Size
	availableSizes: Size[]
}
