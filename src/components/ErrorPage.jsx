import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-black flex justify-center items-center h-screen relative">
            <img src="/assets/404.gif" alt="Page Not Found" className="w-[400px]"/>
            <Link to="/" className="border-red-900 border text-red-900 bottom-10 right-10 px-4 py-1 text-xl rounded-xl font-old absolute">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;