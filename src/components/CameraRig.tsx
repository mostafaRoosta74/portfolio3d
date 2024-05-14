import {useFrame} from "@react-three/fiber";
import { easing } from 'maath'
import {MathUtils} from "three";
import {isMobile} from "../utils/utils";
export const CameraRig = (props:{inView:boolean}) =>{
  const a = document.getElementById("canvas")!;

  useFrame((state, delta) => {
    const offset = (a.offsetTop-window.scrollY) / 1000;

    if (props.inView){
      if (isMobile()){
        easing.damp3(state.camera.position, [0 + -(state.pointer.y * state.viewport.width) * 0.2,0, 16], 0.5, delta)
        state.camera.rotation.set(0,0,MathUtils.degToRad(90))
      }else {
        easing.damp3(state.camera.position, [0 + (state.pointer.x * state.viewport.width) * 1.5,3, 7], 0.5, delta)
        state.camera.lookAt(0, 0, 0);
      }
    }else {
      easing.damp3(state.camera.position, [50,40,15], 0.5, delta)
      state.camera.lookAt(0, 0, 0)
    }
  })
  return null
}
