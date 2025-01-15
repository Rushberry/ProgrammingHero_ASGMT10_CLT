import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
    const loader = useLoaderData()
    const navigate = useNavigate()
    let data = loader[0];
    const [genres, setGenres] = useState(data.genres)
    let year = new Date().getFullYear()
    const user = "Rushberry"
    const userEmail = "info.rushberry@gmail.com"
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const thumbnail = form.cover.value;
        const gameName = form.gameName.value;
        const rating = form.rating.value;
        const publishedDate = form.published.value;
        const genres = form.genres.value;
        const description = form.description.value;
        const gameData = {thumbnail, gameName, rating, publishedDate, genres, description}
        fetch(`http://localhost:1500/updateReview/${data._id}`, {
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(gameData)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        form.reset()
        navigate(-1)
    } )
    }
    return (
        <div className="bg-[url('https://wallpapers.com/images/high/red-gaming-zfvvm7d6cpq155ei.webp')] flex justify-center items-center h-auto bg-cover bg-no-repeat">
            <div className="bg-transparent my-[100px] backdrop-blur-lg border border-red-900 rounded-3xl mx-11 w-11/12">
                <div className="flex flex-col p-8 gap-4 text-white text-center w-full justify-center items-center">
                    <h1 className="font-bold text-[32px] font-old">Update Review</h1>
                </div>
                <form className="flex flex-col mx-auto w-11/12 gap-4 mb-[60px]" onSubmit={handleSubmit}>
                    <input className="p-4 rounded-2xl " defaultValue={data.thumbnail} name="cover" type="text" placeholder="Game Cover Image/Thumbnail*" required />
                    <input className="p-4 rounded-2xl " defaultValue={data.gameName} name="gameName" type="text" placeholder="Game Title/ Name*" required />
                    <input className="p-4 rounded-2xl " defaultValue={data.description} name="description" type="text" placeholder="Review Description*" required />
                    <input className="p-4 rounded-2xl " defaultValue={data.rating} name="rating" type="number" step="0.1" min="0" max="5" placeholder="Rating out of 5*" required />
                    <input className="p-4 rounded-2xl " defaultValue={data.publishedDate} name="published" type="number" min="1900" max={year} placeholder="Publishing year*" required />
                    <select className="p-4 rounded-2xl " value={genres} onChange={(e) => setGenres(e.target.value)} name="genres" placeholder="Genres" required>
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                    </select>
                    <input className="p-4 rounded-2xl opacity-1" value={user} disabled name="name" type="email" placeholder="User Email*" required />
                    <input className="p-4 rounded-2xl opacity-1" value={userEmail} disabled name="email" type="text" placeholder="User Name*" required />
                    <button className="bg-red-900 font-old  rounded-2xl w-[200px] font-semibold  py-[11px] cursor-pointer text-white text-[20px] flex justify-center items-center gap-[14px]" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;