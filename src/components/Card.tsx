import { motion } from "motion/react";
import { useState } from "react";

interface CardProps {
    children: React.ReactNode;
}

function Card({ children }: CardProps){
    const [clicked, setClicked] = useState(false);

    return(
        <div className="mx-3">
            {/* Card's Back */}
            <motion.img src="/pokemon-card.png" className={`h-150 hover:scale-103 opacity-75 transition duration-200 ease-in-out ${clicked ? 'pointer-events-none' : ''}`} onClick={() => setClicked(true)} 
            animate={
                clicked ? { y: -900, opacity: [0.75, 0.75, 0, 0]} : {y: 0, opacity: [0,1]}
            }
            initial={{
                y: 700
            }}
            transition={{
                duration: clicked ? 0.18 : 1,
                opacity: clicked ? {times: [0, 0.4, 0.90, 1]} : {times: [0, 1]}
            }}/>


            {/* nice purple - #af58c0 */}
            {/* Card's Front */}
            <motion.div className={`relative bg-[#af58c0] border-gray-500 border-12 h-150 w-107 rounded-3xl flex overflow-hidden pointer-events-none ${clicked ? '' : 'pointer-events-none'}`} 
            animate={
                clicked ? {opacity: 1, y: -600} : {scale: 1}
            }
            initial={{
                y: -900,
                opacity: 0
            }}
            transition={{
                delay: 0.7,
                duration: 0.4
            }}>
                <div className="absolute inset-0 bg-repeat opacity-[0.4] bg-[url('/noise.jpg')] "/>
                
                
                {/* Content here */}
                {children}

            </motion.div>
        </div>
    )
}

export default Card;