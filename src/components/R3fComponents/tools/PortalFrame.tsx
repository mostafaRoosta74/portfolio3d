import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshPortalMaterial } from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';

type PortalFrameProps = {
	idd: string;
	author: string;
	width?: number;
	height?: number;
	geometry: THREE.BufferGeometry;
} & JSX.IntrinsicElements['group'];
export const PortalFrame = ({
	idd,
	width = 1,
	height = 1.61803398875,
	children = <></>,
	geometry,
	...props
}: PortalFrameProps) => {
	const portal = useRef<any>();
	const [, setLocation] = useLocation();
	const [, params] = useRoute('/item/:id');
	const [hovered, hover] = useState(false);

	useFrame((state, dt) =>
		easing.damp(portal.current, 'blend', params?.id === idd ? 1 : 0, 0.2, dt),
	);
	return (
		<group {...props}>
			<mesh
				name={idd}
				geometry={geometry}
				onDoubleClick={(e) => (
					e.stopPropagation(), setLocation('/item/' + e.object.name)
				)}
				onPointerOver={(e) => hover(true)}
				onPointerOut={() => hover(false)}
			>
				{/*<planeGeometry args={[width, height]} />*/}
				<MeshPortalMaterial
					ref={portal}
					events={params?.id === idd}
					side={THREE.FrontSide}
				>
					{children}
				</MeshPortalMaterial>
			</mesh>
		</group>
	);
};
