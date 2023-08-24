import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import {ScrollManager} from "./components/ScrollManager";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Cursor } from "./components/Cursor";

function App() {

  const [section, setSection] = useState(0);
  return (
    <>
    <MotionConfig transition={{
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.001,
    }}>
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 45 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManager section={section} onSectionChange = {setSection}/>
        <Scroll>
          <Experience section={section} />
        </Scroll>
      
      <Scroll html>
        <Interface/>
      </Scroll>
      </ScrollControls>
    </Canvas>
    </MotionConfig>  
    <Cursor/>
    <Leva hidden/>  
    </>
  );
}

export default App;
