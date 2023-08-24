/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/room.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion-3d';

export function Office(props) {
  const {section} = props;
  const { nodes, materials } = useGLTF('models/room.gltf')  

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.wall.geometry} material={materials.wall} position={[-1.622, -0.949, -4.477]} />
      <group position={[-3.041, 1.276, -9.115]} rotation={[0, -0.001, 0]}>
        <mesh geometry={nodes.Cube008.geometry} material={materials.table} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.009']} />
      </group>
      <group position={[-3.261, 2.495, -8.672]} rotation={[0, 0.009, 0]}>
        <mesh geometry={nodes.Cube016.geometry} material={materials.keybroad} />
        <mesh geometry={nodes.Cube016_1.geometry} material={materials['Material.004']} />
      </group>
      <group position={[-3.024, 4.085, -10.375]} rotation={[0, -0.001, 0]}>
        <mesh geometry={nodes.Cube014.geometry} material={materials.monitor} />
        <mesh geometry={nodes.Cube014_1.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.mose.geometry} material={materials.keybroad} position={[-0.94, 2.694, -8.652]} rotation={[0, -0.057, 0]} />
      <mesh geometry={nodes['keyboard-pad'].geometry} material={materials['Material.019']} position={[-3.04, 2.498, -8.776]} rotation={[0, -1.567, 0]} />
      <group position={[-1.606, 0.082, -10.845]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials['Material.024']} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Plane011_2.geometry} material={materials['Material.028']} />
      </group>
      <group position={[-4.944, 2.891, -9.709]} rotation={[0, -1.482, 0]}>
        <mesh geometry={nodes.Cube020.geometry} material={materials.speaker} />
        <mesh geometry={nodes.Cube020_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cube020_2.geometry} material={materials['Material.017']} />
      </group>
      <group position={[-1.072, 2.891, -9.66]} rotation={[Math.PI, -1.284, Math.PI]}>
        <mesh geometry={nodes.Cube021.geometry} material={materials.speaker} />
        <mesh geometry={nodes.Cube021_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cube021_2.geometry} material={materials['Material.017']} />
      </group>
      <group position={[-3.23, 1.993, -5.422]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube011.geometry} material={materials['steamimg chair']} />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials.wheel} />
        <mesh geometry={nodes.Cube011_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube011_3.geometry} material={materials['Material.001']} />
      </group>
      <group position={[1.079, 2.717, -7.934]} rotation={[0, -0.401, 0]}>
        <mesh geometry={nodes.Vert002.geometry} material={materials.cat} />
        <mesh geometry={nodes.Vert002_1.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.Vert002_2.geometry} material={materials['doll eye']} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.033']} position={[-0.008, -0.153, -0.196]} rotation={[Math.PI, -1.465, Math.PI]} />
        <mesh geometry={nodes.NurbsPath002.geometry} material={materials['doll eye']} position={[-0.185, 0.515, -0.608]} rotation={[Math.PI, 1.571, 0]} />
      </group>
      <mesh geometry={nodes.girl.geometry} material={materials['Material.022']} position={[-4.505, 5.89, -10.621]} rotation={[Math.PI, -1.57, Math.PI]} />
      <mesh geometry={nodes.japantext.geometry} material={materials['Material.027']} position={[-6.193, 7.859, -10.707]} rotation={[Math.PI, -1.57, Math.PI]} />
      <mesh geometry={nodes.floor.geometry} material={materials.wall} position={[-1.638, 0.112, -4.713]} />
    </group>
  )
}

useGLTF.preload('models/room.gltf')