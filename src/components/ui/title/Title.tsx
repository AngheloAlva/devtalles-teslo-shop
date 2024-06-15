import { titleFont } from "@/config/fonts"

export default function Title({ title, className, subtitle }: TitleProps): React.ReactElement {
	return (
		<div className={`mt-3 ${className}`}>
			<h1
				className={`${titleFont.className} mb-3 mt-7 text-4xl font-semibold capitalize antialiased`}
			>
				{title}
			</h1>

			{subtitle && <h3 className="mb-10 text-xl">{subtitle}</h3>}
		</div>
	)
}

interface TitleProps {
	title: string
	subtitle?: string
	className?: string
}
