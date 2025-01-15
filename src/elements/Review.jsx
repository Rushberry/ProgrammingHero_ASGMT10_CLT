import { useLoaderData, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const Review = () => {
    const {user} = useContext(AuthContext)
    const userName = user.displayName;
    const userEmail = user.email;
    const loader = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    let data = loader[0];
    const handleAddWatchlist = () => {
        const name = userName;
        const email = userEmail;
        const reviewId = data._id;
        const gameName = data.gameName;
        const publishedDate = data.publishedDate;
        const genres = data.genres;
        const rating = data.rating;
        const watch = {name, email, reviewId, gameName, publishedDate, genres, rating}
        fetch('https://chill-gamer-server-virid.vercel.app/addWatchlist', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(watch)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="bg-[url('https://wallpapers.com/images/high/red-gaming-zfvvm7d6cpq155ei.webp')] flex justify-center items-center h-auto bg-cover bg-no-repeat">
            <div className="bg-transparent flex flex-col justify-center items-center my-[100px] backdrop-blur-lg border border-red-900 rounded-3xl mx-11 w-8/12">
                <div className="flex flex-col p-8 text-white text-center w-full justify-center items-center">
                    <h1 className="font-bold text-[32px] font-old">{data.gameName}</h1>
                    <p className="mt-0 text-[14px] bg-black p-1 px-3 border border-red-900 rounded-3xl  text-white">Reviewer: {data.name} ({data.email})</p>
                </div>
                <div className="flex flex-row gap-2 -mt-3 mb-4 justify-center items-center">
                    <p className="text-2xl flex flex-row gap-2 mb-0.5 text-[#F9C004]"><span className="text-white">Rating:</span> <ReactStars count={5} value={data.rating} edit={false} size={18} activeColor="#F9C004"></ReactStars>({data.rating})</p>
                    <p className="text-2xl flex flex-row gap-2 mb-0.5 text-[#F9C004]"><span className="text-white">Published:</span> ({data.publishedDate})</p>
                    <p className="text-2xl flex flex-row gap-2 mb-0.5 text-[#F9C004]"><span className="text-white">Genre:</span> ({data.genres})</p>
                </div>
                <div className="flex justify-between w-11/12 mb-5">
                    <button className="text-white px-5 py-3  bg-[#F9C004] rounded-lg font-medium " onClick={handleGoBack}>Go Back</button>
                    <button className="text-white px-5 py-3  bg-[#F9C004] rounded-lg font-medium " onClick={handleAddWatchlist}>Add to WatchList</button>
                </div>
                <img src={data.thumbnail} alt={data.gameName} className="w-11/12 rounded-3xl" />
                <p className="bg-black p-5 w-11/12 border border-red-900 rounded-3xl mt-6 mb-9 text-white">{data.description}</p>
            </div>
        </div>
    );
};

export default Review;