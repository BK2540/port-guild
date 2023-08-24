import { motion } from "framer-motion";

const Section = (props) => {
    const {children} = props;

    return (
        <motion.section 
            className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
            initial={{
                opacity: 0,
                y: 50,
            }} 
            whileInView={{
                opacity:1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                }
            }}
        >
            {children}
        </motion.section>
    )
}

export const Interface = () => {
    return (
        <div className="w-screen flex flex-col items-center">
            <AboutSection/>
            <SkillSection/>
            <Section>
                <h1>Projects</h1>
            </Section>
            <ContactSection/>
        </div>
    )
};

export const AboutSection = () => {
    return (
      <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
            Hello There
            <br/>
            <span className="bg-white px-1 italic">I'm Boongkee</span>
        </h1>
        <motion.p 
            className="text-lg text-gray-600 mt-4"
            initial={{
                opacity:0,
                y: 25,
            }}
            whileInView={{
                opacity:1,
                y:0,
                transition:{
                    duration: 1,
                    delay: 1.25,
                }
            }}
        > 
            I am a frontend Developer 
            <br/>
            and UX designer
        </motion.p>
        <motion.button 
            className={`bg-indigo-500 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
            initial={{
                opacity:0,
                y: 25,
            }}
            whileInView={{
                opacity:1,
                y:0,
                transition:{
                    duration: 1,
                    delay: 1.75,
                }
            }}
        >
            Contact Me
        </motion.button>
    </Section>  
    )    
};

export const SkillSection = () => {
    return (
      <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
            Skill
            <br/>
            <span className="bg-white px-1 italic">that I pround</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4"> 
            I like cat
            <br/>
            and I can eat
        </p>
        <button className={`bg-indigo-500 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
            Contact Me
        </button>
    </Section>  
    )    
};

export const ContactSection = () => {
    return (
      <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
            Let's Connect
            <br/>
            <span className="bg-white px-1 italic">to talk about cat</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4"> 
            1234-5678-00
            <br/>
            email@email.com
        </p>
        <button className={`bg-indigo-500 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
            Hire me
        </button>
    </Section>  
    )    
};