import { IconType } from 'react-icons'
import {
  PiGraduationCapLight as GraduationCap,
  PiMapPinLight as MapPin,
  PiBriefcaseLight as Briefcase,
  PiMailboxLight as Mailbox,
  PiPhoneLight as Phone,
} from 'react-icons/pi'

interface sideRailItemsProps {
  id: number
  name: string
  info: string | string[]
  icon: IconType
}
const sideRailItems: sideRailItemsProps[] = [
  {
    id: 1,
    name: 'Education',
    info: ['Gustavus Adolphus College', 'B.A. Computer Science'],
    icon: GraduationCap,
  },
  {
    id: 2,
    name: 'Location',
    info: ['Saint Paul, MN', 'Philadelphia, PA', 'West Orange, NJ'],
    icon: MapPin,
  },
  {
    id: 3,
    name: 'Experience',
    info: '4+ Years',
    icon: Briefcase,
  },
  {
    id: 4,
    name: 'Email',
    info: 'douglasbrianne@gmail.com',
    icon: Mailbox,
  },
  {
    id: 5,
    name: 'Phone',
    info: '973.908.3299',
    icon: Phone,
  },
]

export function SideRailItems() {
  return (
    <div className="flex flex-col">
      {sideRailItems.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.id} className=" m-4">
            <div className="flex flex-row">
              <Icon className="m-2 self-center rounded h-6 w-6" />
              <div className="self-center">{item.name}</div>
            </div>
            {Array.isArray(item.info) ? (
              item.info.map((infoItem, i) => (
                <div key={i} className="">
                  {infoItem}
                </div>
              ))
            ) : (
              <div>{item.info}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
