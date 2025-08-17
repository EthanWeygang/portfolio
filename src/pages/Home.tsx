import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import Card from "../components/Card";
import Background from "../components/Background";
import { DiJavascript1, DiReact, DiPostgresql, DiPython, DiDocker, DiJava, DiHtml5 } from "react-icons/di";
import {SiSpringboot, SiAmazonwebservices } from "react-icons/si";
import { TextShimmerWave } from "../../components/motion-primitives/text-shimmer-wave";


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
                    <p>I'm actively looking for internships / work!</p>
                    
                    </motion.div>

                <div className="h-[180px]" />

                {/* Projects */}
                <div className="flex w-full h-160 ">
                    <div className="flex w-full gap-x-6 font-orbitron justify-center h-full items-center pt-46">
                        {/* b3dba9 */}
                        <Card image={"./template.png"} bg={" bg-[#b9e6ae]"} children={
                            <>
                            <img src="./nimbus.png" className="absolute top-15 opacity-100 h-40 w-max p-8 z-6"/>
                            <div className="absolute text-xl text-[#000000] font-bold z-6 left-20 top-4">Nimbus</div>
                            
                            <p className="absolute font-bold bottom-50 text-md text-black">About</p>
                            <p className="absolute bottom-44 left-9 font-semibold text-xs text-black">• A full-stack Cloud Storage website, using S3,  </p>
                            <p className="absolute bottom-40 left-11 font-semibold text-xs text-black">Cloudfront, RDS, Elastic Beanstalk and JWT </p>
                            <p className="absolute bottom-36 left-11 font-semibold text-xs text-black"> authentication.</p>

                            <p className="absolute bottom-30 left-9 font-semibold text-xs text-black">• Users can Upload, Download and Delete their files to and from the cloud.</p>

                            <p className="absolute bottom-26 left-9 font-semibold text-xs text-black">• All requests are managed by a Spring Boot API.</p>

                            <TextShimmerWave className='[--base-color:#000000] [--base-gradient-color:#000000] absolute bottom-20 font-semibold text-xs text-black' duration={2}>
                                {"React - AWS - Spring Boot"}
                            </TextShimmerWave>
                            </>
                        }/>

                        <Card image={"./template.png"} bg={"bg-[#ed6a64]"} children={
                            <>
                            <img src="./blood.png" className="absolute top-11 opacity-100 h-50 w-max p-8 z-6"/>
                            <div className="absolute text-xl text-[#000000] font-bold z-6 left-20 top-4">Blood Send</div>
                            
                            <p className="absolute font-bold bottom-50 text-md text-black">About</p>
                            <p className="absolute bottom-44 left-9 font-semibold text-xs text-black">• A full-stack express.js website which helps</p>
                            <p className="absolute bottom-40 left-11 font-semibold text-xs text-black">blood donors match with blood-seekers.</p>

                            <p className="absolute bottom-30 left-9 font-semibold text-xs text-black">• Users can create accounts, filter through a</p>
                            <p className="absolute bottom-26 left-11 font-semibold text-xs text-black">database of users to find a potential donor.</p>

                            <TextShimmerWave className='[--base-color:#000000] [--base-gradient-color:#000000] absolute bottom-20 font-semibold text-xs text-black' duration={2}>
                                {"Express.js - MongoDB"}
                            </TextShimmerWave>
                            </>
                        }/>

                        <Card image={"./template.png"} bg={"bg-[#a9dbdb]"} children={
                            <>
                            <img src="./posture.png" className="absolute top-10 opacity-100 h-50 w-max p-8 z-4"/>

                            <div className="absolute text-xl text-[#000000] font-bold z-6 left-20 top-4">Posture Checker</div>
                            
                            <p className="absolute font-bold bottom-50 text-md text-black">About</p>
                            <p className="absolute bottom-44 left-9 font-semibold text-xs text-black">• A Chrome Timer which reminds you to straighten</p>
                            <p className="absolute bottom-40 left-11 font-semibold text-xs text-black">your posture with notifications. </p>

                            <p className="absolute bottom-30 left-9 font-semibold text-xs text-black">• Maintains 15 - 20 organic daily users.</p>


                            <TextShimmerWave className='[--base-color:#000000] [--base-gradient-color:#000000] absolute bottom-20 font-semibold text-xs text-black' duration={2}>
                                {"Javascript - Jquery"}
                            </TextShimmerWave>
                            </>
                        }/>

                        <Card image={"./energy.webp"} bg={"bg-[#000000]"} children={""}/>
                    </div>
                </div>
                
                <div className="h-[200px]" />

                {/* About */}
                <div className="flex w-full justify-between items-start gap-8">
                    
                    <div className="flex flex-col ml-[50px] flex-9">
                        <div className="text-4xl pb-10">About Me</div>
                        <div className="text-lg flex flex-col justify-start space-y-4">
                            <div>
                            I'm third-year Computer Science student who enjoys building full-stack applications using Java, Spring Boot, AWS, Docker and React (but im constantly trying new technologies!!).
                            </div>
                            <div>
                             I'm passionate about cloud infrastructure and software development, with multiple personal projects already made, and many more in the pipeline!
                             </div>
                             <div>
                             Currently, i'm preparing to take the AWS Cloud Practitioner certification and applying to a lot of internships for the summer, or whenever, really. I'm availible whenever. Whenever.
                             </div>
                             <div>
                              If you wanna contact me or look at my work, or if you just wanna know what I look like, you can 'check me out' using my links below! \:)
                              </div>
                              </div>
                    </div>

                    <div className="flex-2"/>

                    <div className="flex flex-col mr-[50px] flex-9">
                        <div className="text-4xl pb-10 pl-1">Technical Skills</div>
                        <div className="flex flex-wrap gap-6 justify-start">
                            <DiJavascript1 size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiJava size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiHtml5 size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiPython size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiReact size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <SiSpringboot size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiDocker size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <DiPostgresql size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
                            <SiAmazonwebservices size={64} className="hover:scale-110 transition duration-200 ease-in-out"/>
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