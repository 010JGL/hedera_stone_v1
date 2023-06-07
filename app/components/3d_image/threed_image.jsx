'use client'
import React from "react";

import { Canvas } from "@react-three/fiber";
import { PresentationControls, useGLTF, Stage } from "@react-three/drei";

import {} from 'three/examples/jsm/controls/OrbitControls'

function Model(props) {
  const { scene } = useGLTF('/Grave24GLB.glb');
  return <primitive object={scene} {...props} />
}

export default function ThreeD_image() {

  return (
    <div className="threed-image-container">
      <Canvas dpr={[1,2]} shadows camera={{ fov: 45}} style={{"position": "absolute", height: "400px", width: "1000px"}}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls speed={1.2} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null} >
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

