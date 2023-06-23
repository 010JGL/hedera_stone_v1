"use client";
import React from "react";

import { Canvas } from "@react-three/fiber";
import { PresentationControls, useGLTF, Stage } from "@react-three/drei";

import {} from "three/examples/jsm/controls/OrbitControls";

function Model(props) {
  const { scene } = useGLTF("/Grave_20_website.glb");
  return <primitive object={scene} {...props} />;
}

export default function Small_3d() {
  return (
    <div className="threed-image-container-small">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "center", height: "400px", width: "300px" }}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={1.2}
          global
          zoom={6}
          polar={[0, Math.PI / 2]}
          rotation={[0, 4.6, 0]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}