import { DashboardCard } from '../DashboardCard'
import profilePic from '@/images/profilePic.jpeg'
import { SideRailItems } from './SideRailItems'

export function SideRail() {
  return (
    <DashboardCard
      title="Brianne Douglas"
      description="Software Engineer"
      image={profilePic}
    >
      {/* <hr className="bg-amber-300 border-amber-300 rounded h-1.5 ml-4 mr-4 mb-5" /> */}
      <SideRailItems />
    </DashboardCard>
  )
}
