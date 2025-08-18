import { DiJavascript1, DiReact, DiPostgresql, DiPython, DiDocker, DiJava, DiHtml5 } from "react-icons/di";
import {SiSpringboot, SiAmazonwebservices } from "react-icons/si";

function About(){
    return(
        <>
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
                Currently, i'm preparing to take the AWS Cloud Practitioner certification and applying to a lot of internships for the summer, or whenever, really. 
                </div>
                <div>

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
        </>
    )
}
export default About;