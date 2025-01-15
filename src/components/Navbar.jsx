import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdNightlightRound } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'



const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { user, signOutUser, theme, setTheme } = useContext(AuthContext)
    const handleSignOut = () => {
        signOutUser()
        navigate('/')
    }
    console.log(user)
    const handleChangeTheme = () => {
        setTheme(!theme)
    }
    const navLinks = <>
        <div className="flex flex-row gap-4 font-medium">
            <NavLink to="/" className="px-3 py-1.5 rounded-lg">Home</NavLink>
            <NavLink to="/reviews" className="px-3 py-1.5 rounded-lg">All Reviews</NavLink>
            {
                user && <>
                    <NavLink to="/addReview" className="px-3 py-1.5 rounded-lg">Add Review</NavLink>
                    <NavLink to="/myReviews" className="px-3 py-1.5 rounded-lg">My Reviews</NavLink>
                    <NavLink to="/myWatchlist" className="px-3 py-1.5 rounded-lg">Game WatchList</NavLink>
                </>
            }
            <NavLink to="/faqs" className="px-3 py-1.5 rounded-lg">FAQs</NavLink>
            <NavLink to="/contact" className="px-3 py-1.5 rounded-lg">Contact</NavLink>
        </div>
    </>
    return (
        <div className="bg-black sticky border-b border-red-900 flex flex-col">
            <nav className="py-2 px-6 flex flex-row justify-between items-center">
                <img src="/assets/favicon.png" alt="Chill Gamer" className="w-[55px] mt-1" />
                <div className="text-red-900 flex ">{navLinks}</div>
                {
                    user ?
                        <div id="auth" className="p-2 rounded-full py-1 flex flex-row justify-center items-center gap-2">
                            <button onClick={handleSignOut} className="py-1 my-1 font-medium px-3 bg-[#c24444] gap-2 text-[16px] rounded-full text-white">Log Out</button>
                            <a className="cursor-pointer" data-tooltip-id="user-name-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="top" >
                                <img className="w-[55px]  rounded-full border border-red-900 h-[55px] bg-cover bg-center" src={user.photoURL ? user.photoURL : 'https://i.ibb.co.com/xLp370Q/39f240a04441d36e63432f10f21ff951.jpg'} />
                            </a>
                            <Tooltip id="user-name-tooltip"></Tooltip>
                            {
                                location.pathname === '/' && <button className={`text-2xl rounded-full ${theme ? 'bg-black' : 'bg-white'} border-red-900 ${theme ? 'text-white' : 'text-black'} border p-3`} onClick={handleChangeTheme}>
                                    {theme ? <MdNightlightRound /> : <MdLightMode />}
                                </button>
                            }
                        </div>
                        :
                        <div id="auth" className="rounded-full py-1 flex flex-row justify-start items-center ml-3 gap-2">
                            <NavLink to="/login" className="py-1 font-medium px-3 bg-black border border-red-900 gap-2 text-[16px] rounded-full text-white">Login</NavLink>
                            <NavLink to="/register" className="py-1 font-medium px-3 bg-black border border-red-900 gap-2 text-[16px] rounded-full text-white">Register</NavLink>
                            {
                                location.pathname === '/' && <button className={`text-2xl rounded-full ${theme ? 'bg-black' : 'bg-white'} border-red-900 ${theme ? 'text-white' : 'text-black'} border p-3`} onClick={handleChangeTheme}>
                                    {theme ? <MdNightlightRound /> : <MdLightMode />}
                                </button>
                            }
                        </div>
                }
            </nav>
            <div className="bg-red-900 h-1.5 blur-md"></div>
        </div>
    );
};

export default Navbar;