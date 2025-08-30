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
            <p>2026 Graduation</p>
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

            <p>I'm a rising third-year Computer Science major at the University of Greenwich.</p>
            <p>My main interests are in Software Engineering and Cloud Engineering.</p>
        
            
        </motion.div>
        </>
    )
}
export default Bio;