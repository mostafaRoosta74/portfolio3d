import React, { Suspense } from 'react';
import { create } from 'zustand';
import { Loader } from '@react-three/drei';
import { Workbox } from 'workbox-window';
import R3fIndex from './components/R3fComponents/R3fIndex';
import { ReactIndex } from './components/ReactComponents/ReactIndex';

interface StateType {
	dialogKey: string;
	setDialogKey: (newKey: string) => void;
}

export const useStore = create<StateType>((set) => ({
	dialogKey: '',
	setDialogKey: (newKey: string) => set({ dialogKey: newKey }),
}));

export const App = () => {
	// service worker
	if ('serviceWorker' in navigator) {
		const wb = new Workbox('/sw.js');
		wb.addEventListener('waiting', () => {
			window.location.reload();
			wb.messageSW({ type: 'SKIP_WAITING' });
		});
		wb.register();
	}

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
