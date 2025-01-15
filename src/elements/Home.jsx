import { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from "../providers/AuthProvider";
const Home = () => {
    const [highRated, setHighRated] = useState([])
    const { theme } = useContext(AuthContext)
    const background = theme 
    ? "bg-[url('/assets/bg.jpg')]" 
    : "bg-[#f2d0d0]";
    const boldText = theme ? "text-white" : "text-red-900"
    const border = theme ? "border-white" : "border-[#edad5a]";
    const text = theme ? "text-white" : "text-black";
    const bg = theme ? "bg-black" : "bg-white";
    const [latest, setLatest] = useState([])
    const [adventure, setAdventure] = useState([])
    const [action, setAction] = useState([])
    const [rpg, setRPG] = useState([])
    useEffect(() => {
        fetch('http://localhost:1500/highRated')
            .then(res => res.json())
            .then(data => setHighRated(data))
        fetch('http://localhost:1500/latest')
            .then(res => res.json())
            .then(data => setLatest(data))
        fetch('http://localhost:1500/adventure')
            .then(res => res.json())
            .then(data => setAdventure(data))
        fetch('http://localhost:1500/rpg')
            .then(res => res.json())
            .then(data => setRPG(data))
        fetch('http://localhost:1500/action')
            .then(res => res.json())
            .then(data => setAction(data))
    }, [])
    const [slider, setSlider] = useState(1)
    const totalSlide = 5
    const slideTo = (slideToView) => {
        if (slideToView < 1) {
            setSlider(totalSlide)
        }
        else if (slideToView > totalSlide) {
            setSlider(1)
        }
        else {
            setSlider(slideToView)
        }
    }
    return (
        <div className={`flex flex-col justify-center items-center py-12 ${background} bg-no-repeat bg-cover border-b border-red-900`}>
            <h1 className={`${boldText} text-3xl mb-3`}>
                <Typewriter
                    words={['Explore Top-Rated Games!', 'Find Your Next Adventure!', 'Dive Into the World of Gaming!']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <div className="carousel w-11/12 rounded-3xl border border-red-900" >
                <div className={`carousel-item ${slider === 1 ? 'block' : 'hidden'} relative w-full`}>
                    <img
                        src="/assets/freefire.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => slideTo(slider - 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronLeft size={18} /></button>
                        <button onClick={() => slideTo(slider + 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronRight size={18} /></button>
                    </div>
                </div>
                <div className={`carousel-item ${slider === 2 ? 'block' : 'hidden'} relative w-full`}>
                    <img
                        src="/assets/fortnite.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => slideTo(slider - 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronLeft size={18} /></button>
                        <button onClick={() => slideTo(slider + 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronRight size={18} /></button>
                    </div>
                </div>
                <div className={`carousel-item ${slider === 3 ? 'block' : 'hidden'} relative w-full`}>
                    <img
                        src="/assets/pubg.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => slideTo(slider - 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronLeft size={18} /></button>
                        <button onClick={() => slideTo(slider + 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronRight size={18} /></button>
                    </div>
                </div>
                <div className={`carousel-item ${slider === 4 ? 'block' : 'hidden'} relative w-full`}>
                    <img
                        src="/assets/valorant.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => slideTo(slider - 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronLeft size={18} /></button>
                        <button onClick={() => slideTo(slider + 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronRight size={18} /></button>
                    </div>
                </div>
                <div className={`carousel-item ${slider === 5 ? 'block' : 'hidden'} relative w-full`}>
                    <img
                        src="/assets/minecraft.png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => slideTo(slider - 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronLeft size={18} /></button>
                        <button onClick={() => slideTo(slider + 1)} className="bg-black hover:bg-black p-3 rounded-full text-red-900 shadow-sm border border-red-900"><FaChevronRight size={18} /></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start text-left w-11/12">
                <h1 className={`font-old lg:text-3xl md:text-xl text-lg ${boldText} mt-12 text-left`}>Highest Rated Games</h1>
                <div className="grid grid-cols-3 gap-7 mt-7">
                    {
                        highRated.map(card => <div key={card._id} className={`${bg} border ${border} h-full rounded-xl p-7`}>
                            <img src={card.thumbnail} alt={card.gameName} className="rounded-xl h-[200px] w-[400px] bg-cover bg-center" />
                            <h3 className={`${text} mt-3 font-medium text-2xl`}>{card.gameName}</h3>
                            <p className="text-[18px] flex flex-row gap-2 mb-5 text-[#F9C004]"><ReactStars count={5} value={card.rating} edit={false} size={18} activeColor="#F9C004"></ReactStars>({card.rating})</p>
                            <Link to={`/review/${card._id}`} className="text-white px-5 py-3  bg-[#edad5a] rounded-lg font-medium ">Explore Details</Link>
                        </div>)
                    }
                </div>
                <h1 className={`font-old lg:text-3xl md:text-xl text-lg ${boldText} mt-12 text-left`}>Latest Releases</h1>
                <div className="grid grid-cols-3 gap-7 mt-7">
                    {
                        latest.map(card => <div key={card._id} className={`${bg} border ${border} h-full rounded-xl p-7`}>
                            <img src={card.thumbnail} alt={card.gameName} className="rounded-xl h-[200px] w-[400px] bg-cover bg-center" />
                            <h3 className={`${text} mt-3 font-medium text-2xl`}>{card.gameName}</h3>
                            <p className="text-[18px] flex flex-row gap-2 mb-5 text-[#F9C004]">Published: ({card.publishedDate})</p>
                            <Link to={`/review/${card._id}`} className="text-white px-5 py-3  bg-[#edad5a] rounded-lg font-medium ">Explore Details</Link>
                        </div>)
                    }
                </div>
                <h1 className={`font-old lg:text-3xl md:text-xl text-lg ${boldText} mt-12 text-left`}>Explore by Genre</h1>
                <h3 className={`lg:text-xl md:text-lg text-md ${boldText} mt-5 text-left`}>• Adventure:</h3>
                <div className="grid grid-cols-3 gap-7 mt-7">
                    {
                        adventure.map(card => <div key={card._id} className={`${bg} border ${border} h-full rounded-xl p-7`}>
                            <img src={card.thumbnail} alt={card.gameName} className="rounded-xl h-[200px] w-[400px] bg-cover bg-center" />
                            <h3 className={`${text} mt-3 font-medium text-2xl`}>{card.gameName}</h3>
                            <p className="text-[18px] flex flex-row gap-2 mb-5 text-[#F9C004]">Genre: ({card.genres})</p>
                            <Link to={`/review/${card._id}`} className="text-white px-5 py-3  bg-[#edad5a] rounded-lg font-medium ">Explore Details</Link>
                        </div>)
                    }
                </div>
                <h3 className={`lg:text-xl md:text-lg text-md ${boldText} mt-5 text-left`}>• Action:</h3>
                <div className="grid grid-cols-3 gap-7 mt-7">
                    {
                        action.map(card => <div key={card._id} className={`${bg} border ${border} h-full rounded-xl p-7`}>
                            <img src={card.thumbnail} alt={card.gameName} className="rounded-xl h-[200px] w-[400px] bg-cover bg-center" />
                            <h3 className={`${text} mt-3 font-medium text-2xl`}>{card.gameName}</h3>
                            <p className="text-[18px] flex flex-row gap-2 mb-5 text-[#F9C004]">Genre: ({card.genres})</p>
                            <Link to={`/review/${card._id}`} className="text-white px-5 py-3  bg-[#edad5a] rounded-lg font-medium ">Explore Details</Link>
                        </div>)
                    }
                </div>
                <h3 className={`lg:text-xl md:text-lg text-md ${boldText} mt-5 text-left`}>• RPG:</h3>
                <div className="grid grid-cols-3 gap-7 mt-7">
                    {
                        rpg.map(card => <div key={card._id} className={`${bg} border ${border} h-full rounded-xl p-7`}>
                            <img src={card.thumbnail} alt={card.gameName} className="rounded-xl h-[200px] w-[400px] bg-cover bg-center" />
                            <h3 className={`${text} mt-3 font-medium text-2xl`}>{card.gameName}</h3>
                            <p className="text-[18px] flex flex-row gap-2 mb-5 text-[#F9C004]">Genre: ({card.genres})</p>
                            <Link to={`/review/${card._id}`} className="text-white px-5 py-3  bg-[#edad5a] rounded-lg font-medium ">Explore Details</Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;