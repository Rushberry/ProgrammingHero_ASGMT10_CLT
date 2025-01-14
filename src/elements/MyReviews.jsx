import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyReviews = () => {
    const [games, setGames] = useState([])
    const email = "info.rushberry@gmail.com"
    useEffect(() => {
        fetch('http://localhost:1500/myReviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    const handleDelete = e => {
        fetch(`http://localhost:1500/delete/${e}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                fetch('http://localhost:1500/myReviews', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ email })
                })
                .then(res => res.json())
                .then(data => setGames(data))
            })
    }
    return (
        <div className="bg-[url('/assets/bg.jpg')] flex justify-center items-center h-auto bg-cover bg-no-repeat">
            <div className="bg-transparent my-[100px] backdrop-blur-md border border-white rounded-3xl mx-11">
                <div className="flex flex-col p-8 gap-4 text-white text-center w-full justify-center items-center">
                    <h1 className="font-bold text-[32px] font-old">My Reviews</h1>
                    <div className="overflow-x-auto">
                        <table className="table text-white">
                            <thead className="text-[#F9C004]">
                                <tr className="text-[16px] text-center">
                                    <th>Game</th>
                                    <th>Published</th>
                                    <th>Genres</th>
                                    <th>Rating</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    games.map(data => <tr key={data._id} className="text-[16px] text-center">
                                        <th>{data.gameName}</th>
                                        <th>{data.publishedDate}</th>
                                        <th>{data.genres}</th>
                                        <th>{data.rating}</th>
                                        <th>
                                            <Link className="bg-black px-3 py-2 rounded-lg border border-white text-[#21f904]" to={`/updateReview/${data._id}`}>Update</Link>
                                        </th>
                                        <th>
                                            <button className="bg-black px-3 py-2 rounded-lg border border-white text-[#f90404]" onClick={() => { handleDelete(data._id) }}>Delete</button>
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

export default MyReviews;