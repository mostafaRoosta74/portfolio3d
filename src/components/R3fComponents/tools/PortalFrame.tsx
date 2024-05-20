import * as THREE from 'three';
import { MutableRefObject, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshPortalMaterial } from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';
import { PortalMaterialType } from '@react-three/drei/core/MeshPortalMaterial';
// eslint-disable-next-line import/no-unresolved
import { GroupProps } from '@react-three/fiber/dist/declarations/src/three-types';

type PortalFrameProps = {
	idd: string;
	author: string;
	width: number | undefined;
	height: number | undefined;
	geometry: THREE.BufferGeometry;
} & GroupProps;
const PortalFrame = ({
	idd,
	width = 1,
	height = 1.61803398875,
	children = null,
	geometry,
	...props
}: PortalFrameProps) => {
	const portal =
		useRef<PortalMaterialType>() as MutableRefObject<PortalMaterialType>;
	const [, setLocation] = useLocation();
	const [, params] = useRoute('/item/:id');

	useFrame((state, dt) =>
		easing.damp(portal.current, 'blend', params?.id === idd ? 1 : 0, 0.2, dt),
	);
	return (
		<group {...props}>
			<mesh
				name={idd}
				geometry={geometry}
				onDoubleClick={(e) => {
					e.stopPropagation();
					setLocation(`/item/${e.object.name}`);
				}}
			>
				{/* <planeGeometry args={[width, height]} /> */}
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
export default PortalFrame;
