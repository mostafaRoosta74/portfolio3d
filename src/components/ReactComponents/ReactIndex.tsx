import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import { useStore } from '../../App';
import { useEffect } from 'react';
import { Skills } from './dialogComponents/skills/Skills';
import { AboutMe } from './dialogComponents/aboutMe/AboutMe';

export const ReactIndex = () => {
	const { dialogKey, setDialogKey } = useStore();
	const { isOpen, onOpen, onClose } = useDisclosure({
		onClose() {
			setDialogKey('');
		},
	});

	useEffect(() => {
		if (!!dialogKey) {
			onOpen();
		} else {
			onClose();
		}
	}, [dialogKey, onClose, onOpen]);

	return (
		<main>
			<Modal
				backdrop={'blur'}
				isOpen={isOpen}
				onClose={onClose}
				size={'2xl'}
				scrollBehavior={'inside'}
			>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								{dialogKey}
							</ModalHeader>
							<ModalBody>{dialogSwitch(dialogKey)}</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</main>
	);
};

const dialogSwitch = (title: string) => {
	switch (title) {
		case 'Skills':
			return <Skills />;
		case 'About me':
			return <AboutMe />;
		default:
			return <></>;
	}
};
