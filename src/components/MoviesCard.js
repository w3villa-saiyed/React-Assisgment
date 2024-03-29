import '../public/MovieListingPage.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function MoviesCard(props) {
    const fallbackImage = 'https://media.istockphoto.com/id/1337214283/vector/realistic-popcorn-cinema-movie-watching-concept-online-filmshow-entertainment-3d-cinematic.jpg?s=612x612&w=0&k=20&c=K22Sg6odsfb0cKfPPsPsTH-KmkV144GxAi9GI1_MIaU=';
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [searchCategory, setSearchCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const { email, loginStatus } = props;


    // Effect to fetch data when page or search category changes
    useEffect(() => {
         // Function to fetch data from the API
    const fetchData = async () => {
        setLoading(true);
        const url = searchCategory
            ? `https://api.themoviedb.org/3/search/movie?query=${searchCategory}&page=${page}`
            : `https://api.themoviedb.org/3/discover/movie?page=${page}`;

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDlmOTJiZjdhYmQ2MDQ1M2Q5MWNkN2ExNjRhYzE4OSIsInN1YiI6IjY1YThmMTQ3MGYwZGE1MDEzOTNjMTFkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.regSLPi_h9ywhQxRYQcYt3B-crVB0TsYG5p-LizOuSw`,
            },
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setMovies((prevMovies) => {
                if (page === 1) {
                    // If it's the first page, replace the existing movies with the fetched movies
                    return data.results;
                } else {
                    // If it's not the first page, append the new movies to the existing list
                    return [...prevMovies, ...data.results];
                }
            });
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

        fetchData();
    }, [page, searchCategory]);


   


    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        const inputText = e.target.value;
        setSearchCategory(inputText);
    };

    // Function to handle search button click
    const handleSearchButtonClick = () => {
        // Perform API call with the entered category
            setPage(1);
            // fetchData(searchCategory, 1);
       
    };

    // Function to handle click on a movie card and navigate to the movie details page
    const handleSingleCard = (index, movie) => {
        // Navigate to the movie details page with the movie information as state
        navigate(`/movie/${index}`, { state: { movieInfo: movie, email: email, loginStatus: loginStatus} });
    };

    // Function to handle "Show more" button click
    const handleShowMore = () => {
        setPage((prevPage) => prevPage + 1);  // Increment the page number
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
                            placeholder="Search movies name..."
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
                <div className="movie-card-section">
                    {loading ? (
                        <p id='no-movie'>Loading...</p>
                    ) : movies.length === 0 ?  (
                        <p id='no-movie'>No movies found...</p>
                    ) : (
                          movies.map((movie, index) => (
                            <div className="card" onClick={() => handleSingleCard(index, movie)} key={index}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" aria-hidden="true" onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop in case the fallback image also fails to load
    e.target.src = fallbackImage; // Set the source to the fallback image
  }} />
                                <div className="card-content">
                                    <p className="movie-name">{movie.title}</p>
                                    <div className="movie-info">
                                        <p className="time">Votes: {movie.vote_count}  ||  {movie.release_date}</p>
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
                    <button id='signout' onClick={handleShowMore}>Show more</button>
                </div>
            </section>
        </div>
    );
}


export default MoviesCard;