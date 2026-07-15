interface BackBoardProps {
    children: React.ReactNode;
}

function BackBoard({ children }: BackBoardProps){
    return(

    <div className="flex justify-between">
        <div className="bg-transparent px-4 py-10 sm:px-10 flex-13 flex flex-col items-center text-white" >
            {children}
        </div>
    </div>

    );
}
export default BackBoard