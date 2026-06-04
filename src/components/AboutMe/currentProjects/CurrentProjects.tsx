import { Card } from './Card'
import testPic from '@/images/testPic.png'
export default function CurrentProjects() {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-4">
			<Card title="test title" description="test description" image={testPic} />
			<Card title="test title" description="test description" image={testPic} />
			<Card title="test title" description="test description" image={testPic} />
			<Card title="test title" description="test description" image={testPic} />
		</div>
	)
}
