import { motion } from "motion/react";
function Navbar(){
return(

    <nav className="flex fixed w-full justify-between items-center z-10 space-x-1 my-8">
        <div className="flex-8"/>

        <motion.div className="flex-3 px-2 mt-6 flex border-4 border-white  bg-black1 rounded-4xl" initial={{y: -110 }} animate={{y: 0}} transition={{duration: 1.5, ease: "backOut", delay: 2}}>
            <button className="flex-1 text-s rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#af58c0] font-bold bg-transparent h-10 mx-2">About</button>
            <button className="flex-1 text-s rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#af58c0] font-bold bg-transparent h-10 mx-2">Projects</button>
            <button className="flex-1 text-s rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#af58c0] font-bold bg-transparent h-10 mx-2">Links</button>
        </motion.div>
        <div className="flex-8"/>
    </nav>
)
}

export default Navbar;