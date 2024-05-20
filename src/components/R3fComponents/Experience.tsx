import { Center, Preload } from '@react-three/drei';
import {
	EffectComposer,
	Selection,
	Outline,
	Vignette,
	Glitch,
	Bloom,
	LUT,
} from '@react-three/postprocessing';
import React, { useState } from 'react';
import { Vector2 } from 'three';
import type { Texture } from 'three';
import { Perf } from 'r3f-perf';
import { LUTCubeLoader } from 'postprocessing';
import { useLoader } from '@react-three/fiber';
import Model from './models/Room';
import CameraRig from './tools/CameraRig';

const Experience = () => {
	const [glitch, setGlitch] = useState(false);
	// const [PixelationNum,setPixelationNum] = useState(0);
	const texture: Texture = useLoader(LUTCubeLoader, '/object/F-6800-STD.cube');
	// const controls= useControls({
	//     light:{x:3.3,y:1,z:4.4}
	// })

	// useEffect(() => {
	//     setInterval(()=>{
	//         setGlitch(true)
	//         setTimeout(()=>{
	//             setGlitch(false);
	//             //setPixelationNum(Math.random() * 5)
	//         },500)
	//     },20000)
	// }, []);

	return (
		<>
			<Perf />
			<color args={['#000']} attach="background" />
			{/* <OrbitControls/> */}
			<CameraRig inView />
			{/* <Environment preset="city" /> */}
			<fog attach="fog" args={['#000', 40, 60]} />
			<mesh
				scale={3}
				position={[1, -1.161, -1.5]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
			>
				<ringGeometry args={[0.9, 1, 4, 1]} />
				<meshStandardMaterial
					color={[5, 5, 5]}
					roughness={0.75}
					toneMapped={false}
				/>
			</mesh>
			<mesh
				scale={3}
				position={[-1, -1.161, -1]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
			>
				<ringGeometry args={[0.9, 1, 3, 1]} />
				<meshStandardMaterial
					color={[5, 5, 5]}
					roughness={0.75}
					toneMapped={false}
				/>
			</mesh>

			<Center>
				<Selection>
					<EffectComposer multisampling={0} autoClear={false}>
						{/* <Pixelation granularity={PixelationNum} /> */}
						<Vignette offset={0.3} darkness={0.9} blendFunction={25} />
						<Glitch
							mode={3}
							delay={new Vector2(10, 11)}
							duration={new Vector2(0.5, 0.8)}
							strength={new Vector2(0.2, 0.4)}
							active={glitch}
						/>
						<Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />
						<Outline
							visibleEdgeColor={0xffffff}
							hiddenEdgeColor={0xffffff}
							blur={false}
							edgeStrength={10}
							xRay={false}
							pulseSpeed={0.6}
						/>
						<LUT lut={texture} />
					</EffectComposer>
					<directionalLight
						castShadow
						position={[3.3, 1, 4.4]}
						intensity={Math.PI * 2.5}
					/>

					<Model setGlitch={setGlitch} position={[0, -1, 0]} />
					{/* <mesh> */}
					{/*    <boxGeometry /> */}
					{/*    <meshBasicMaterial /> */}
					{/* </mesh> */}
				</Selection>
			</Center>

			<Preload all />
		</>
	);
};

export default Experience;
