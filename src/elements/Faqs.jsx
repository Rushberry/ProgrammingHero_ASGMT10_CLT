const Faqs = () => {
    return (
        <div className="bg-[url('https://wallpapers.com/images/high/red-gaming-zfvvm7d6cpq155ei.webp')] flex justify-center items-center h-auto bg-cover bg-no-repeat">
            <div className="bg-transparent my-[100px] backdrop-blur-lg border border-red-900 rounded-3xl mx-11">
                <div className="flex flex-col p-8 gap-4 text-white text-center w-full justify-center items-center">
                    <h1 className="font-bold text-[32px] font-old">Frequently Asked Questions</h1>
                    <p className="text-[16px] font-normal lg:w-[796px]">Have questions? Check out our FAQs for quick answers or reach out for further assistance — we're here to help!</p>
                </div>
                <div className="grid grid-cols-1 mx-auto w-11/12 gap-4 mb-[60px]">
                    <div className="collapse collapse-plus bg-white" >
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is Chill Gamer?</div>
                        <div className="collapse-content">
                            <p>Chill Gamer is a user-friendly platform where gamers can explore and share reviews of their favorite games. Our goal is to provide a chill and interactive experience for game enthusiasts.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white" >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">How can I write a game review?</div>
                        <div className="collapse-content">
                            <p>To write a review, simply log in to your Chill Gamer account, navigate to the "Add Review" page, and fill out the form with details such as the game title, description, rating, genre, and cover image. Once submitted, your review will be visible to other users.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white" >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Can I update or delete my reviews?</div>
                        <div className="collapse-content">
                            <p>Yes, you can! Navigate to the "My Reviews" page, where you'll see options to update or delete the reviews you’ve submitted.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white" >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What is the Game Watchlist feature?</div>
                        <div className="collapse-content">
                            <p>The Game Watchlist allows you to save and manage a list of games you’re interested in from the review details page. You can view and organize your watchlist on the dedicated "My Watchlist" page.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white" >
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Is Chill Gamer free to use?</div>
                        <div className="collapse-content">
                            <p>Yes, Chill Gamer is completely free! You can browse reviews, post your own, and enjoy all the features of the platform without any cost.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Faqs;