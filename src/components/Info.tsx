
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";

function Info(){
    return(
        <>
        <div className="flex w-full justify-between items-start gap-8">
            
            <div className="flex flex-col ml-[50px] flex-9">
                <div className="text-4xl pb-10">Get In Touch</div>
                <div className="text-lg flex flex-col justify-start space-y-4">
                    <div>
                        Want to collaborate on a project or just say hi? I'm always open to connecting with fellow developers and potential employers.
                    </div>
                    <div>
                        Email me, check out my code, connect with me professionally, or download my CV here!
                    </div>
                </div>
            </div>

            <div className="flex-2"/>

            <div className="flex flex-col mr-[50px] flex-9">
                <div className="text-4xl pb-10 pl-1">Links</div>
                <div className="flex flex-col gap-6 justify-start">
                    <a 
                        href="mailto:ethanweygang@gmail.com" 
                        className="flex items-center gap-4 text-2xl hover:scale-110 transition duration-200 ease-in-out group"
                    >
                        <FaEnvelope size={64} className="group-hover:scale-110 scale-80 transition duration-200 ease-in-out text-white"/>
                        <span className="group-hover:text-green-300 transition duration-200 ease-in-out">Email</span>
                    </a>
                    
                    <a 
                        href="https://github.com/ethanweygang" 
                        className="flex items-center gap-4 text-2xl hover:scale-110 transition duration-200 ease-in-out group"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <DiGithubBadge size={64} className="group-hover:scale-110 transition duration-200 ease-in-out"/>
                        <span className="group-hover:text-purple-300 transition duration-200 ease-in-out">Github</span>
                    </a>
                    
                    <a 
                        href="/Ethan_Weygang_CV.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 text-2xl hover:scale-110 transition duration-200 ease-in-out group"
                    >
                        <FaFilePdf size={64} className="group-hover:scale-110 transition duration-200 ease-in-out text-red-400"/>
                        <span className="group-hover:text-red-300 transition duration-200 ease-in-out">CV</span>
                    </a>
                    
                    <a 
                        href="https://www.linkedin.com/in/ethan-weygang-8a90301b2/" 
                        className="flex items-center gap-4 text-2xl hover:scale-110 transition duration-200 ease-in-out group"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={64} className="group-hover:scale-110 transition duration-200 ease-in-out text-blue-500"/>
                        <span className="group-hover:text-blue-300 transition duration-200 ease-in-out">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Info;