import NavBar from "../components/Navbar";
import BackBoard from "../components/BackBoard";

function Home(){

    return(
<div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#FC5130_200%)]">
        <NavBar/>
        <BackBoard>
            <p className="text-6xl">Hi, i'm Ethan</p>
            <br/>
            rahhh
            
        </BackBoard>
    </div>
    )
}
export default Home;