import { DiJavascript1, DiReact, DiPostgresql, DiPython, DiDocker, DiJava, DiHtml5 } from "react-icons/di";
import {SiSpringboot, SiAmazonwebservices } from "react-icons/si";
import { InView } from "../../components/motion-primitives/in-view";

function About(){
    return(
        <>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <div className="flex flex-col ml-[50px] flex-9">

                <div className="text-4xl pb-10">About Me</div>

                <div className="text-lg flex flex-col justify-start space-y-4">
                    <div>
                    I'm a third-year Computer Science student who enjoys building full-stack applications using Java, Spring Boot, AWS, Docker and React (but I'm constantly trying new technologies!!).
                    </div>
                    <div>
                        I'm passionate about Cloud Engineering and Software Development, with multiple personal projects already made, and many more in the pipeline!
                    </div>
                    <div>
                        Currently, I'm preparing to take the AWS Cloud Practitioner certification and actively seeking internships for the summer.
                    </div>
                </div>
            </div>
        </InView>

        <div className="flex-2"/>
        
        <InView
            variants={{
                hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -200px 0px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
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
        </InView>
        </>
    )
}
export default About;