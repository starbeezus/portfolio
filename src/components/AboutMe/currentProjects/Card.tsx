import Image, { StaticImageData } from 'next/image'

interface CardProps {
  title?: string
  description?: string
  image?: StaticImageData | string
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="rounded-lg bg-amber-300/50 m-4 w-2/5">
      {image && title && description && (
        <div className="flex flex-row">
          <Image
            className="rounded-lg place-self-center h-14 w-14 aspect-square p-2 m-6 bg-amber-300/50"
            src={image}
            alt={title}
            height={150}
          />
          <div className="p-6">
            <h2 className="text-xl text-center font-bold mb-2">{title}</h2>
            <p className=" text-center text-base rounded-lg bg-amber-300/50 mx-6 mb-6">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
