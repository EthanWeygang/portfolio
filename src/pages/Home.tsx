
import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";
import Info from "../components/Info";
import Card from "../components/Card";
import Background from "../components/Background";
import {DialogClose, DialogDescription, DialogHeader, DialogTitle } from "../../components/motion-primitives/dialog";
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
                    <div className="flex w-full gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 justify-center h-full items-center pt-46 px-4">

                        {/* Nimbus */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"hearts"} children={
                            <>
                            <DialogHeader>
                            <DialogTitle className='text-white text-center text-3xl mb-8'>
                                Nimbus Cloud Storage
                            </DialogTitle>
                            <DialogDescription className='text-white text-left'>
                                Nibus is a full-stack Cloud Storage website, using S3, Cloudfront, RDS, Elastic Beanstalk and JWT authentication.
                                <br/>
                                <br/>
                                Users can Upload, Download and Delete their files to and from the cloud.
                                <br/>
                                <br/>
                                <div className="text-center mt-4">
                                React - AWS - Spring Boot
                                </div>
                            </DialogDescription>
                            </DialogHeader>
                            <div className='mt-6 flex flex-col space-y-4'>
                            <label htmlFor='name' className='sr-only'>
                                Email
                            </label>

                            <button
                                className='inline-flex items-center justify-center self-center rounded-lg bg-[#0f2b57] px-4 py-2 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900'
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        window.open('https://dx26d5982gukc.cloudfront.net/', '_blank', 'noopener,noreferrer');
                                    }
                                }}
                            >
                                Visit Project
                            </button>
                            </div>
                            <DialogClose />
                            </>
                        }/>

                        
                        {/* Bloodsend */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"spades"} children={
                            <>
                            <DialogHeader>
                            <DialogTitle className='text-white text-center text-3xl mb-8'>
                                Bloodsend
                            </DialogTitle>
                            <DialogDescription className='text-white text-left'>
                                A full-stack express.js website which helps blood donors match with blood-seekers.
                                <br/>
                                <br/>
                                Users can create accounts, filter through adatabase of users to find a potential donor.
                                <br/>
                                <br/>
                                <div className="text-center mt-4">
                                Express.js - MongoDB
                                </div>
                            </DialogDescription>
                            </DialogHeader>
                            <div className='mt-6 flex flex-col space-y-4'>

                            <button
                                className='inline-flex items-center justify-center self-center rounded-lg bg-[#0f2b57] px-4 py-2 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900'
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        window.open('https://bloodsend.onrender.com/', '_blank', 'noopener,noreferrer');
                                    }
                                }}
                            >
                                Visit Project
                            </button>
                            </div>
                            <DialogClose />
                            </>
                        }/>

                        {/* Posture Checker */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"diamonds"} children={
                            <>
                            <DialogHeader>
                            <DialogTitle className='text-white text-center text-3xl mb-8'>
                                Posture Checker
                            </DialogTitle>
                            <DialogDescription className='text-white text-left'>
                                A Chrome Timer which reminds you to straighten your posture with notifications.
                                <br/>
                                <br/>
                                Has organically attracted 15–20 weeklyactive users.
                                <br/>
                                <br/>
                                <div className="text-center mt-4">
                                Javascript - Jquery
                                </div>
                            </DialogDescription>
                            </DialogHeader>
                            <div className='mt-6 flex flex-col space-y-4'>

                            <button
                                className='inline-flex items-center justify-center self-center rounded-lg bg-[#0f2b57] px-4 py-2 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900'
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        window.open('https://chromewebstore.google.com/detail/posture-checker/pgdiaifhpkncmcbbpmidjbebohbdjggb', '_blank', 'noopener,noreferrer');
                                    }
                                }}
                            >
                                Visit Project
                            </button>
                            </div>
                            <DialogClose />
                            </>
                        }/>

                        {/* Gre.View */}
                        <Card onCardClick={() => setCardClicked(true)} image={"./template.png"} bg={"clubs"}>
                            <>
                            <DialogHeader>
                            <DialogTitle className='text-white text-center text-3xl mb-8'>
                                Gre.View
                            </DialogTitle>
                            <DialogDescription className='text-white text-left'>
                                A map website for students of Greenwich which lets student find hidden local returants rated and reccommended by other students.
                                <br/>
                                <br/>
                                I'm currently working on this project!
                                <br/>
                                <br/>
                                <div className="text-center mt-4">
                                React - AWS - Spring Boot
                                </div>
                            </DialogDescription>
                            </DialogHeader>
                            <div className='mt-6 flex flex-col space-y-4'/>
                            <DialogClose />
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