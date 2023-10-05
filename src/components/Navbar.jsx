const Navbar = ()=>{
    return(
        <>
        <nav className="bg-white grid grid-flow-col p-5 shadow-xl">
            <div className="flex col-span-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            className="h-8 "
            alt = "hamburger-icon"/>
            <img src="https://cdn.worldvectorlogo.com/logos/youtube.svg"
            alt="youtube-icon"
            className="h-8 ml-4"/>
            </div>

            <div  className="col-span-10 text-center">
                <input
                className="w-1/2 p-2 border border-gray-400 rounded-l-full"
                 type="text" placeholder="search"/>
                <button className="py-2 px-5 border border-gray-400 bg-gray-100 rounded-r-full " type="submit">&#128269;</button>
            </div>

            <div className="col-span-1">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                 alt="login-icon"
                 className="h-8"/>
            </div>
        </nav>
        
        </>
    )
}
export default Navbar; 