import {
    Center, OrbitControls
} from "@react-three/drei";
import {
    EffectComposer,
    Selection,
    Select,
    Outline,
    Vignette,
    Glitch,
    Bloom,
    Pixelation
} from "@react-three/postprocessing"
import {CameraRig} from "./components/CameraRig";
import React, {useEffect, useState} from "react";
import {Vector2} from "three";
import {Model} from "./Room";

export default function Experience()
{

    const [glitch,setGlitch] = useState(false);
    const [PixelationNum,setPixelationNum] = useState(0);

    useEffect(() => {
        setInterval(()=>{
            setGlitch(true)
            setTimeout(()=>{
                setGlitch(false);
                setPixelationNum(Math.random() * 5)
            },500)
        },20000)
    }, []);

    return <>
        <color args={["#000"]} attach={"background"} />
        {/*<OrbitControls/>*/}
        <CameraRig inView={true}/>

        <fog attach="fog" args={['#000', 40, 60]} />
        <Center>
            <Selection>
                <EffectComposer multisampling={1} autoClear={false}>
                    <Pixelation granularity={PixelationNum} />
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
                    <Outline blur hiddenEdgeColor="#99c4ac" edgeStrength={5}  />
                </EffectComposer>
                <directionalLight
                    position={[3.3, 1.0, 4.4]}
                    castShadow
                    intensity={Math.PI * 2}
                />
                <Model/>
                {/*<mesh>*/}
                {/*    <boxGeometry />*/}
                {/*    <meshBasicMaterial />*/}
                {/*</mesh>*/}
            </Selection>
        </Center>

    </>
}

