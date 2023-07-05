import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=a01ee8a4';

const App = () => {

    const movie1 = 
        {
            "Title": "Evangelion: 2.0 You Can (Not) Advance",
            "Year": "2009",
            "imdbID": "tt0860906",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzlhNzQ3ZjUtNzFkMS00ZWNlLThmNGItMmMyNmE1NDcwYzU3XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg"
        }
    

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search)
            ;
    }

    useEffect(() => {
        searchMovies('Evangelion')
    }, []);

    return (
        <div className='app'>
            <h1>GetFlix</h1>
            <div className='search'>
                <input
                placeholder='Search for movies'
                value='Eva'
                onChange={() => {}}/>
                <img src={SearchIcon} alt='search'
                onClick={() => {}} />
            </div>
        <div className='container'>
            <div className='movie'>
            <p>{movie1.Year}</p>
            </div>
            <div>
                <img src={movie1.Poster} alt={movie1.title} />
            </div>
        </div>

        </div>
    );
}

export default App;
