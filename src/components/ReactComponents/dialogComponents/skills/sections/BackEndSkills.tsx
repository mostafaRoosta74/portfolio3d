import { Chip, Divider } from '@nextui-org/react';

export const BackEndSkills = () => {
	return (
		<div>
			<div className="space-y-1">
				<h4 className="text-medium font-medium">BackEnd</h4>
				<p className="text-small text-default-400">
					These are some of my BackEnd skills
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
					Laravel
				</Chip>
				<Chip color="default" variant="shadow">
					PHP
				</Chip>
				<Chip color="default" variant="shadow">
					MySql
				</Chip>
			</div>
		</div>
	);
};
