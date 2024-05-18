import React, { useState } from 'react';
import { Gltf, Text, Text3D, useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber/dist/declarations/src/three-types';
import * as THREE from 'three';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Select } from '@react-three/postprocessing';
import { PortalFrame } from '../tools/PortalFrame';
import { useStore } from '../../../App';

export function Model(
	props: GroupProps & { setGlitch: (value: boolean) => void },
) {
	const { nodes: nod, materials } = useGLTF('./object/room2.glb');
	const nodes: {
		[name: string]: THREE.Object3D & { geometry: BufferGeometry };
	} = nod as any;

	const plantText = [
		'',
		"Don't touch the plants!",
		"I said don't touch the plants",
		'فارسی بلدی! به گیاه دست نزن',
		'بیا',
	];

	const [glitchCount, setGlitchCount] = useState(0);
	const [enabledObj, setEnabledObj] = React.useState('');

	const { setDialogKey } = useStore();

	const onMouseEnter = (name: string) => {
		setEnabledObj(name);
		document.body.style.cursor = 'pointer';
	};
	const onMouseLeave = () => {
		setEnabledObj('');
		document.body.style.cursor = 'auto';
	};

	return (
		<group {...props} dispose={null}>
			<Text
				fontSize={0.04}
				anchorX="right"
				position={[-1, 0.96, -1.3]}
				material-toneMapped={false}
			>
				{
					plantText[
						parseInt(`${glitchCount / 4}`) < plantText.length * 4
							? parseInt(`${glitchCount / 4}`)
							: plantText.length - 1
					]
				}
			</Text>
			{/*<Text fontSize={0.02} anchorX="right" position={[0.14,0.97,-1]} material-toneMapped={false}>*/}
			{/*  {"Dabble click to enter the portal"}*/}
			{/*</Text>*/}
			<Text3D
				font={'./fonts/helvetiker_regular.typeface.json'}
				size={0.02}
				height={0.0}
				position={[-0.2, 0.97, -1]}
			>
				Dabble click to enter the portal
			</Text3D>
			<group position={[-0.941, 0.01, -0.605]} rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					geometry={nodes.Bin_Bin_Metal_0.geometry}
					material={materials.Bin_Metal}
				/>
				<mesh
					geometry={nodes.Bin_Bin_Metal_0_1.geometry}
					material={materials.Bin_Shader}
				/>
			</group>
			<group
				onPointerEnter={() => onMouseEnter('books')}
				onPointerLeave={onMouseLeave}
				onClick={() => {
					setDialogKey('Skills');
				}}
			>
				<Select enabled={enabledObj === 'books'}>
					<group
						position={[1.066, 1.308, -1.019]}
						rotation={[Math.PI / 2, 0, 2.729]}
					>
						<mesh
							geometry={nodes.Book001_Book_Procedural_Shader_0.geometry}
							material={materials.Book_Procedural_Shader}
						/>
						<mesh
							geometry={nodes.Book001_Book_Procedural_Shader_0_1.geometry}
							material={materials.Desk_Oak}
						/>
						<mesh
							geometry={nodes.Book001_Book_Procedural_Shader_0_2.geometry}
							material={materials.Metal_Black}
						/>
						<mesh
							geometry={nodes.Book001_Book_Procedural_Shader_0_3.geometry}
							material={materials.Plant_Shader}
						/>
					</group>
				</Select>
			</group>

			{plantText.length - 1 > parseInt(`${glitchCount / 4}`) && (
				<group
					onPointerEnter={() => props.setGlitch(true)}
					onPointerLeave={(event) => {
						props.setGlitch(false);
						setGlitchCount((pre) => pre + 1);
					}}
				>
					<group position={[-1, 0.424, -1.029]} rotation={[0, 1.146, 0]}>
						<mesh
							geometry={nodes.Object_5.geometry}
							material={materials.leaf}
						/>
						<mesh
							geometry={nodes.Object_5_1.geometry}
							material={materials.bark_i_dunno_i_guess_thats_how_its_called}
						/>
					</group>
				</group>
			)}

			<mesh
				geometry={nodes.Plant_Pot.geometry}
				material={materials.Pot_Shader}
				position={[-1.015, 0.589, -0.988]}
				rotation={[-Math.PI / 2, 0, -0.518]}
			/>
			<mesh
				geometry={nodes.Imac_Mouse.geometry}
				material={materials['glass top']}
				position={[0.164, 0.707, -0.714]}
				rotation={[0, -0.435, 0]}
			/>
			<group
				position={[0.082, -0.002, -0.185]}
				rotation={[-1.577, -0.003, -2.646]}
			>
				<mesh
					geometry={nodes.Computer_Chair_Black_Plastic_0.geometry}
					material={materials.Black_Plastic}
				/>
				<mesh
					geometry={nodes.Computer_Chair_Black_Plastic_0_1.geometry}
					material={materials['Material.002']}
				/>
				<mesh
					geometry={nodes.Computer_Chair_Black_Plastic_0_2.geometry}
					material={materials.Chrome}
				/>
			</group>
			<group
				onPointerEnter={(e) => {
					e.stopPropagation();
					document.body.style.cursor = 'pointer';
				}}
				onPointerLeave={() => {
					document.body.style.cursor = 'auto';
				}}
			>
				<mesh
					geometry={nodes.iMac.geometry}
					material={materials.Chrome}
					position={[-0.009, 0.785, -1.034]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
			</group>
			<PortalFrame
				idd="02"
				name="tea"
				author="Omar Faruq Tawsif"
				geometry={nodes.screen.geometry}
				position={[-0.009, 0.785, -1.034]}
				rotation={[-Math.PI / 2, 0, 0]}
			>
				<Gltf
					src="object/fiesta_tea-transformed.glb"
					position={[0, -2, -3]}
					rotation={[0, -Math.PI / 2, -Math.PI / 2]}
				/>
			</PortalFrame>
			{/*<mesh geometry={nodes.screen.geometry} material={materials.iMac_Screen} position={[-0.009, 0.785, -1.034]} rotation={[-Math.PI / 2, 0, 0]} />*/}
			<group position={[-0.1, 0.716, -0.714]} rotation={[-1.529, 0.004, 0.092]}>
				<mesh
					geometry={nodes.Keyboard_iMac_Grey_Aluminium_0.geometry}
					material={materials['Material.003']}
				/>
				<mesh
					geometry={nodes.Keyboard_iMac_Grey_Aluminium_0_1.geometry}
					material={materials.iMac_White_Glass}
				/>
			</group>
			<mesh
				geometry={nodes.Desk_Mat.geometry}
				material={materials.Mat_Black}
				position={[-0.005, 0.703, -0.72]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<group
				onPointerEnter={() => onMouseEnter('speakers')}
				onPointerLeave={onMouseLeave}
			>
				<Select enabled={enabledObj === 'speakers'}>
					<group
						position={[0.539, 0.924, -0.994]}
						rotation={[-Math.PI / 2, 0, -0.232]}
					>
						<mesh
							geometry={nodes.Studio_Speaker_Speaker_Black_0.geometry}
							material={materials.Speaker_Black}
						/>
						<mesh
							geometry={nodes.Studio_Speaker_Speaker_Black_0_1.geometry}
							material={materials.Speaker_White}
						/>
					</group>
					<group
						position={[-0.556, 0.927, -0.994]}
						rotation={[-Math.PI / 2, 0, 0.301]}
					>
						<mesh
							geometry={nodes.Studio_Speaker002_Speaker_Black_0.geometry}
							material={materials.Speaker_Black}
						/>
						<mesh
							geometry={nodes.Studio_Speaker002_Speaker_Black_0_1.geometry}
							material={materials.Speaker_White}
						/>
					</group>
				</Select>
			</group>
			<group
				onPointerEnter={() => onMouseEnter('art')}
				onPointerLeave={onMouseLeave}
			>
				<Select
					enabled={enabledObj === 'art'}
					onClick={() => {
						setDialogKey('About me');
					}}
				>
					<mesh
						geometry={nodes['Poster_#1_Art'].geometry}
						material={materials.Art_02}
						position={[-0.703, 1.371, -1.227]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<group
						position={[-0.703, 1.371, -1.227]}
						rotation={[-Math.PI / 2, 0, 0]}
					>
						<mesh
							geometry={nodes['Poster_#1_Poster_White_Border_0'].geometry}
							material={materials.Poster_White_Border}
						/>
						<mesh
							geometry={nodes['Poster_#1_Poster_White_Border_0_1'].geometry}
							material={materials.Poster_Border_Black}
						/>
					</group>
					<mesh
						geometry={nodes['Poster_#2_Art'].geometry}
						material={materials.Art_01}
						position={[-0.01, 1.371, -1.227]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<group
						position={[-0.01, 1.371, -1.227]}
						rotation={[-Math.PI / 2, 0, 0]}
					>
						<mesh
							geometry={nodes['Poster_#2_Poster_White_Border_0'].geometry}
							material={materials.Poster_White_Border}
						/>
						<mesh
							geometry={nodes['Poster_#2_Poster_White_Border_0_1'].geometry}
							material={materials.Poster_Border_Black}
						/>
					</group>
					<mesh
						geometry={nodes['Poster_#3_Art'].geometry}
						material={materials.Art_03}
						position={[0.677, 1.371, -1.227]}
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<group
						position={[0.677, 1.371, -1.227]}
						rotation={[-Math.PI / 2, 0, 0]}
					>
						<mesh
							geometry={nodes['Poster_#3_Poster_Border_Black_0'].geometry}
							material={materials.Poster_Border_Black}
						/>
						<mesh
							geometry={nodes['Poster_#3_Poster_Border_Black_0_1'].geometry}
							material={materials.Poster_White_Border}
						/>
					</group>
				</Select>
			</group>
			<group position={[0.653, -0.012, -0.82]} rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					geometry={nodes['Desk_#2_Metal_Black_0'].geometry}
					material={materials.Metal_Black}
				/>
				<mesh
					geometry={nodes['Desk_#2_Metal_Black_0_1'].geometry}
					material={materials.Desk_Oak}
				/>
				<mesh
					geometry={nodes['Desk_#2_Metal_Black_0_2'].geometry}
					material={materials.Desk_Black}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('./object/room.glb');
