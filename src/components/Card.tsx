import { motion } from "motion/react";
import { useState } from "react";
import useSound from 'use-sound';
import { Tilt } from '../../components/motion-primitives/tilt';

interface CardProps {
    children: React.ReactNode;
    bg: string;
    image: string;
    link?: string;
}

function Card({ image, bg, children, link }: CardProps){
    const [clicked, setClicked] = useState(false);
    const [playSlideOut] = useSound('/sounds/zapsplat_leisure_playing_card_dealing_table_single_001_20443.mp3', {
        volume: 0.25
    })
        const [playSlideIn] = useSound('/sounds/zapsplat_leisure_playing_card_single_turn_over_on_table_001_20473.mp3', {
        volume: 0.25
    })
    // const [playTouch] = useSound('/sounds/zapsplat_leisure_playing_card_single_place_down_on_table_001_20464.mp3', {
    //     volume: 0.15,
        
    // })

    return(
        <Tilt className="relative mx-3 mb-50">
            
            {/* Card's Back*/} 
            <motion.img src="/pokemon-card.png" className={`h-120 opacity-75 cursor-pointer ${clicked ? 'pointer-events-none' : ''}`} onClick={() => setClicked(true)} 
            animate={
                clicked ? { y: -900, opacity: [1, 0, 0]} : {y: 0, opacity: [0,1]}
            }
            initial={{
                y: 700,
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
            // onHoverStart={(e) => {
            //     /* playTouch() */
            // }}
            />


            {/* Card's Front */}
            {/* nice purple - #af58c0 */}
            <motion.div className={`absolute top-150 ${bg} bg-gray-200 h-120 w-85 rounded-3xl flex overflow-hidden ${clicked ? 'cursor-pointer' : 'pointer-events-none'} bg-gradient-to-br from-[#f5f7fa] via-[#c3cfe2] to-[#a1c4fd]`} 
            // style={{
            //     backgroundImage: "url('/clean-gray-paper.png')",
            //     backgroundSize: '300px',
            //     backgroundPosition: 'top',
            //     backgroundRepeat: 'no-repeat'
            // }}
            animate={
                clicked ? {opacity: image.includes("energy") ? 0.76 : 1, y: -600} : {scale: 1}
                
            }
            initial={{
                y: -900,
                opacity: 0
            }}
            transition={{
                y: {duration: 0.5, delay: 0.7},
                opacity: {delay: 0.7},
                scale: {duration: 0.4},
            }}
            onClick={() => {
                if (clicked && typeof window !== 'undefined' && link) {
                    window.open(link, '_blank', 'noopener,noreferrer')
                }
            }}>

                <motion.img src={image.includes("energy") ? "/energy.webp" :"/template.png"} className={""}/>
                
                
                <div className="flex items-center justify-center w-full h-full absolute">
                    {children}
                </div>

            </motion.div>

            
        </Tilt>
    )
}

export default Card;

