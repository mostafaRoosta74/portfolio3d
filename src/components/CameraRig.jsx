import {useFrame, useThree} from "@react-three/fiber";
import { easing } from 'maath'

export const CameraRig = (props) =>{
  const a = document.getElementById("canvas");

  useFrame((state, delta) => {
    const offset = (a.offsetTop-window.scrollY) / 1000;
    if (props.inView){
      easing.damp3(state.camera.position, [0 + (state.pointer.x * state.viewport.width) * 2,3, 7], 0.5, delta)
      state.camera.lookAt(0, 0, 0)
    }else {
      easing.damp3(state.camera.position, [50,40,15], 0.5, delta)
      state.camera.lookAt(0, 0, 0)
    }
  })
  return null
}
