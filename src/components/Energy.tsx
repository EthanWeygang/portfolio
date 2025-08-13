import { motion } from "motion/react";
import { useState } from "react";

function Card(){
    const [clicked, setClicked] = useState(false);
    const [zRotationValue] = useState(() => getRandomInt(7, 2)); // Generate once

    function getRandomInt(max: number, min: number) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        const sign = Math.random() < 0.5 ? 1 : -1;
        return num * sign;
    }

    return(
        <div className="mx-3">
            {/* Card's Back */}
            <motion.img src="/pokemon-card.png" className={`h-150 opacity-75 cursor-pointer ${clicked ? 'pointer-events-none' : ''}`} onClick={() => setClicked(true)} 
            animate={
                clicked ? { y: -900, opacity: [1, 0, 0]} : {y: 0, opacity: [0,1]}
            }
            initial={{
                y: 700
            }}
            whileHover={{
                scale: 1.03, rotateZ: zRotationValue
            }}
            transition={{
                duration: clicked ? 0.5 : 1,
                opacity: clicked ? {times: [0,  0.90, 1]} : {times: [0, 1]},
                ease: "backOut"

            }}/>


            {/* nice purple - #af58c0 */}
            {/* Card's Front */}
            <motion.div className={`relative bg-[#00000] h-150 w-107 rounded-3xl flex overflow-hidden ${clicked ? 'cursor-pointer' : 'pointer-events-none'}`} 
            animate={
                clicked ? {opacity: 1, y: -600} : {scale: 1}
            }
            initial={{
                y: -900,
                opacity: 0
            }}
            whileHover={{
                scale: 1.03, rotateZ: zRotationValue
            }}
            transition={{
                delay: clicked ? 0 : 0.7,
                duration: 0.4
            }}>

                
                    <div className="flex items-center justify-center">
                        <img src="./energy.webp" className="w-full h-full opacity-75" />
                    </div>

            </motion.div>
        </div>
    )
}

export default Card;