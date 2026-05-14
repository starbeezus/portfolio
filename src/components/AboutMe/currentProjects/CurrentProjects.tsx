import { Card } from './Card'
import testPic from '@/images/testPic.png'
export default function CurrentProjects() {
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center">
      <Card title="test title" description="test description" image={testPic} />
      <Card title="test title" description="test description" image={testPic} />
      <Card title="test title" description="test description" image={testPic} />
      <Card title="test title" description="test description" image={testPic} />
    </div>
  )
}
