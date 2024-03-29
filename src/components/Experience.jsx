import { ContactShadows, Environment, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Office } from "./Office";
import { motion } from 'framer-motion-3d';
import { useThree } from "@react-three/fiber";

export const Experience = (props) => {

  const {section} = props;
  const {viewport} = useThree();

  const {animation} = useControls({
    animation: {
    value: "Typing",
    options: ["Typing", "Falling", "Standing"],
    }
  });

  return (
    <>            
      <Sky/>
      <Environment preset="sunset"/>
      
      <motion.group 
        position={[1.5, 2, 3]} 
        scale={[0.5, 0.5, 0.5]} 
        rotation-y={-Math.PI/4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section}/>
      </motion.group> 

      {/* SKILL */}
      
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
      <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
        <group scale={[2.2, 2.2, 2.2]} position-y={-1.5}>
        <Avatar animation={section === 0 ? "Falling" : "Standing"}/>
      </group> 

      </motion.group>

             
    </>
  );
};
