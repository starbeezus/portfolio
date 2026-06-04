import Link from 'next/link'

const navItems = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: '/projects',
		name: 'Projects',
	},
	{
		path: '/resume',
		name: 'Resume',
	},
]

export function Navigation() {
	return (
		<aside className="mb-16 -ml-2 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="fade relative flex scroll-pr-6 flex-row-reverse px-0 pb-0 md:relative md:overflow-auto"
					id="nav"
				>
					<div className="flex flex-row space-x-0 rounded-lg bg-olive-300">
						{navItems.map(({ path, name }) => {
							return (
								<Link
									key={path}
									href={path}
									className="relative m-1 flex rounded-lg px-2 py-1 align-middle text-lg font-black transition-all hover:bg-amber-300/50 hover:text-white dark:hover:text-neutral-200"
								>
									{name}
								</Link>
							)
						})}
					</div>
				</nav>
			</div>
		</aside>
	)
}
