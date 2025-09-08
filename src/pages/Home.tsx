
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import Card from "../components/Card";
import Background from "../components/Background";
import { TextShimmerWave } from "../../components/motion-primitives/text-shimmer-wave";
import About from "../components/About";
import Bio from "../components/Bio";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";


function Home() {
    const [cardClicked, setCardClicked] = useState(false);

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
                <Bio/>

                <div className="h-[130px]" />

                {/* Projects */}
                <div id="projects" className="flex w-full h-160">
                    <div className="flex w-full gap-x-6 justify-center h-full items-center pt-46">

                        {/* Nimbus */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={""} link={"https://dx26d5982gukc.cloudfront.net/"} children={
                            <>
                            <img src="./nimbussticker2.png" className="absolute top-15 opacity-100 h-40 w-max p-8 z-6"/>
                            <div className="absolute text-md font-orbitron text-[#000000] font-bold z-6 left-20 top-4.5">Nimbus</div>
                            
                            <p className="absolute font-bold font-orbitron bottom-50 text-md text-black">About</p>
                            <p className="absolute bottom-44 left-9 font-semibold text-xs text-black">• A full-stack Cloud Storage website, using S3,  </p>
                            <p className="absolute bottom-40 left-11 font-semibold text-xs text-black">Cloudfront, RDS, Elastic Beanstalk and JWT </p>
                            <p className="absolute bottom-36 left-11 font-semibold text-xs text-black"> authentication.</p>

                            <p className="absolute bottom-30 left-9 font-semibold text-xs text-black">• Users can Upload, Download and Delete their  </p>
                            <p className="absolute bottom-26 left-11 font-semibold text-xs text-black"> files to and from the cloud.</p>

                            <TextShimmerWave className='[--base-color:#000000] [--base-gradient-color:#000000] absolute bottom-20 font-semibold text-xs text-black' duration={2}>
                                {"React - AWS - Spring Boot"}
                            </TextShimmerWave>
                            </>
                        }/>


                        {/* Bloodsend */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={""} link={"https://bloodsend.onrender.com/"} children={
                            <>
                            <img src="./bloodsticker2.png" className="absolute rotate-23 top-11 opacity-100 h-50 w-max p-8 z-6"/>
                            <div className="absolute text-md font-orbitron text-[#000000] font-bold z-6 left-20 top-4.5">BloodSend</div>
                            
                            <p className="absolute font-bold font-orbitron bottom-50 text-md text-black">About</p>
                            <p className="absolute bottom-44 left-9 font-semibold text-xs text-black">• A full-stack express.js website which helps</p>
                            <p className="absolute bottom-40 left-11 font-semibold text-xs text-black">blood donors match with blood-seekers.</p>

                            <p className="absolute bottom-30 left-9 font-semibold text-xs text-black">• Users can create accounts, filter through a</p>
                            <p className="absolute bottom-26 left-11 font-semibold text-xs text-black">database of users to find a potential donor.</p>

                            <TextShimmerWave className='[--base-color:#000000] [--base-gradient-color:#000000] absolute bottom-20 font-semibold text-xs text-black' duration={2}>
                                {"Express.js - MongoDB"}
                            </TextShimmerWave>
                            </>
                        }/>

                        {/* Posture Checker */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={""} link={"https://chromewebstore.google.com/detail/posture-checker/pgdiaifhpkncmcbbpmidjbebohbdjggb"} children={
                            <>
                            <img src="./posturesticker3.png" className="absolute rotate-353 top-10 opacity-100 h-50 w-max p-8 z-4"/>

                            <div className="absolute text-sm font-orbitron text-[#000000] font-extrabold z-6 left-20 top-5">Posture Checker</div>
                            
                            <p className="absolute font-bold font-orbitron bottom-50 text-md text-black">About</p>
                            <p className="absolute bottom-44 left-9 font-semibold text-xs text-black">• A Chrome Timer which reminds you to </p>
                            <p className="absolute bottom-40 left-11 font-semibold text-xs text-black">straighten your posture with notifications. </p>

                            <p className="absolute bottom-30 left-9 font-semibold text-xs text-black">• Has organically attracted 15–20 weekly </p>
                            <p className="absolute bottom-26 left-11 font-semibold text-xs text-black">active users.</p>

                            <TextShimmerWave className='[--base-color:#000000] [--base-gradient-color:#000000] absolute bottom-20 font-semibold text-xs text-black' duration={2}>
                                {"Javascript - Jquery"}
                            </TextShimmerWave>
                            </>
                        }/>

                        {/* Energy */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={""}>
                            <>
                            <div className="absolute text-sm font-orbitron text-[#000000] font-extrabold z-6 left-20 top-5">Gre.View</div>

                            <p className="absolute top-23 text-black text-2xl font-bold h-50 w-max p-8 z-4">WIP</p>

                            <p className="absolute font-bold font-orbitron bottom-50 text-md text-black">About</p>
                            <p className="absolute bottom-44 left-9 font-semibold text-xs text-black">• A map website for students of Greenwich</p>
                            <p className="absolute bottom-40 left-11 font-semibold text-xs text-black"> which lets student find hidden local returants</p>
                            <p className="absolute bottom-36 left-11 font-semibold text-xs text-black"> rated and reccomended by other students.</p>

                            <p className="absolute bottom-30 left-9 font-semibold text-xs text-black">• I'm currently working on this project!</p>

                            <TextShimmerWave className='[--base-color:#000000] [--base-gradient-color:#000000] absolute bottom-20 font-semibold text-xs text-black' duration={2}>
                                {"React - AWS - Spring Boot"}
                            </TextShimmerWave>
                            </>                        
                        </Card>
                    </div>
                </div>
                <div className="text-white opacity-20">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={cardClicked ? "clicked" : "initial"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {!cardClicked ? "Click the cards" : "Click again to visit the project"}
                        </motion.span>
                    </AnimatePresence>
                </div>
                
                <div className="h-[200px]" />

                {/* About */}
                <div id="about" className="flex w-full justify-between items-start gap-8">
                    <About/>
                </div>

                <div className="h-[300px]" />

                {/* Info */}
                <div id="links">
                    <Info/>
                </div>

                
            </BackBoard>
        </div>
        </>
    );
}
export default Home;