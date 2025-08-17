import { motion } from "motion/react";


interface HoverWordProps {
    word: string;
}

function HoverWord({ word }: HoverWordProps){
    
    return(
        <div className="flex">
            {word.split('').map((char, i) => (
                <motion.div className="transition duration-300 ease-in-out hover:scale-150 text-8xl" 
                transition={{
                    ease: "easeInOut", 
                    duration: 0.5, 
                    delay: i*0.1
                }} 
                initial={{
                    opacity: 0
                }} 
                animate={{
                    opacity:1
                }}  
                key={i}>
                    
                    {char}
                </motion.div>
            ))}
        </div>
    )
}
export default HoverWord;