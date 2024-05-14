import {
  Bloom,
  EffectComposer,
  Glitch, Outline,
  Vignette
} from "@react-three/postprocessing";
import React from "react";
import {Vector2} from "three";

export const Effects = (props:{glitch:boolean}) => {
    return (

        <EffectComposer>
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
                active={props.glitch}
            />

            {/*<Noise*/}
            {/*    //premultiply*/}
            {/*    blendFunction={BlendFunction.OVERLAY}*/}
            {/*/>*/}
            <Bloom
                mipmapBlur
                intensity={0.1}
                luminanceThreshold={0}
            />
          {/*<Outline blur hiddenEdgeColor="#99c4ac" edgeStrength={5} />*/}

        </EffectComposer>

    )
}