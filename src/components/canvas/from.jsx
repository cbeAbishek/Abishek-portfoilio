import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Html,
  useProgress,
} from "@react-three/drei";
import PropTypes from "prop-types";
import * as THREE from "three";

// Loading component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white text-sm font-medium">
          Loading 3D Model... {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

// 3D Model Component with animations
function Model3D({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotationSpeed = 0.01,
}) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Load GLB model
  const { scene } = useGLTF(modelPath);

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      // Continuous Y-axis rotation
      meshRef.current.rotation.y += rotationSpeed;

      // Floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.15;

      // Subtle X-axis rotation
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

      // Hover effect - scale animation
      const targetScale = hovered ? scale * 1.2 : scale;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );

      // Click effect - faster rotation burst
      if (clicked) {
        meshRef.current.rotation.y += rotationSpeed * 5;
        meshRef.current.rotation.z += rotationSpeed * 2;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        setClicked(true);
        setTimeout(() => setClicked(false), 1000);
      }}
    >
      <primitive object={clonedScene} />
    </mesh>
  );
}

Model3D.propTypes = {
  modelPath: PropTypes.string.isRequired,
  scale: PropTypes.number,
  position: PropTypes.array,
  rotationSpeed: PropTypes.number,
};

// Enhanced 3D Scene Component
function Scene3D({ modelPath }) {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />

      {/* Main directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill lights */}
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#4F46E5" />
      <pointLight position={[10, -10, 10]} intensity={0.4} color="#7C3AED" />

      {/* Rim light */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.6}
        castShadow
        color="#06B6D4"
      />

      {/* Environment */}
      <Environment preset="studio" />

      {/* 3D Model */}
      <Model3D
        modelPath={modelPath}
        scale={1.5}
        position={[0, 0, 0]}
        rotationSpeed={0.008}
      />

      {/* Ground plane with contact shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.6}
        scale={10}
        blur={2}
        far={4}
        color="#1E293B"
      />

      {/* Interactive controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

Scene3D.propTypes = {
  modelPath: PropTypes.string.isRequired,
};

// Main 3D Animation Component
const From3D = ({
  modelPath = "/desktop_pc/scene.gltf", // Default path (corrected)
  height = "400px",
  className = "",
  showControls = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full  rounded-2xl  ${className}`}
      style={{ height }}
    >

      <Canvas
        camera={{
          position: [1, 3, 5],
          fov: 55,
          near: 0.1,
          far: 1000,
        }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={() => setIsLoaded(true)}
      >
        <Suspense fallback={<Loader />}>
          <Scene3D modelPath={modelPath} />
        </Suspense>
      </Canvas>
      
    </div>
  );
};

// Preload the GLB model for better performance
useGLTF.preload("/desktop_pc/scene.gltf");

From3D.propTypes = {
  modelPath: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  showControls: PropTypes.bool,
};

From3D.defaultProps = {
  modelPath: "/desktop_pc/scene.gltf",
  height: "400px",
  className: "",
  showControls: true,
};

export default From3D;
