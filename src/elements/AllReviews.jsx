import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const AllReviews = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch('http://localhost:1500/reviews')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    const handleSortBy = e => {
        const value = e.target.value;
        const sortBy = [...games].sort((a,b) => {
            if(value === "Year") return b.publishedDate - a.publishedDate;
            if(value === "Rating") return b.rating - a.rating;
        })
        setGames(sortBy)
    }

    const handleGenres = e => {
        const value = e.target.value;
        fetch(`http://localhost:1500/${value}`)
            .then(res => res.json())
            .then(data => setGames(data))
    }
    return (
        <div className="flex flex-col justify-center items-center py-12 bg-[url('/assets/bg.jpg')] bg-no-repeat bg-cover border-b border-red-900">
            <div className="flex flex-col justify-start items-start text-left w-11/12">
                <div className="w-full flex justify-between items-center">
                    <h1 className="font-old lg:text-3xl md:text-xl text-lg text-white text-left">All Reviews</h1>
                    <div className="flex flex-row gap-3">
                        <select className="p-3 px-4 rounded-2xl text-white font-old bg-black border border-white font-medium text-[18px]" name="sortBy" placeholder="Sort By" onChange={handleSortBy}>
                            <option className="hidden" value="" disabled selected>Sort By</option>
                            <option value="Rating">Rating</option>
                            <option value="Year">Year</option>
                        </select>
                        <select className="p-3 px-4 rounded-2xl text-white font-old bg-black border border-white font-medium text-[18px]" name="genres" placeholder="Genres" onChange={handleGenres}>
                            <option className="hidden" value="" disabled selected>Genres</option>
                            <option value="action">Action</option>
                            <option value="rpg">RPG</option>
                            <option value="adventure">Adventure</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-7 mt-7">
                    {
                        games.map(card => <div key={card._id} className="bg-black border border-white h-full rounded-xl p-7">
                            <img src={card.thumbnail} alt={card.gameName} className="rounded-xl h-[200px] w-[400px] bg-cover bg-center" />
                            <h3 className="text-white mt-3 font-medium text-2xl">{card.gameName}</h3>
                            <p className="text-[18px] flex flex-row gap-2 mb-0.5 text-[#F9C004]"><ReactStars count={5} value={card.rating} edit={false} size={18} activeColor="#F9C004"></ReactStars>({card.rating})</p>
                            <p className="text-[18px] flex flex-row gap-2 mb-0.5 text-[#ffff]">Published: ({card.publishedDate})</p>
                            <p className="text-[18px] flex flex-row gap-2 mb-5 text-[#F9C004]">Genre: ({card.genres})</p>
                            <Link to={`/review/${card._id}`} className="text-white px-5 py-3  bg-[#edad5a] rounded-lg font-medium ">Explore Details</Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;