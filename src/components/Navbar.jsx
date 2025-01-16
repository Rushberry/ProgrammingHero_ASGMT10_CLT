import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdNightlightRound } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { HiMiniBars3BottomRight } from "react-icons/hi2";



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
        <div className="flex lg:flex-row flex-col gap-2 font-medium">
            <NavLink to="/" className="px-2 py-1.5 rounded-lg">Home</NavLink>
            <NavLink to="/reviews" className="px-2 py-1.5 rounded-lg">All Reviews</NavLink>
            {
                user && <>
                    <NavLink to="/addReview" className="px-2 py-1.5 rounded-lg">Add Review</NavLink>
                    <NavLink to="/myReviews" className="px-2 py-1.5 rounded-lg">My Reviews</NavLink>
                    <NavLink to="/myWatchlist" className="px-2 py-1.5 rounded-lg">Game WatchList</NavLink>
                </>
            }
            <NavLink to="/faqs" className="px-2 py-1.5 rounded-lg">FAQs</NavLink>
            <NavLink to="/contact" className="px-2 py-1.5 rounded-lg">Contact</NavLink>
        </div>
    </>
    return (
        <div className="bg-black border-b border-red-900 flex flex-col">
            <nav className="py-2 px-3 flex flex-row justify-between items-center">
                <img src="/assets/favicon.png" alt="Chill Gamer" className="w-[55px] mt-1" />
                <div className="text-red-900 lg:flex hidden">{navLinks}</div>
                {
                    user ?
                        <div id="auth" className="p-2 rounded-full py-1 hidden lg:flex flex-row justify-center items-center gap-2">
                            <button onClick={handleSignOut} className="py-1 my-1 font-medium px-3 bg-[#c24444] gap-2 text-[16px] rounded-full text-white">Log Out</button>
                            <Tooltip id="user-name-tooltip"></Tooltip>
                            <a className="cursor-pointer" data-tooltip-id="user-name-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="top" >
                                <img className="w-[55px]  rounded-full border border-red-900 h-[55px] bg-cover bg-center" src={user.photoURL ? user.photoURL : 'https://i.ibb.co.com/xLp370Q/39f240a04441d36e63432f10f21ff951.jpg'} />
                            </a>
                            {
                                location.pathname === '/' && <button className={`text-2xl rounded-full ${theme ? 'bg-black' : 'bg-white'} border-red-900 ${theme ? 'text-white' : 'text-black'} border p-3`} onClick={handleChangeTheme}>
                                    {theme ? <MdNightlightRound /> : <MdLightMode />}
                                </button>
                            }
                        </div>

                        :
                        <div id="auth" className="rounded-full py-1 hidden lg:flex flex-row justify-start items-center ml-3 gap-2">
                            <NavLink to="/login" className="py-1 font-medium px-3 bg-black border border-red-900 gap-2 text-[16px] rounded-full text-white">Login</NavLink>
                            <NavLink to="/register" className="py-1 font-medium px-3 bg-black border border-red-900 gap-2 text-[16px] rounded-full text-white">Register</NavLink>
                            {
                                location.pathname === '/' && <button className={`text-2xl rounded-full ${theme ? 'bg-black' : 'bg-white'} border-red-900 ${theme ? 'text-white' : 'text-black'} border p-3`} onClick={handleChangeTheme}>
                                    {theme ? <MdNightlightRound /> : <MdLightMode />}
                                </button>
                            }
                        </div>

                }
                <div className="lg:hidden flex gap-4">
                    <div className="lg:hidden flex">
                        {
                            location.pathname === '/' && <button className={`text-2xl rounded-full ${theme ? 'bg-black' : 'bg-white'} border-red-900 ${theme ? 'text-white' : 'text-black'} border p-2`} onClick={handleChangeTheme}>
                                {theme ? <MdNightlightRound /> : <MdLightMode />}
                            </button>
                        }
                    </div>
                    <div className="dropdown lg:hidden flex flex-row gap-4">

                        <div tabIndex={0} role="button" className="w-10 h-10 bg-black rounded-full text-red-900 border-red-900 border flex justify-center items-center">
                            <HiMiniBars3BottomRight />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content right-2   bg-black border border-red-900 rounded-box z-[5] mt-[80px] w-[150px]  p-2 gap-[15px] flex flex-col items-start text-[16px] text-[#0B0B0BB3] font-medium justify-center">

                            <div className="text-red-900 w-full ">{navLinks}</div>
                            {
                                user ?
                                    <div id="auth" className="p-2 rounded-full py-1 flex flex-col justify-start items-start gap-2">
                                        <button onClick={handleSignOut} className="py-1 my-1 font-medium px-3 bg-[#c24444] gap-2 text-[16px] rounded-full text-white">Log Out</button>
                                        <a className="cursor-pointer" data-tooltip-id="user-name-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="top" >
                                            <img className="w-[55px]  rounded-full border border-red-900 h-[55px] bg-cover bg-center" src={user.photoURL ? user.photoURL : 'https://i.ibb.co.com/xLp370Q/39f240a04441d36e63432f10f21ff951.jpg'} />
                                        </a>
                                        <Tooltip id="user-name-tooltip"></Tooltip>
                                    </div>
                                    :
                                    <div id="auth" className="rounded-full py-1 flex flex-col justify-start items-start ml-3 gap-2">
                                        <NavLink to="/login" className="py-1 font-medium px-3 bg-black border border-red-900 gap-2 text-[16px] rounded-full text-white">Login</NavLink>
                                        <NavLink to="/register" className="py-1 font-medium px-3 bg-black border border-red-900 gap-2 text-[16px] rounded-full text-white">Register</NavLink>
                                    </div>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bg-red-900 h-1.5 blur-md"></div>
        </div>
    );
};

export default Navbar;