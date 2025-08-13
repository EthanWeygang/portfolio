import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import { useState } from "react";
import Card from "../components/Card";
import Energy from "../components/Energy";

function Home() {
    
    
    return (
        <>
        {/* <div className="fixed inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#141414_70%)]"></div> */}
        <div className="fixed inset-0 bg-black w-full h-full -z-10 pointer-events-none"></div>
            <div className="fixed inset-0 -z-9 bg-[url('/clean-gray-paper.png')] bg-repeat opacity-[0.1] pointer-events-none"></div>
            <NavBar />
            <BackBoard>
                <div className="h-[200px]" />

               
                    <HoverWord word={"Ethan"} />
                    <HoverWord word={"Weygang"} />


                {/* About */}
                <div className="h-[1000px]" />


                
                
                <div className="flex w-full h-full">
                    <div className="flex w-full h-150 justify-center items-center">
                        <div className="text-5xl">Projects</div>
                    </div>

                    <div className="flex gap-x-6">
                        <Card bg={"bg-[#ffffff]"} children={
                            <>
                            <img src="./nimbus.png" className="absolute top-19 opacity-100 rounded-3xl h-50 w-max p-8 z-6"/>
                            <div className="absolute text-2xl text-[#000000] z-6 left-25 top-5">Nimbus</div>
                            </>
                        }/>

                        <Energy/>

                        <Card bg={"bg-[#6fcacd]"} children={
                            <>
                            <img src="./posture3.png" className="absolute top-3 opacity-100 rounded-3xl h-80 w-max p-8 z-4"/>
                            <div className="absolute text-2xl text-[#000000] z-6 left-25 top-5">Posture Checker</div>
                            </>
                        }/>
                    </div>

                    <div className="flex w-full h-150 justify-center items-center">
                        <div className="text-5xl ">Projects</div>
                    </div>
                </div>
                


                
                
                

                <div className="h-[300px]" />

                {/* Projects */}
                
                <Info/>

                {/* Contact */}
            </BackBoard>
        </>
    );
}
export default Home;