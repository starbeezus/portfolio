import { Card } from '../Card'
import profilePic from '@/images/profilePic.jpeg'
import { SideRailItems } from './SideRailItems'

export function SideRail() {
  return (
    <Card
      title="Brianne Douglas"
      description="Software Engineer"
      image={profilePic}
    >
      <hr className="bg-gray-900/85 border-gray-900/15 h-1.5 m-2" />
      <SideRailItems />
    </Card>
  )
}
