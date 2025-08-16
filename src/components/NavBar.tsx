import { motion } from "motion/react";
import { GlowEffect } from '../../components/motion-primitives/glow-effect';


function Navbar(){
return(

    <nav className="flex fixed w-full justify-between items-center z-10 space-x-1 my-8">
        <div className="flex-8"/>
        {/* <motion.div className="flex-3 px-2 mt-6 flex justify-center bg-transparent" initial={{y: -190 }} animate={{y: 0}} transition={{duration: 1.5, ease: "backOut", delay: 2}}>
            <img src={"nav.svg"} />

        </motion.div> */}
        
         <motion.div className="relative flex-3 px-2 mt-6 flex" initial={{y: -110 }} animate={{y: 0}} transition={{duration: 1.5, ease: "backOut", delay: 2}}>
                <GlowEffect
                colors={['#FFFFFF', '#eeeee4', '#000000']}
                mode='breathe'
                blur='soft'
                duration={3}
                scale={1.08}
                className="z-0 rounded-3xl"

                />
            <div className="h-full w-full z-9 bg-[#020618] flex rounded-4xl border-white border-4">
             <button className=" z-10 flex-1 text-s rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-transparent h-10 mx-2">About</button>
             <button className=" z-10 flex-1 text-s rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-transparent h-10 mx-2">Projects</button>
             <button className=" z-10 flex-1 text-s rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-transparent h-10 mx-2">Links</button>
            </div>
         </motion.div>
        
        <div className="flex-8"/>
    </nav>
)
}

export default Navbar;