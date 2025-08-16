import { motion } from "motion/react";
import { useState } from "react";
import useSound from 'use-sound';

interface CardProps {
    children: React.ReactNode;
    bg: string;
    image: string;
}

function Card({ image, bg, children }: CardProps){
    const [clicked, setClicked] = useState(false);
    const [zRotationValue] = useState(() => getRandomInt(3, 2))
    const [xRotationValue] = useState(() => getRandomInt(15, 10))
    const [playSlideOut] = useSound('/sounds/zapsplat_leisure_playing_card_dealing_table_single_001_20443.mp3', {
        volume: 0.25
    })
        const [playSlideIn] = useSound('/sounds/zapsplat_leisure_playing_card_single_turn_over_on_table_001_20473.mp3', {
        volume: 0.25
    })
    const [playTouch] = useSound('/sounds/zapsplat_leisure_playing_card_single_place_down_on_table_001_20464.mp3', {
        volume: 0.15,
        
    })

    function getRandomInt(max: number, min: number) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        const sign = Math.random() < 0.5 ? 1 : -1;
        return num * sign;
      }

    return(
        <div className="relative mx-3 mt-5">
            
            {/* Card's Back*/} 
            <motion.img src="/pokemon-card.png" className={`h-150 opacity-75 cursor-pointer ${clicked ? 'pointer-events-none' : ''}`} onClick={() => setClicked(true)} 
            animate={
                clicked ? { y: -900, opacity: [1, 0, 0]} : {y: 0, opacity: [0,1]}
            }
            initial={{
                y: 700,
            }}
            whileHover={{
                scale: 1.03, rotateZ: zRotationValue, rotateX: xRotationValue, rotateY: xRotationValue
            }}
            transition={{
                opacity: clicked ? {times: [0,  0.90, 1]} : {times: [0, 1]},
                y: {duration: 1.5, delay: clicked ? 0 : 2, ease: "backOut"},
                scale: {duration: 0.5},
                
            }}
            onClickCapture={() => {
                playSlideOut()
                setTimeout(() => {playSlideIn()}, 700)
            }}
            onHoverStart={(e) => {
                playTouch()
            }}
            />


            {/* nice purple - #af58c0 */}
            {/* Card's Front */}
            <motion.div className={`absolute top-150 ${bg} h-150 w-107 rounded-3xl flex overflow-hidden ${clicked ? 'curser-pointer' : 'pointer-events-none'}`} 
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
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
                y: {duration: 0.5, delay: 0.7},
                opacity: {delay: 0.7},
                scale: {duration: 0.4},
            }}
            onHoverStart={() => {playTouch()}}>
                
                
                   <div className="flex items-center justify-center w-full h-full">
                    {children}
                    </div>



                

            </motion.div>
            

            
        </div>
    )
}

export default Card;