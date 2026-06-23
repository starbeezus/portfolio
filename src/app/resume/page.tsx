import ResumeTimeline from '@/components/resume/ResumeTimeline'
import { Strings } from '@/resources/strings'

export default function Resume() {
	return (
		<div className="min-h-screen p-6">
			<ResumeTimeline items={Strings.Resume.timelineData} />
		</div>
	)
}
