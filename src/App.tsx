import R3fIndex from './components/R3fComponents/R3fIndex';
import { ReactIndex } from './components/ReactComponents/ReactIndex';
import React, { Suspense } from 'react';
import { create } from 'zustand';
import { Loader } from '@react-three/drei';

interface StateType {
	dialogKey: string;
	setDialogKey: (newKey: string) => void;
}

export const useStore = create<StateType>((set) => ({
	dialogKey: '',
	setDialogKey: (newKey: string) => set({ dialogKey: newKey }),
}));

export const App = () => {
	return (
		<>
			<Suspense fallback={null}>
				<R3fIndex />
			</Suspense>
			<Suspense fallback={null}>
				<ReactIndex />
			</Suspense>
			<Loader />
		</>
	);
};
