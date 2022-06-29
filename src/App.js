import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import searchIcon from './searchIcon.svg';


const API_URL = "http://www.omdbapi.com?apikey=90b45e21";



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
        console.log(data.Search);
     setMovies(data.Search);


}
    useEffect(() =>{ 
        searchMovies('Bourne');
    },[])
    return(
       <div className="app">
             <h1>MovieLand</h1>

             <div className="search">
                <input placeholder="Search for movies" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            /> 

            <img src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
             </div>


             { movies?.length > 0 ? (
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
               </div>
                ):(
                    <div className="empty">
                        <h2>No movies to Found</h2>
                    </div>
                )}
             

       </div>
    );
}
export default App;