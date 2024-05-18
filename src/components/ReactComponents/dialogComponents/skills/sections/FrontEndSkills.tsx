import { Chip, Divider } from '@nextui-org/react';

export const FrontEndSkills = () => {
	return (
		<div>
			<div className="space-y-1">
				<h4 className="text-medium font-medium">FrontEnd</h4>
				<p className="text-small text-default-400">
					These are some of my FrontEnd skills
				</p>
			</div>
			<Divider className="mt-2" />
			<div className="flex flex-row flex-wrap items-center space-x-2 space-y-2 text-small">
				<Chip
					variant="shadow"
					classNames={{
						base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 mt-2 ml-2',
						content: 'drop-shadow shadow-black text-white ',
					}}
				>
					React
				</Chip>
				<Chip color="default" variant="shadow">
					Typescript
				</Chip>
				<Chip color="default" variant="shadow">
					HTML/CSS
				</Chip>
				<Chip color="default" variant="shadow">
					JavaScript
				</Chip>
				<Chip color="default" variant="shadow">
					Material UI
				</Chip>
				<Chip color="default" variant="shadow">
					testing-library
				</Chip>
				<Chip color="default" variant="shadow">
					Jest
				</Chip>
				<Chip
					variant="shadow"
					classNames={{
						base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
						content: 'drop-shadow shadow-black text-white',
					}}
				>
					Tree.js
				</Chip>
				<Chip color="default" variant="shadow">
					React three fiber
				</Chip>
				<Chip color="default" variant="shadow">
					axios
				</Chip>
				<Chip color="default" variant="shadow">
					i18next
				</Chip>
				<Chip color="default" variant="shadow">
					lodash
				</Chip>
				<Chip color="default" variant="shadow">
					moment
				</Chip>
				<Chip color="default" variant="shadow">
					notistack
				</Chip>
				<Chip color="default" variant="shadow">
					react-apexcharts
				</Chip>
				<Chip color="default" variant="shadow">
					react-router
				</Chip>
				<Chip color="default" variant="shadow">
					react-tracked
				</Chip>
				<Chip color="default" variant="shadow">
					yup
				</Chip>
				<Chip
					variant="shadow"
					classNames={{
						base: 'bg-gradient-to-br from-blue-500 to-green-500 border-small border-white/50 shadow-green-500/30',
						content: 'drop-shadow shadow-black text-white',
					}}
				>
					Formalite
				</Chip>
				<Chip color="default" variant="shadow">
					zustand
				</Chip>
				<Chip color="default" variant="shadow">
					Redux
				</Chip>
				<Chip color="default" variant="shadow">
					React Query
				</Chip>
				<Chip color="default" variant="shadow">
					Formic
				</Chip>
				<Chip color="default" variant="shadow">
					emotion
				</Chip>
				<Chip color="default" variant="shadow">
					bignumber.js
				</Chip>
				<Chip color="default" variant="shadow">
					eslint
				</Chip>
				<Chip color="default" variant="shadow">
					vite
				</Chip>
				<Chip color="default" variant="shadow">
					workboxjs
				</Chip>
				<Chip color="default" variant="shadow">
					nx
				</Chip>
				<Chip color="default" variant="shadow">
					husky
				</Chip>
				<Chip color="default" variant="shadow">
					storybook
				</Chip>
				<Chip color="default" variant="shadow">
					rollup
				</Chip>
				<Chip color="default" variant="shadow">
					rollup
				</Chip>
			</div>
		</div>
	);
};
