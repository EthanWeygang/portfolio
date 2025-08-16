function  Background(){
    return(
        <>
        <div className="fixed h-screen -z-20 w-full bg-slate-950">
            <div
                className="absolute inset-0 -z-19 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
            />
            {/* <div className="fixed inset-0 -z-25 bg-[url('/clean-gray-paper.png')] bg-repeat opacity-[0.10] pointer-events-none"></div> */}
        </div>
        </>
    )
}

export default Background;