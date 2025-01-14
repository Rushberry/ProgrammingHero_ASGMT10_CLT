import { NavLink, useLocation } from "react-router-dom";
import { MdNightlightRound } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";




const Navbar = () => {
    const location = useLocation()
    const [theme, setTheme] = useState(true)
    const handleChangeTheme = () => {
        setTheme(!theme)
    }
    const navLinks = <>
        <div className="flex flex-row gap-4 font-medium">
            {
                location.pathname === '/' && <button onClick={handleChangeTheme}>
                    {theme? <MdNightlightRound /> : <MdLightMode />}
                </button>
            }
            <NavLink to="/" className="px-3 py-1.5 rounded-lg">Home</NavLink>
            <NavLink to="/reviews" className="px-3 py-1.5 rounded-lg">All Reviews</NavLink>
            <NavLink to="/addReview" className="px-3 py-1.5 rounded-lg">Add Review</NavLink>
            <NavLink to="/myReviews" className="px-3 py-1.5 rounded-lg">My Reviews</NavLink>
            <NavLink to="/myWatchlist" className="px-3 py-1.5 rounded-lg">Game WatchList</NavLink>
            <NavLink to="/faqs" className="px-3 py-1.5 rounded-lg">FAQs</NavLink>
            <NavLink to="/contact" className="px-3 py-1.5 rounded-lg">Contact</NavLink>
        </div>
    </>
    return (
        <div className="bg-black sticky border-b border-red-900 flex flex-col">
            <nav className="py-2 px-6 flex flex-row justify-between items-center">
                <img src="/assets/favicon.png" alt="Chill Gamer" className="w-[55px] mt-1"/>
                <div className="text-red-900 flex ">{navLinks}</div>
            </nav>
            <div className="bg-red-900 h-1.5 blur-md"></div>
        </div>
    );
};

export default Navbar;