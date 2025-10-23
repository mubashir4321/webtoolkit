import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingShape = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#06b6d4" />
        
        <FloatingShape position={[-3, 2, 0]} color="#a855f7" scale={0.8} />
        <FloatingShape position={[3, -2, 0]} color="#06b6d4" scale={1.2} />
        <FloatingShape position={[0, 0, -3]} color="#8b5cf6" scale={1} />
        <FloatingShape position={[-4, -1, -2]} color="#0ea5e9" scale={0.6} />
        <FloatingShape position={[4, 1, -1]} color="#d946ef" scale={0.9} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
