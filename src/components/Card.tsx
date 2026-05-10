import Image, { StaticImageData } from 'next/image'

interface CardProps {
  title?: string
  description?: string
  image?: StaticImageData | string
  children?: React.ReactNode
}

export function Card({ title, description, image, children }: CardProps) {
  return (
    <div className="rounded  min-w-fit overflow-hidden shadow-lg bg-amber-500/15  hover:shadow-xl transition-shadow duration-300 m-4">
      {image && title && description && (
        <div>
          <Image
            className="rounded place-self-center aspect-square m-6"
            src={image}
            alt={title}
            height={150}
          />
          <div className="p-6">
            <h2 className="text-xl text-center font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 text-center text-base rounded bg-gray-400/15">
              {description}
            </p>
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
