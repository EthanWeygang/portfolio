import { motion } from "motion/react";
import { useState } from "react";

interface CardProps {
    children: React.ReactNode;
    bg: string;
}

function Card({ bg, children }: CardProps){
    const [clicked, setClicked] = useState(false);
    const [zRotationValue] = useState(() => getRandomInt(3, 2))
    const [xRotationValue] = useState(() => getRandomInt(15, 10))

    function getRandomInt(max: number, min: number) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        const sign = Math.random() < 0.5 ? 1 : -1;
        return num * sign;
      }

    return(
        <div className="mx-3">
            {/* Card's Back*/} 
            <motion.img src="/pokemon-card.png" className={`h-150 opacity-75 cursor-pointer ${clicked ? 'pointer-events-none' : ''}`} onClick={() => setClicked(true)} 
            animate={
                clicked ? { y: -900, opacity: [1, 0, 0]} : {y: 0, opacity: [0,1]}
            }
            initial={{
                y: 700
            }}
            whileHover={{
                scale: 1.03, rotateZ: zRotationValue, rotateX: xRotationValue, rotateY: xRotationValue
            }}
            transition={{
                duration: clicked ? 0.5 : 1,
                opacity: clicked ? {times: [0,  0.90, 1]} : {times: [0, 1]},
                ease: "backOut"
            }}/>


            {/* nice purple - #af58c0 */}
            {/* Card's Front */}
            <motion.div className={`relative ${bg} h-150 w-107 rounded-3xl flex overflow-hidden ${clicked ? 'curser-pointer' : 'pointer-events-none'}`} 
            animate={
                clicked ? {opacity: 1, y: -600} : {scale: 1}
            }
            initial={{
                y: -900,
                opacity: 0
            }}
            whileHover={{
                scale: 1.03, rotateZ: zRotationValue, rotateX: xRotationValue, rotateY: xRotationValue
            }}
            transition={{
                delay: clicked ? 0 : 0.7,
                duration: 0.4
            }}>
                
                

                   <div className="flex items-center justify-center">
                    <img src="/template.png" className="w-full h-full object-cover z-5" />
                    {children}
                    </div>



                

            </motion.div>
        </div>
    )
}

export default Card;