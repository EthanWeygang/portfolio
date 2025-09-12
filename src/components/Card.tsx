import { motion } from "motion/react";
import { useState } from "react";
import useSound from 'use-sound';
import { Tilt } from '../../components/motion-primitives/tilt';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../../components/motion-primitives/dialog";

interface CardProps {
    children: React.ReactNode;
    bg: string;
    image: string;
    link?: string;
    onCardClick?: () => void;
}

function Card({ image, bg, children, link, onCardClick }: CardProps){
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

    const cardType = (() => {
        switch (bg) {
            case 'diamonds':
                return (
                    <>
                        <img src="/diamonds.png" className="absolute top-2 left-2 w-6 sm:top-3 sm:left-2.5 sm:w-8 md:top-3.5 md:left-3 md:w-9 lg:top-4 lg:left-3 lg:w-10"/>
                        <img src="/diamonds.png" className="absolute bottom-2 right-2 w-6 sm:bottom-3 sm:right-2.5 sm:w-8 md:bottom-3.5 md:right-3 md:w-9 lg:bottom-4 lg:right-3 lg:w-10 rotate-180"/>
                        <img src="./nimbussticker2.png" className="absolute top-18 sm:top-22 md:top-26 lg:top-32 opacity-100 h-28 sm:h-36 md:h-40 lg:h-45 w-max p-4 sm:p-6 md:p-7 lg:p-8 z-6"/>
                    </>
                );
            case 'spades':
                return (
                    <>
                        <img src="/spades.png" className="absolute top-2 left-2 w-5 sm:top-3 sm:left-2.5 sm:w-7 md:top-3.5 md:left-3 md:w-8 lg:top-4 lg:left-3 lg:w-9"/>
                        <img src="/spades.png" className="absolute bottom-2 right-2 w-5 sm:bottom-3 sm:right-2.5 sm:w-7 md:bottom-3.5 md:right-3 md:w-8 lg:bottom-4 lg:right-3 lg:w-9 rotate-180"/>
                        <img src="./posturesticker3.png" className="absolute rotate-353 top-17 sm:top-21 md:top-25 lg:top-30 opacity-100 h-32 sm:h-40 md:h-45 lg:h-50 w-max p-4 sm:p-6 md:p-7 lg:p-8 z-4"/>
                    </>
                );
            case 'hearts':
                return (
                    <>
                        <img src="/hearts.png" className="absolute top-1.5 left-2 w-6 sm:top-2 sm:left-2.5 sm:w-8 md:top-2.5 md:left-3 md:w-9.5 lg:top-2.5 lg:left-3 lg:w-10.5"/>
                        <img src="/hearts.png" className="absolute bottom-2 right-2 w-6 sm:bottom-3 sm:right-2.5 sm:w-8 md:bottom-3.5 md:right-3 md:w-9.5 lg:bottom-4 lg:right-3 lg:w-10.5 rotate-180"/>
                        <img src="./bloodsticker2.png" className="absolute rotate-23 top-16 sm:top-20 md:top-24 lg:top-28 opacity-100 h-32 sm:h-40 md:h-45 lg:h-50 w-max p-4 sm:p-6 md:p-7 lg:p-8 z-6"/>
                    </>
                );

            case 'clubs':
                return(
                    <>
                        <img src="/clubs.png" className="absolute top-2 left-2 w-7 sm:top-3 sm:left-2.5 sm:w-9 md:top-3.5 md:left-3 md:w-11 lg:top-4 lg:left-3 lg:w-13"/>
                        <img src="/clubs.png" className="absolute bottom-2 right-2 w-7 sm:bottom-3 sm:right-2.5 sm:w-9 md:bottom-3.5 md:right-3 md:w-11 lg:bottom-4 lg:right-3 lg:w-13 rotate-180"/>
                        <p className="absolute top-28 left-16 sm:top-32 sm:left-20 md:top-36 md:left-24 lg:top-45 lg:left-29 text-black text-lg sm:text-xl md:text-xl lg:text-2xl font-bold h-32 sm:h-40 md:h-45 lg:h-50 w-max p-4 sm:p-6 md:p-7 lg:p-8 z-4">WIP</p>
                    </>
                );
        }
    })();

    return(<>
        <Tilt className="relative mx-2 sm:mx-3 md:mx-4 lg:mx-6 mb-50 flex-shrink-0">
            
            {/* Card's Back*/}
            <motion.img src="/cardback2.jpg" className={`rounded-3xl h-80 sm:h-96 md:h-105 lg:h-120 brightness-80 cursor-pointer ${clicked ? 'pointer-events-none' : ''}`} onClick={() => {setClicked(true); onCardClick?.();}} 
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
            <Dialog>
                <DialogTrigger className={`absolute top-150 p-0 border-0 bg-transparent hover:bg-transparent focus:bg-transparent ${clicked ? 'cursor-pointer' : 'pointer-events-none'}`}> 
                    <motion.div className={`bg-gray-200 h-80 w-60 sm:h-96 sm:w-68 md:h-105 md:w-76 lg:h-120 lg:w-85 rounded-3xl cursor-pointer flex overflow-hidden ${clicked ? 'cursor-pointer' : 'pointer-events-none'} bg-white`}
                    style={{
                        backgroundImage: "url('/card-texture.jpg')",
                        backgroundRepeat: 'repeat',
                        backgroundSize: '500px 500px'
                    }}
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
                        
                        <div className={`flex items-center justify-center w-full h-full absolute `}>
                            {cardType}
                        </div>

                    </motion.div>
                </DialogTrigger>
                
                <DialogContent className={`w-full max-w-md bg-slate-900 p-6`}>
                    {children}
                    <DialogClose />
                </DialogContent>
            </Dialog>
        </Tilt>

        </>
    )
}

export default Card;

