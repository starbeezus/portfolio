import Image, { StaticImageData } from 'next/image'

interface CardProps {
	title?: string
	description?: string
	image?: StaticImageData | string
}

export function Card({ title, description, image }: CardProps) {
	return (
		<div className="m-4 w-2/5 rounded-lg bg-amber-300/50">
			{image && title && description && (
				<div className="flex flex-row">
					<Image
						className="m-6 aspect-square h-14 w-14 place-self-center rounded-lg bg-amber-300/50 p-2"
						src={image}
						alt={title}
						height={150}
					/>
					<div className="p-6">
						<h2 className="mb-2 text-center text-xl font-bold">{title}</h2>
						<p className="mx-6 mb-6 rounded-lg bg-amber-300/50 text-center text-base">
							{description}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
