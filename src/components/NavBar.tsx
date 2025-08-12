function Navbar(){
return(
    <nav className="flex justify-between items-center space-x-1 px-4 py-12">
        <div className="flex-5"/>

        <div className="flex-3 flex bg-black1 rounded-4xl">
            <button className="flex-1 mx-1 rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-transparent h-10 mx-2">About</button>
            <button className="flex-1 mx-1 rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-transparent h-10 mx-2">Projects</button>
            <button className="flex-1 mx-1 rounded-xl text-center text-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-transparent h-10 mx-2">Info</button>
        </div>
        <div className="flex-5"/>
    </nav>
)
}

export default Navbar;