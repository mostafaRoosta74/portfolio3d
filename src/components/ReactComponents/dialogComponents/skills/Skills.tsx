import { ScrollShadow } from '@nextui-org/react';
import { FrontEndSkills } from './sections/FrontEndSkills';
import AISkills from './sections/AISkills';
import { BackEndSkills } from './sections/BackEndSkills';

const Skills = () => (
	<ScrollShadow>
		<div className="grid gap-y-8 grid-cols-1">
			<FrontEndSkills />
			<AISkills />
			<BackEndSkills />
		</div>
	</ScrollShadow>
);

export default Skills;
