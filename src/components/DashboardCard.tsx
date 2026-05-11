import Image, { StaticImageData } from 'next/image'

interface DashboardCardProps {
  title?: string
  description?: string
  image?: StaticImageData | string
  children?: React.ReactNode
}

export function DashboardCard({
  title,
  description,
  image,
  children,
}: DashboardCardProps) {
  return (
    <div className="rounded min-w-fit overflow-hidden bg-olive-200 mt-24">
      {image && title && description && (
        <div>
          <Image
            className="rounded place-self-center aspect-square m-6"
            src={image}
            alt={title}
            height={150}
          />
          <div className="p-6">
            <h2 className="text-xl text-center font-bold mb-2">{title}</h2>
            <p className=" text-center text-base rounded bg-amber-300/50 underline decoration-wavy decoration-4 underline-offset-30 decoration-amber-300 mx-6 mb-6">
              {description}
            </p>
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
