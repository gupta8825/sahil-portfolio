import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Scene({ count }) {
  const pointsRef = useRef(null)
  const orbRef = useRef(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 1) {
      const x = Math.sin(i * 127.1 + count * 311.7) * 43758.5453
      arr[i] = (x - Math.floor(x) - 0.5) * 16
    }
    return arr
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05 + state.pointer.x * 0.2
      pointsRef.current.rotation.x = state.pointer.y * 0.1
    }
    if (orbRef.current) {
      orbRef.current.rotation.y = t * 0.15
      orbRef.current.rotation.x = t * 0.08
      orbRef.current.position.x = state.pointer.x * 0.6
      orbRef.current.position.y = state.pointer.y * 0.4
    }
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.07} color="#8db9ff" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
      </points>
      <mesh ref={orbRef} position={[3.2, 0.6, -2]}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#6ea8fe" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh position={[-4, -1.2, -3]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#8b7cf6" wireframe transparent opacity={0.18} />
      </mesh>
    </>
  )
}

function HeroBackground() {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }
  const width = typeof window !== 'undefined' ? window.innerWidth : 1280
  const count = width < 640 ? 120 : width < 1024 ? 250 : 500
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="always"
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      gl={{ antialias: false, powerPreference: 'low-power', alpha: true }}
    >
      <Scene count={count} />
    </Canvas>
  )
}

export default HeroBackground
