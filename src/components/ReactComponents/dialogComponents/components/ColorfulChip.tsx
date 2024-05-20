import { Chip } from '@nextui-org/react';
import { ReactNode } from 'react';

const ColorfulChip = ({ children }: { children: ReactNode }) => (
	<Chip
		variant="shadow"
		classNames={{
			base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 mt-2 ml-2',
			content: 'drop-shadow shadow-black text-white ',
		}}
	>
		{children}
	</Chip>
);
export default ColorfulChip;
