import { Header } from '../Header'

interface TimelineItem {
	company: string
	date: string
	description: string[]
	location: string
	selectedAchievements?: string[]
	title: string
}

interface ResumeTimelineProps {
	items: TimelineItem[]
}

export default function ResumeTimeline({ items }: ResumeTimelineProps) {
	return (
		<div className="relative border-l border-gray-300 pl-6">
			{items.map((item, index) => (
				<div key={index} className="mb-10 ml-4">
					<div className="absolute -left-1.5 h-3 w-3 rounded-full border border-amber-400 bg-amber-300"></div>
					<Header optionalName={item.title} size="subHeader" />

					<p className="text-sm text-gray-600">
						{item.company} | {item.location}
					</p>
					<p className="mb-1 text-sm leading-none font-normal text-gray-500">
						{item.date}
					</p>

					<div className="mb-4 text-base font-normal text-gray-700">
						{item.description.map((point, i) => (
							<p key={i}>{point}</p>
						))}
					</div>
					{item.selectedAchievements && (
						<div className="mb-4 text-base font-normal text-gray-700">
							{item.selectedAchievements.map((point, i) => (
								<p key={i}>{point}</p>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	)
}
