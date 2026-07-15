
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import Card from "../components/Card";
import Background from "../components/Background";
import { ExternalLink } from 'lucide-react';
import About from "../components/About";
import Bio from "../components/Bio";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";


function Home() {
    const [cardClicked, setCardClicked] = useState(false);

    return (
        <>
            <Background/>

            <div className="relative z-10 overflow-x-clip">
                <NavBar />
                <BackBoard>
                <div className="h-[200px]" />

            
                    <HoverWord word={"Ethan"} />
                    <HoverWord word={"Weygang"} />


                {/* Bio */}
                <Bio/>

                <div className="h-[130px]" />

                {/* Projects */}
                <div id="projects" className="flex w-full h-auto lg:h-160">
                    <div className="flex flex-wrap lg:flex-nowrap w-full lg:h-full justify-evenly items-center pt-10 lg:pt-46 px-2 sm:px-4">

                        {/* Nimbus Cloud */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"diamonds"} children={
                            <>
                            <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f2b57] to-[#1a3a6b] px-6 pt-10 pb-8 rounded-t-2xl overflow-hidden">
                                <span className="absolute -top-2 -right-3 text-[110px] text-white/5 select-none pointer-events-none leading-none">♦</span>
                                <p className="text-white/50 text-xs uppercase tracking-widest text-center mb-2">Full-Stack App</p>
                                <h2 className="text-white text-2xl font-bold text-center">Nimbus Cloud Storage</h2>
                                <p className="text-blue-300/70 text-sm text-center mt-1">Cloud Platform</p>
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                                <p className="text-white/75 text-sm leading-relaxed text-center">
                                    A full-stack cloud storage site built on AWS — using S3, CloudFront, RDS, and Elastic Beanstalk — with JWT authentication.
                                </p>
                                <p className="text-white/75 text-sm leading-relaxed text-center">
                                    Users can upload, download, and delete their files to and from the cloud.
                                </p>
                                <div className="border-t border-white/10"/>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['React', 'Spring Boot', 'AWS S3', 'CloudFront', 'RDS', 'JWT'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-blue-950/60 text-blue-200 text-xs rounded-full border border-blue-500/25">{tech}</span>
                                    ))}
                                </div>
                                <button
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0f2b57] to-[#1a3a6b] hover:from-[#1a3a6b] hover:to-[#0f2b57] text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 border border-blue-500/20 text-sm"
                                    onClick={() => window.open('https://github.com/EthanWeygang/nimbus', '_blank', 'noopener,noreferrer')}
                                >
                                    Visit Project <ExternalLink size={13}/>
                                </button>
                            </div>
                            </>
                        }/>
                        
                        
                        {/* Posture Checker */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"spades"} children={
                            <>
                            <div className="relative bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#252540] px-6 pt-10 pb-8 rounded-t-2xl overflow-hidden">
                                <span className="absolute -top-2 -right-3 text-[110px] text-white/5 select-none pointer-events-none leading-none">♠</span>
                                <p className="text-white/50 text-xs uppercase tracking-widest text-center mb-2">Chrome Extension</p>
                                <h2 className="text-white text-2xl font-bold text-center">Posture Checker</h2>
                                <div className="flex justify-center mt-2">
                                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/30">100+ Weekly Active Users</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                                <p className="text-white/75 text-sm leading-relaxed text-center">
                                    A Chrome extension timer that reminds you to check and straighten your posture with repeating notifications.
                                </p>
                                <p className="text-white/75 text-sm leading-relaxed text-center">
                                    Has organically grown to 100+ weekly active users on the Chrome Web Store.
                                </p>
                                <div className="border-t border-white/10"/>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['JavaScript', 'jQuery', 'Chrome APIs'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-slate-700/60 text-slate-200 text-xs rounded-full border border-slate-500/25">{tech}</span>
                                    ))}
                                </div>
                                <button
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a1a2e] to-[#252540] hover:from-[#252540] hover:to-[#1a1a2e] text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 border border-white/15 text-sm"
                                    onClick={() => window.open('https://github.com/ethanweygang/posture-checker', '_blank', 'noopener,noreferrer')}
                                >
                                    Visit Project <ExternalLink size={13}/>
                                </button>
                            </div>
                            </>
                        }/>

                        {/* BloodSend */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"hearts"} children={
                            <>
                            <div className="relative bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#991b1b] px-6 pt-10 pb-8 rounded-t-2xl overflow-hidden">
                                <span className="absolute -top-2 -right-3 text-[110px] text-white/5 select-none pointer-events-none leading-none">♥</span>
                                <p className="text-white/50 text-xs uppercase tracking-widest text-center mb-2">Full-Stack App</p>
                                <h2 className="text-white text-2xl font-bold text-center">Bloodsend</h2>
                                <p className="text-red-300/70 text-sm text-center mt-1">Blood Donor Matching Platform</p>
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                                <p className="text-white/75 text-sm leading-relaxed text-center">
                                    A full-stack web app that connects blood donors with blood-seekers. Users can create accounts and filter through a donor database to find a match.
                                </p>
                                <div className="border-t border-white/10"/>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['Express.js', 'MongoDB', 'Node.js', 'REST API'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-red-950/60 text-red-200 text-xs rounded-full border border-red-500/25">{tech}</span>
                                    ))}
                                </div>
                                <button
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7f1d1d] to-[#991b1b] hover:from-[#991b1b] hover:to-[#7f1d1d] text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 border border-red-500/20 text-sm"
                                    onClick={() => window.open('https://github.com/EthanWeygang/blood-send', '_blank', 'noopener,noreferrer')}
                                >
                                    Visit Project <ExternalLink size={13}/>
                                </button>
                            </div>
                            </>
                        }/>


                        {/* Productivity App */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"clubs"}>
                            <>
                            <div className="relative bg-gradient-to-br from-[#052e16] via-[#14532d] to-[#166534] px-6 pt-10 pb-8 rounded-t-2xl overflow-hidden">
                                <span className="absolute -top-2 -right-3 text-[110px] text-white/5 select-none pointer-events-none leading-none">♣</span>
                                <p className="text-white/50 text-xs uppercase tracking-widest text-center mb-2">Mobile App</p>
                                <h2 className="text-white text-2xl font-bold text-center">SimpliTask</h2>
                                <div className="flex justify-center mt-2">
                                    <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30">Work In Progress</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                                <p className="text-white/75 text-sm leading-relaxed text-center">
                                    A daily task app where users write down tasks for the day and check them off to stay on track.
                                </p>
                                <p className="text-white/75 text-sm leading-relaxed text-center">
                                    Currently in active development — planning to publish on the iOS App Store within a few weeks.
                                </p>
                                <div className="border-t border-white/10"/>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['React Native', 'iOS', 'Expo'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-green-950/60 text-green-200 text-xs rounded-full border border-green-500/25">{tech}</span>
                                    ))}
                                </div>
                                <div className="w-full flex items-center justify-center gap-2 bg-green-950/30 text-green-400/50 font-medium py-2.5 px-4 rounded-xl border border-green-500/15 text-sm cursor-not-allowed select-none">
                                    Coming Soon
                                </div>
                            </div>
                            </>                       
                        </Card>
                    </div>
                </div>
                <div className="text-white opacity-90">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={cardClicked ? "clicked" : "initial"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {!cardClicked ? "Click the cards" : "Click the cards again to read about the projects"}
                        </motion.span>
                    </AnimatePresence>
                </div>
                
                {/* This Div is important, its stops the weird bug that causes the cards to rotate and be clickable beneath where they actually are */}
                {/* It just covers the ghost card so its not being hovered over/ clicked on */}
                <div className="relative w-full h-70">
                        <div className="absolute top-0 w-full h-[800px]">
                        </div>
                </div>


                {/* About */}
                <div id="about" className="w-full">
                    <About/>
                </div>

                <div className="h-[200px]" />

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