interface BackBoardProps {
    children: React.ReactNode;
}

function BackBoard({ children }: BackBoardProps){
    return(

    <div className="flex justify-between ">
        <div className="flex-1"/>
        <div className="bg-transparent p-10 flex-2 flex flex-col items-center rounded-xl shadow-xl text-white font-bold" >
            {children}
        </div>
        <div className="flex-1"/>
    </div>

    );
}
export default BackBoard