"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Box, Octahedron } from "@react-three/drei"
import type * as THREE from "three"

function FloatingShape({ position, geometry, color, speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  const ShapeComponent = geometry === "sphere" ? Sphere : geometry === "box" ? Box : Octahedron

  return (
    <ShapeComponent ref={meshRef} position={position} args={geometry === "sphere" ? [0.5] : [0.8]}>
      <meshStandardMaterial color={color} transparent opacity={0.6} emissive={color} emissiveIntensity={0.2} />
    </ShapeComponent>
  )
}

function Scene() {
  const shapes = useMemo(
    () => [
      { position: [-4, 2, -2], geometry: "sphere", color: "#3b82f6", speed: 0.8 },
      { position: [4, -1, -1], geometry: "box", color: "#8b5cf6", speed: 1.2 },
      { position: [-2, -2, -3], geometry: "octahedron", color: "#ec4899", speed: 0.6 },
      { position: [3, 3, -2], geometry: "sphere", color: "#06b6d4", speed: 1.0 },
      { position: [0, 1, -4], geometry: "box", color: "#f59e0b", speed: 0.9 },
    ],
    [],
  )

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  )
}

export default function FloatingGeometry() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
