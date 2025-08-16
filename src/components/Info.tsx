import { TextShimmerWave } from '../../components/motion-primitives/text-shimmer-wave';
function Info(){
    return(
        <>
        <div className="flex flex-col items-center justify-center">
            <div className="text-center text-5xl mb-10">
                <TextShimmerWave className='[--base-color:#FFFFFF] [--base-gradient-color:#af58c0]' duration={2}>
                Links
                </TextShimmerWave>
                </div>

            <div className="flex justify-center">
                <a href="https://github.com/ethanweygang" className="text-2xl m-8">Github</a>
                <p className="text-2xl m-8">CV</p>
                <a href="https://www.linkedin.com/in/ethan-weygang-8a90301b2/" className="text-2xl m-8">Linkedin</a>
                
            </div>
        </div>
        </>
    )
}

export default Info;