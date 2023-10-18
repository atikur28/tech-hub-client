const Features = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl font-semibold text-center">Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mx-2 mt-10">
                <div className="md:w- border py-7 bg-gray-100 rounded">
                    <h2 className="text-xl font-bold text-center mb-2">Opinion Pieces</h2>
                    <p className="text-gray-500 font-medium text-center">Editorial content, industry insights, and thought leadership.</p>
                </div>
                <div className="border py-7 bg-gray-100 rounded">
                    <h2 className="text-xl font-bold text-center mb-2">User Profiles</h2>
                    <p className="text-gray-500 font-medium text-center">Allow users to create profiles with their preferences and interests, helping them customize their experience on your website.</p>
                </div>
                <div className="border py-7 bg-gray-100 rounded">
                    <h2 className="text-xl font-bold text-center mb-2">Member Forums</h2>
                    <p className="text-gray-500 font-medium text-center">Establish a members-only section with exclusive content, discussions, and perks for registered users.</p>
                </div>
                <div className="border py-7 bg-gray-100 rounded">
                    <h2 className="text-xl font-bold text-center mb-2">User-Generated Content</h2>
                    <p className="text-gray-500 font-medium text-center">Encourage users to submit their articles, reviews, and projects for publication on your website.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;