import { DashboardCard } from '../DashboardCard'
import profilePic from '@/images/profilePic.jpeg'
import { SideRailItems } from './SideRailItems'
import SideRailFooter from './SideRailFooter'

export function SideRail() {
	return (
		<DashboardCard title="Brianne Douglas" description="Software Engineer" image={profilePic}>
			<SideRailItems />
			<SideRailFooter />
		</DashboardCard>
	)
}
