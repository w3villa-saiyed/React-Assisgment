import '../public/MovieListingPage.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MoviesCard(props) {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    // const [openCardIndex, setOpenCardIndex] = useState(null);
    const [searchCategory, setSearchCategory] = useState('');
    const fetchData = async (category) => {
        const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b9f5851977msh40af79cbb6e9ce9p110124jsnd6aa5a44f6de',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const result = await response.json();
            console.log(result.d);
            setMovies(result.d);
        } catch (error) {
            console.error(error);
        }
    };

    console.log("Check==>", movies.length)

    useEffect(() => {
        // Initial fetch with a default category (e.g., 'horror')
        fetchData('happy');
    }, []);


    const handleSearchInputChange = (e) => {
        const inputText = e.target.value;
        setSearchCategory(inputText);

        // Split the entered text into words
        // const words = inputText.split(' ');

        // // Make an API call for each word
        // words.forEach((word) => {
        //     fetchData(word);
        // });
    };

    const handleSearchButtonClick = () => {
        // Perform API call with the entered category
        setTimeout(() => {
            fetchData(searchCategory);
        }, 1000);
    };

    const handleSingleCard = (index, movie) => {
        // Navigate to the movie details page with the movie information as state
        navigate(`/movie/${index}`, { state: { movieInfo: movie, email: props.email } });
    };


    return (
        <div>
            <section>
                <div class="filter-search-box">
                    <div class="filters-box">
                        <div class="all-filters filters">
                            All formats <i class="fa fa-angle-down"></i>
                        </div>
                        <div class="category-filters filters">
                            Coming soon
                        </div>
                    </div>
                    <div className="search-filters">
                        <input
                            type="text"
                            placeholder="Search by Category..."
                            value={searchCategory}
                            onChange={handleSearchInputChange}
                            // Uncomment the line below if you want to trigger the API call on the 'Enter' key press
                            onKeyUp={(e) => e.key === 'Enter' && handleSearchButtonClick()}
                        />
                        <button id='signout' onClick={handleSearchButtonClick}><i className="fa fa-search"></i></button>
                    </div>
                    <div class="search-bar">
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="movie-card-section">
                    {movies && movies.length === 0 ? (
                        <p id='no-movie'>No movies found...</p>
                    ) : (
                        movies.map((movie, index) => (
                            <div class="card" onClick={() => handleSingleCard(index, movie)} key={index}>
                                <img src={movie.i.imageUrl} alt="" aria-hidden="true" />
                                <div class="card-content">
                                    <p class="movie-name">{movie.l}</p>
                                    <div class="movie-info">
                                        <p class="time">11:30 <span>14:45 16:05</span> 18:40 21:00</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div class="show">
                    <div class="show-bar">
                        <div class="bar"></div>
                    </div>
                    {/* <button>Show more</button> */}
                </div>
            </section>
        </div>
    );
}


export default MoviesCard;