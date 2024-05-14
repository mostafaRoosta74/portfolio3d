import {
    Center, Environment, Gltf, Loader, MeshReflectorMaterial, OrbitControls, Preload, Text, Text3D, useFaceControls
} from "@react-three/drei";
import {
    EffectComposer,
    Selection,
    Select,
    Outline,
    Vignette,
    Glitch,
    Bloom,
    Pixelation, SMAA, LUT, SSR
} from "@react-three/postprocessing"
import {CameraRig} from "./tools/CameraRig";
import React, {Suspense, useEffect, useState} from "react";
import {Vector2} from "three";
import {Model} from "./models/Room";
import {isMobile} from "../../utils/utils";
import {PortalFrame} from "./tools/PortalFrame";
import {useControls} from "leva";
import {Perf} from "r3f-perf";
import {LUTCubeLoader} from "postprocessing";
import {useLoader} from "@react-three/fiber";

export default function Experience()
{

    const [glitch,setGlitch] = useState(false);
    //const [PixelationNum,setPixelationNum] = useState(0);
    const texture = useLoader(LUTCubeLoader, '/object/F-6800-STD.cube')

    // useEffect(() => {
    //     setInterval(()=>{
    //         setGlitch(true)
    //         setTimeout(()=>{
    //             setGlitch(false);
    //             //setPixelationNum(Math.random() * 5)
    //         },500)
    //     },20000)
    // }, []);

    return <>
        {/*<Perf/>*/}
        <color args={["#000"]} attach={"background"} />
        {/*<OrbitControls/>*/}
        <CameraRig inView={true}/>
        <Environment preset="city" />
        <fog attach="fog" args={['#000', 40, 60]} />
        <mesh scale={3} position={[1, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
            <ringGeometry args={[0.9, 1, 4, 1]} />
            <meshStandardMaterial color={[5,5,5]} roughness={0.75} toneMapped={false}/>
        </mesh>
        <mesh scale={3  } position={[-1, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
            <ringGeometry args={[0.9, 1, 3, 1]} />
            <meshStandardMaterial color={[5,5,5]} roughness={0.75} toneMapped={false} />
        </mesh>

        <Center>
            <Selection>
                <EffectComposer multisampling={0} autoClear={false}>
                    {/*<Pixelation granularity={PixelationNum} />*/}
                    <Vignette
                      offset={0.3}
                      darkness={0.9}
                      blendFunction={25}
                    />
                    <Glitch
                      mode={3}
                      delay={new Vector2(10, 11)}
                      duration={new Vector2(0.5,0.8)}
                      strength={new Vector2(0.2,0.4)}
                      active={glitch}
                    />
                    <Bloom
                      mipmapBlur
                      intensity={0.1}
                      luminanceThreshold={0}
                    />
                    <Outline visibleEdgeColor={0xffffff} hiddenEdgeColor={0xffffff} blur={false} edgeStrength={10} xRay={false} pulseSpeed={0.6} />
                    <LUT lut={texture as any} />

                </EffectComposer>
                <directionalLight
                    position={[3.3, 1.0, 4.4]}
                    intensity={Math.PI * 2}
                />
                <Suspense fallback={null}>
                    <Model setGlitch={setGlitch} position={[0,-1,0]}/>
                </Suspense>
                {/*<mesh>*/}
                {/*    <boxGeometry />*/}
                {/*    <meshBasicMaterial />*/}
                {/*</mesh>*/}
            </Selection>
        </Center>

        <Preload all />
    </>
}

