import { motion, useScroll } from "motion/react";
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import { useState } from "react";
import Card from "../components/Card";

function Home() {
    const { scrollYProgress } = useScroll();
    
    return (
        <>
        {/* <div className="fixed inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#141414_70%)]"></div> */}
        <div className="fixed inset-0 bg-black w-full h-full -z-10 pointer-events-none overflow-x-hidden"></div>
            <div className="fixed inset-0 -z-9 bg-[url('/clean-gray-paper.png')] bg-repeat opacity-[0.1] pointer-events-none"></div>
            <NavBar />
            <BackBoard>
                <div className="h-[200px]" />

            
                    <HoverWord word={"Ethan"} />
                    <HoverWord word={"Weygang"} />


                {/* About */}
                <motion.div className="text-xl text-white mt-10 flex flex-col justify-center items-center" animate={{
                    opacity: 1,
                    }} 
                    initial={{
                    opacity: 0
                    }}
                    transition={{
                    duration: 1.5,
                    delay: 1.5,
                    }}>
                    <p>Computer Science Major</p>
                    <p>University of Greenwich</p>
                    <p>Full Stack Engineer</p>
                    <p>2027 Graduation</p>
                    <p>London</p>
                    </motion.div>

                    <div className="h-[50px]" />

                    <motion.div className="text-xl text-white mt-10 flex flex-col justify-center items-center" animate={{
                    opacity: 1,
                    }} 
                    initial={{
                    opacity: 0
                    }}
                    transition={{
                    duration: 1.5,
                    delay: 2.2,
                    }}>
                    <p>Third-year Computer Science student with confidence in building full-stack applications using Java, Spring Boot, AWS, Docker and React.</p>
                    <p>Passionate about cloud infrastructure and software development, with multiple personal projects deployed using real-world stacks. </p>
                    <p>Preparing to take the AWS Cloud Practitioner certification.</p>
                    </motion.div>


                <div className="h-[90px]" />


                <div className="flex w-full h-200">
                    <div className="flex w-full h-150 justify-center items-center">
                        <motion.div  className="text-5xl -rotate-90">Projects</motion.div >
                    </div>

                    <div className="flex w-full h-full">
                        <div className="flex gap-x-6">

                            <Card image={"./template.png"} bg={"bg-[#ffffff]"} children={
                                <>
                                <img src="./nimbus.png" className="absolute top-19 opacity-100 rounded-3xl h-50 w-max p-8 z-6"/>
                                <div className="absolute text-xl text-[#000000] z-6 left-25 top-6">Nimbus</div>
                                </>
                            }/>

                            <Card image={"./energy.webp"} bg={"bg-[#000000]"} children={""}/>

                            <Card image={"./template.png"} bg={"bg-[#6fcacd]"} children={
                                <>
                                <img src="./posture3.png" className="absolute top-20 opacity-100 rounded-3xl h-50 w-max p-8 z-4"/>
                                <div className="absolute text-xl text-[#000000] z-6 left-25 top-6">Posture Checker</div>
                                </>
                            }/>


                        </div>
                    </div>
                </div>

                {/* Projects */}
                
                <Info/>

                {/* Contact */}
            </BackBoard>
        </>
    );
}
export default Home;