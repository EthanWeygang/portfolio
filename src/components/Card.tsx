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
                        <img src="/diamonds.png" className="absolute top-4 left-3 w-10"/>
                        <img src="/diamonds.png" className="absolute bottom-4 right-3 w-10 rotate-180"/>
                        <img src="./bloodsticker2.png" className="absolute rotate-23 top-28 opacity-100 h-50 w-max p-8 z-6"/>
                    </>
                );
            case 'spades':
                return (
                    <>
                        <img src="/spades.png" className="absolute top-4 left-3 w-9"/>
                        <img src="/spades.png" className="absolute bottom-4 right-3 w-9 rotate-180"/>
                        <img src="./posturesticker3.png" className="absolute rotate-353 top-30 opacity-100 h-50 w-max p-8 z-4"/>
                    </>
                );
            case 'hearts':
                return (
                    <>
                        <img src="/hearts.png" className="absolute top-2.5 left-3 w-10.5"/>
                        <img src="/hearts.png" className="absolute bottom-4 right-3 w-10.5 rotate-180"/>
                        <img src="./nimbussticker2.png" className="absolute top-32 opacity-100 h-45 w-max p-8 z-6"/>
                    </>
                );

            case 'clubs':
                return(
                    <>
                        <img src="/clubs.png" className="absolute top-4 left-3 w-13"/>
                        <img src="/clubs.png" className="absolute bottom-4 right-3 w-13 rotate-180"/>
                        <p className="absolute top-45 left-29 text-black text-2xl font-bold h-50 w-max p-8 z-4">WIP</p>
                    </>
                );
        }
    })();

    return(<>
        <Tilt className="relative mx-3 mb-50">
            
            {/* Card's Back*/}
            <motion.img src="/cardback2.jpg" className={`rounded-3xl h-120 cursor-pointer brightness-80 ${clicked ? 'pointer-events-none' : ''}`} onClick={() => {setClicked(true); onCardClick?.();}} 
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
                <DialogTrigger className="absolute top-150 p-0 border-0 bg-transparent hover:bg-transparent focus:bg-transparent"> 
                    <motion.div className={`bg-gray-200 h-120 w-85 rounded-3xl flex overflow-hidden ${clicked ? 'cursor-pointer' : 'pointer-events-none'} bg-white`}
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
                        
                        <div className="flex items-center justify-center w-full h-full absolute">
                            {cardType}
                        </div>

                    </motion.div>
                </DialogTrigger>
                
                <DialogContent className='w-full max-w-md bg-slate-900 p-6'>
                    {children}
                    <DialogClose />
                </DialogContent>
            </Dialog>
            

            
        </Tilt>

        </>
    )
}

export default Card;

