import Link from 'next/link'
import { FaLinkedinIn as LinkedIn, FaGithub as Github } from 'react-icons/fa6'
const navLinks = [
	{
		path: 'https://www.linkedin.com/in/brianne-douglas-a44a54158',
		name: 'LinkedIn',
		icon: LinkedIn,
	},
	{
		path: 'https://github.com/starbeezus',
		name: 'Github',
		icon: Github,
	},
]
export default function SideRailFooter() {
	return (
		<div className="flex flex-row justify-evenly">
			{navLinks.map(({ path, name, icon }, i) => {
				const Icon = icon
				return (
					<div
						key={i}
						className="group mb-4 flex h-10 w-28 cursor-pointer flex-col items-center justify-center rounded-lg transition-colors duration-300 hover:bg-amber-300/50"
					>
						<Icon className="text-4xl text-amber-300/80 transition-opacity duration-300 group-hover:opacity-0" />
						<div className="absolute text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<Link key={path} href={path}>
								{name}
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}
