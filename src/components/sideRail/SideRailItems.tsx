import { IconType } from 'react-icons'
import {
	PiGraduationCapBold as GraduationCap,
	PiMapPinBold as MapPin,
	PiBriefcaseBold as Briefcase,
	PiMailboxBold as Mailbox,
	PiPhoneBold as Phone,
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
		name: 'Experience',
		info: '4+ Years',
		icon: Briefcase,
	},
	{
		id: 2,
		name: 'Location',
		info: ['Philadelphia, PA', 'West Orange, NJ'],
		icon: MapPin,
	},
	{
		id: 3,
		name: 'Education',
		info: ['Gustavus Adolphus College', 'B.A. Computer Science'],
		icon: GraduationCap,
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
					<div key={item.id} className="mb-4 ml-4">
						<div className="flex flex-row">
							<Icon className="mr-2 ml-2 h-6 w-6 self-center text-amber-300" />
							<div className="self-center font-semibold">{item.name}</div>
						</div>
						{Array.isArray(item.info) ? (
							item.info.map((infoItem, i) => (
								<div key={i} className="ml-4">
									{infoItem}
								</div>
							))
						) : (
							<div className="ml-4">{item.info}</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
