import { Chip, Divider } from '@nextui-org/react';
import ColorfulChip from '../../components/ColorfulChip';

const BackEndSkills = () => (
	<div>
		<div className="space-y-1">
			<h4 className="text-medium font-medium">BackEnd</h4>
			<p className="text-small text-default-400">
				These are some of my BackEnd skills
			</p>
		</div>
		<Divider className="mt-2" />
		<div className="flex flex-row flex-wrap items-center space-x-2 space-y-2 text-small">
			<ColorfulChip>Laravel</ColorfulChip>
			<Chip color="default" variant="shadow">
				PHP
			</Chip>
			<Chip color="default" variant="shadow">
				MySql
			</Chip>
		</div>
	</div>
);
export default BackEndSkills;
