function Navbar(){
return(
    <nav className="flex justify-between items-center space-x-1 px-4 py-4">
        <div className="flex-10">

        </div>
        <button className="flex-1 mx-1 rounded-xl text-center text-dark shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-white h-10 mx-2">About</button>
        <button className="flex-1 mx-1 rounded-xl text-center text-dark shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-white h-10 mx-2">Projects</button>
        <button className="flex-1 mx-1 rounded-xl text-center text-dark shadow-xl transition duration-300 ease-in-out transform hover:scale-105 font-bold bg-white h-10 mx-2">Info</button>
    </nav>
)
}

export default Navbar;