import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene, animations } = useGLTF("/avatar.glb");

  const modelRef = useRef();
  const headRef = useRef();

  // Stop any baked animations
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());
  }, [actions]);

  // Apply materials + find head mesh
  useEffect(() => {
    const liquidChromeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#3f3f46"),
      metalness: 0.98,
      roughness: 0.08,
    });

    const neonGlowMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#a855f7"),
      emissive: new THREE.Color("#a855f7"),
      emissiveIntensity: 2.5,
    });

    scene.traverse((child) => {
      if (child.isMesh) {
        const name = child.name.toLowerCase();

        if (name.includes("ojos") || name.includes("sphere")) {
          child.material = neonGlowMaterial;
        } else {
          child.material = liquidChromeMaterial;
        }
      }

      // Change this if your head mesh has a different name
      if (
        child.name &&
        (child.name.toLowerCase().includes("cabeza") ||
          child.name.toLowerCase().includes("head"))
      ) {
        headRef.current = child;
      }
    });
  }, [scene]);

  // Mouse tracking
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth, responsive head tracking
  useFrame((_, delta) => {
    if (!headRef.current) return;

    // Slightly reduced movement looks more natural
    const targetX = -(mouse.current.y * Math.PI) / 5;
    const targetY = (mouse.current.x * Math.PI) / 5;

    headRef.current.rotation.x = THREE.MathUtils.damp(
      headRef.current.rotation.x,
      targetX,
      14,
      delta,
    );

    headRef.current.rotation.y = THREE.MathUtils.damp(
      headRef.current.rotation.y,
      targetY,
      14,
      delta,
    );
  });

  return (
    <group ref={modelRef}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function AvatarCanvas() {
  return (
    <div className="relative flex items-center justify-center w-full h-48 mb-4 overflow-hidden shadow-inner rounded-xl bg-black/20">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
        {/* Ambient */}
        <ambientLight intensity={0.15} />

        {/* Key */}
        <directionalLight
          position={[6, 8, 4]}
          intensity={3.5}
          color="#a855f7"
        />

        {/* Fill */}
        <directionalLight
          position={[-6, 4, 2]}
          intensity={2.5}
          color="#4f46e5"
        />

        {/* Rim */}
        <directionalLight position={[0, 5, -5]} intensity={3} color="#ec4899" />

        {/* Environment reflections */}
        <Environment preset="sunset" />

        <Model />
      </Canvas>
    </div>
  );
}

// Preload model
useGLTF.preload("/avatar.glb");
