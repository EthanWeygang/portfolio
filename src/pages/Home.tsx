
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import Card from "../components/Card";
import Background from "../components/Background";
import { TextShimmerWave } from "../../components/motion-primitives/text-shimmer-wave";
import About from "../components/About";
import Bio from "../components/Bio";


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
                <Bio/>

                <div className="h-[130px]" />

                {/* Projects */}
                <div id="projects" className="flex w-full h-160 ">
                    <div className="flex w-full gap-x-6 justify-center h-full items-center pt-46">

                        {/* Nimbus */}
                        <Card image={"./template.png"} bg={" bg-[#b9e6ae]"} link={"https://dx26d5982gukc.cloudfront.net/"} children={
                            <>
                            <img src="./nimbus.png" className="absolute top-15 opacity-100 h-40 w-max p-8 z-6"/>
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
                        <Card image={"./template.png"} bg={"bg-[#ed6a64]"} link={"https://bloodsend.onrender.com/"} children={
                            <>
                            <img src="./blood.png" className="absolute top-11 opacity-100 h-50 w-max p-8 z-6"/>
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
                        <Card image={"./template.png"} bg={"bg-[#a9dbdb]"} link={"https://chromewebstore.google.com/detail/posture-checker/pgdiaifhpkncmcbbpmidjbebohbdjggb"} children={
                            <>
                            <img src="./posture.png" className="absolute top-10 opacity-100 h-50 w-max p-8 z-4"/>

                            <div className="absolute text-sm font-orbitron text-[#000000] font-bold z-6 left-20 top-5">Posture Checker</div>
                            
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
                        <Card image={"./energy.webp"} bg={"bg-[#000000]"} children={""}/>
                    </div>
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