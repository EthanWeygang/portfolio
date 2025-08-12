import NavBar from "../components/NavBar";
import BackBoard from "../components/BackBoard";
import HoverWord from "../components/HoverWord";

function Home(){

    return(
<div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#141414_100%)]">
        <NavBar/>
        <BackBoard>
            <HoverWord word={"Ethan"}></HoverWord> <HoverWord word={"Weygang"}></HoverWord>
            <div className="h-100"/>
            rahhh
            
        </BackBoard>
    </div>
    )
}
export default Home; 