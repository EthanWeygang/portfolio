interface HoverWordProps {
    word: string;
}

function HoverWord({ word }: HoverWordProps){

    return(
        <div className="flex">
            {word.split('').map((char, i) => (
                <div className="transition duration-300 ease-in-out hover:scale-150 hover:text-orange1 text-6xl" key={i}>{char}</div>
            ))}
        </div>
    )
}
export default HoverWord;