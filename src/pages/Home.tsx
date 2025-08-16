import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import Card from "../components/Card";
import Background from "../components/Background";
import { DiJavascript1, DiReact, DiPostgresql, DiPython, DiDocker, DiJava, DiHtml5 } from "react-icons/di";
import {SiSpringboot, SiAmazonwebservices } from "react-icons/si";


function Home() {
    
    return (
        <>
            <Background/>

            <div className="relative z-10">
                <NavBar />
                <BackBoard>
                <div className="h-[200px]" />

            
                    <HoverWord word={"Ethan"} />
                    <HoverWord word={"Weygang"} />


                {/* Bio */}
                <motion.div className="text-xl text-white mt-10 flex flex-col justify-center items-center" animate={{
                    opacity: 1,
                    }} 
                    initial={{
                    opacity: 0
                    }}
                    transition={{
                    duration: 1.5,
                    delay: 1,
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
                    delay: 1.5,
                    }}>
                    <p>My main intrests are in Software engineering, Cloud infrastructure and Full-stack development.</p>
                    <p></p>
                    <p>I'd love to discuss how my skills and enthusiam could benefit you or your team!</p>
                    </motion.div>

                <div className="h-[180px]" />

                {/* Projects */}
                <div className="flex w-full h-160 ">
                    <div className="flex w-full gap-x-6 justify-center h-full items-center pt-46">

                        <Card image={"./template.png"} bg={"bg-[#ffffff]"} children={
                            <>
                            <img src="./nimbus.png" className="absolute top-24 opacity-100 h-40 w-max p-8 z-6"/>
                            <div className="absolute text-xl text-[#000000] z-6 left-25 top-6">Nimbus</div>
                            </>
                        }/>

                        <Card image={"./energy.webp"} bg={"bg-[#000000]"} children={""}/>

                        <Card image={"./template.png"} bg={"bg-[#ffffff]"} children={
                            <>
                            <img src="./posture.png" className="absolute top-19 opacity-100 h-50 w-max p-8 z-4"/>
                            <div className="absolute text-xl text-[#000000] z-6 left-25 top-6">Posture Checker</div>
                            <p className="absolute bottom-60 text-xl text-black">Technologies</p>
                            <p className="absolute bottom-54 text-sm text-black">React - AWS - Springboot</p>

                            <p className="absolute bottom-42 text-xl text-black">About</p>
                            <p className="absolute bottom-36 text-sm text-black">Chrome Timer which reminds you to straighten your</p>
                            <p className="absolute bottom-32 text-sm text-black">posture with notifications. Maintains 15 - 20 organic</p>
                            <p className="absolute bottom-28 text-sm text-black">daily users.</p>
                            </>
                        }/>

                        <Card image={"./energy.webp"} bg={"bg-[#000000]"} children={""}/>
                    </div>
                </div>
                
                <div className="h-[200px]" />

                {/* About */}
                <div className="flex w-full justify-between items-start gap-8">
                    
                    <div className="flex flex-col ml-[50px] flex-9">
                        <div className="text-5xl pb-10">About Me</div>
                        <div className="text-xl">I'm third-year Computer Science student with confidence in building full-stack applications using Java, Spring Boot, AWS, Docker and React. I'm passionate about cloud infrastructure and software development, with multiple personal projects deployed using real-world tech stacks. I'm also preparing to take the AWS Cloud Practitioner certification!</div>
                    </div>

                    <div className="flex-4"/>

                    <div className="flex flex-col mr-[50px] flex-9">
                        <div className="text-5xl pb-10 pl-1">Technical Skills</div>
                        <div className="flex flex-wrap gap-6 justify-start">
                            <DiJavascript1 size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiJava size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiHtml5 size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiPython size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiReact size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <SiSpringboot size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiDocker size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiPostgresql size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <SiAmazonwebservices size={80} className="hover:scale-110 transition duration-200 ease-in-out"/>
                        </div>
                    </div>
                </div>

                <div className="h-[300px]" />

                {/* Info */}
                <Info/>

                
            </BackBoard>
        </div>
        </>
    );
}
export default Home;