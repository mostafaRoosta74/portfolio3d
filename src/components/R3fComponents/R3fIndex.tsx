import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import React, { memo } from 'react';

const R3fIndex = () => {
	return (
		<>
			<Canvas
				style={{ height: '100vh', width: '100vw' }}
				id={'canvas'}
				camera={{
					fov: 13,
					near: 0.1,
					far: 100,
					position: [-6, 0, 6],
				}}
			>
				<Experience />
			</Canvas>
		</>
	);
};

export default memo(R3fIndex, () => true);
