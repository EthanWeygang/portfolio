import { motion } from "motion/react";

function Bio(){
    return(
        <>
        <motion.div className="text-xl text-white mt-10 flex flex-col justify-center items-center" animate={{
            opacity: 1,
            }} 
            initial={{
            opacity: 0
            }}
            transition={{
            duration: 1.5,
            delay: 1,
            }}>
            <p>Full Stack Engineer</p>
            <p>2027 Graduation</p>
            <p>London</p>
        </motion.div>

            <div className="h-[60px]" />

        <motion.div className="text-xl text-white mt-10 flex flex-col justify-center items-center" animate={{
            opacity: 1,
            }} 
            initial={{
            opacity: 0
            }}
            transition={{
            duration: 1.5,
            delay: 1.5,
            }}>
            <p>Hi! I'm Ethan, a rising third year computer science major at the University of Greenwich.</p>
            <p>My main interests are in Software engineering and Cloud infrastructure.</p>
            
            <p>I'm actively looking for internships or work!</p>
            
        </motion.div>
        </>
    )
}
export default Bio;