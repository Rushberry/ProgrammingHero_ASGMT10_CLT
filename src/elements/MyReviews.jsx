import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyReviews = () => {
    const [games, setGames] = useState([])
    const {user} = useContext(AuthContext)
    const email = user.email;
    useEffect(() => {
        fetch('https://chill-gamer-server-virid.vercel.app/myReviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    const handleDelete = e => {
        fetch(`https://chill-gamer-server-virid.vercel.app/delete/${e}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                fetch('https://chill-gamer-server-virid.vercel.app/myReviews', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ email })
                })
                    .then(res => res.json())
                    .then(data => setGames(data))
            })
    }
    return (
        <div className="bg-[url('/assets/bg.jpg')] flex justify-center items-center h-auto bg-cover bg-no-repeat ">
            <div className="bg-transparent my-[100px] backdrop-blur-md border border-white rounded-3xl lg:mx-[25%] mx-5 lg:w-8/12 w-11/12">
                <div className="flex flex-col p-8 gap-4 text-white text-center w-full justify-center items-center">
                    <h1 className="font-bold text-[32px] font-old">My Reviews</h1>
                    <div className="overflow-x-auto">
                        <table className="table text-white">
                            <thead className="text-[#F9C004]">
                                <tr className="text-[16px]  text-center">
                                    <th className="p-1">Game</th>
                                    <th className="p-1">Published</th>
                                    <th className="lg:block hidden p-1">Genres</th>
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
                                        <th className="flex gap-2 justify-center items-center lg:flex-row md:flex-row flex-col">
                                            <Link className="bg-black px-3 py-2 rounded-lg border border-white text-[#21f904]" to={`/updateReview/${data._id}`}>Update</Link>
                                            <button className="bg-black px-3 py-2 rounded-lg border border-white text-[#f90404]" onClick={() => document.getElementById(`${data._id}`).showModal()}>Delete</button>
                                            <dialog id={`${data._id}`} className="modal">
                                                <div className="modal-box bg-black border border-red-900">
                                                    <p className="py-4 font-old text-[20px]">Are you sure you want to delete this review? <br />This action cannot be undone.</p>
                                                    <div className="modal-action">
                                                        <button className="btn bg-red-900 text-white hover:bg-red-600 text-[16px]" onClick={() => { handleDelete(data._id) }}>Delete</button>
                                                        <form method="dialog">
                                                            <button className="btn  text-[16px]">Cancel</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
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