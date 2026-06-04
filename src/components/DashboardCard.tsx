import Image, { StaticImageData } from 'next/image'

interface DashboardCardProps {
	title?: string
	description?: string
	image?: StaticImageData | string
	children?: React.ReactNode
}

export function DashboardCard({ title, description, image, children }: DashboardCardProps) {
	return (
		<div className="mt-24 min-w-fit overflow-hidden rounded-lg bg-olive-200">
			{image && title && description && (
				<div>
					<Image
						className="m-6 aspect-square place-self-center rounded-lg bg-amber-300/50 p-2"
						src={image}
						alt={title}
						height={150}
					/>
					<div className="p-6">
						<h2 className="mb-2 text-center text-xl font-bold">{title}</h2>
						<p className="mx-6 mb-6 rounded-lg bg-amber-300/50 text-center text-base underline decoration-amber-300 decoration-wavy decoration-4 underline-offset-30">
							{description}
						</p>
					</div>
				</div>
			)}
			{children}
		</div>
	)
}
