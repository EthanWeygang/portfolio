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
                <div className="h-[500px]" />

                
                <div className="flex">
                <Card children={
                    <div className="w-full flex flex-col justify-between h-full">
                        
                        <div className="flex-2 flex items-start justify-start">
                            <div className="text-3xl text-[#000000] ml-6 mt-2">Nimbus</div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <div className="flex-2 mx-5 border-gray-400 border-8 rounded-xl flex bg-white w-full justify-center items-center">

                                <img src="./nimbus.png" className="rounded-4xl h-60 w-max p-8"/>
                            </div>
                        </div>

                        {/* <div className="flex-1"/> */}
                        <div className="flex-6 leading-snug text-xl text-black p-4 bg-[#87469465] m-4 rounded-xl">
                            Created an AWS hosted full-stack cloud storage website with a Spring Rest API backend where users can upload, retrieve, or delete files from an S3 bucket at any time.
                        </div>

                    </div>
                }/>
                <Energy/>
                <Card children={""}/>
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