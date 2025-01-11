const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div className="bg-[url('https://wallpapers.com/images/high/red-gaming-zfvvm7d6cpq155ei.webp')] flex justify-center items-center h-auto bg-cover bg-no-repeat">
            <div className="bg-transparent my-[100px] backdrop-blur-lg border border-red-900 rounded-3xl mx-11">
                <div className="flex flex-col p-8 gap-4 text-white text-center w-full justify-center items-center">
                    <h1 className="font-bold text-[32px] font-old">Contact Us</h1>
                    <p className="text-[16px] font-normal lg:w-[796px]">Reach out to us for support, inquiries, or collaborations. Whether you have questions or need help, we’re here to assist you!</p>
                </div>
                <form className="grid lg:grid-cols-2 grid-cols-1 mx-auto w-11/12 gap-4 mb-[60px]" onSubmit={handleSubmit}>
                    <input className="p-4 rounded-2xl " name="FirstName" type="text" placeholder="First Name*" required />
                    <input className="p-4 rounded-2xl " name="LastName" type="text" placeholder="Last Name*" required />
                    <input className="p-4 rounded-2xl " name="Phone" type="number" placeholder="Phone Number*" required />
                    <input className="p-4 rounded-2xl " name="Email" type="email" placeholder="Email Address*" required />
                    <textarea className="p-4 rounded-[32px] h-[240px] lg:col-span-2" name="Message" type="text" placeholder="Write your message here*" required></textarea>
                    <button className="bg-red-900 font-old  rounded-2xl w-[200px] font-semibold  py-[11px] cursor-pointer text-white text-[20px] flex justify-center items-center gap-[14px]" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;