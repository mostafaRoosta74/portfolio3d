import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import R3fIndex from "./components/R3fComponents/R3fIndex";
import {ReactIndex} from "./components/ReactComponents/ReactIndex";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <NextUIProvider>
    <R3fIndex/>
    <ReactIndex/>
  </NextUIProvider>
);
