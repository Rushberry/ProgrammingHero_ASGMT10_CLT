import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyWatchlist = () => {
    const [games, setGames] = useState([])
    const { user } = useContext(AuthContext)
    const email = user.email;
    useEffect(() => {
        fetch('https://chill-gamer-server-virid.vercel.app/myWatchlist', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    return (
        <div className="bg-[url('/assets/bg.jpg')] flex justify-center items-center h-auto bg-cover bg-no-repeat">
            <div className="bg-transparent my-[100px] backdrop-blur-md border border-white rounded-3xl lg:mx-[25%] mx-5 lg:w-8/12 w-11/12">
                <div className="flex flex-col p-8 gap-4 text-white text-center w-full justify-center items-center">
                    <h1 className="font-bold text-[32px] font-old">My Game Watchlist</h1>
                    <div className="overflow-x-auto">
                        <table className="table text-white">
                            <thead className="text-[#F9C004]">
                                <tr className="text-[16px] text-center">
                                    <th className="p-1">Game</th>
                                    <th className="p-1">Published</th>
                                    <th className="p-1 lg:block hidden">Genres</th>
                                    <th className="p-1">Rating</th>
                                    <th className="p-1"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    games.map(data => <tr key={data._id} className="text-[16px] text-center">
                                        <th>{data.gameName}</th>
                                        <th>{data.publishedDate}</th>
                                        <th className="lg:block hidden">{data.genres}</th>
                                        <th>{data.rating}</th>
                                        <th>
                                            <Link className="bg-black px-3 py-1.5 rounded-lg text-white border border-white" to={`/review/${data.reviewId}`}>Explore</Link>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWatchlist;