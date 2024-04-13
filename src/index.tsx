import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Canvas} from "@react-three/fiber";
import Experience from "./Experience";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Canvas
        id={"canvas"}
        camera={ {
            fov: 13,
            near: 0.1,
            far: 100,
            position: [ - 6, 0, 6 ]
        } }
    >
        <Experience />
    </Canvas>
);
