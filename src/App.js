import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import './App.css';
import searchIcon from './searchIcon.svg';


const API_URL = "http://www.omdbapi.com?apikey=90b45e21";

const movie1 = 
{
    "Title": "Don't Worry, We'll Think of a Title",
    "Year": "1966",
    "imdbID": "tt0060332",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzliMjU1MGQtN2VjZC00YmIzLWE4Y2UtOGZkNmM1OWY0ODkwXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
}



const App = () => {
const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`)
    const data = await response.json();

    console.log(data.Search);


}
    useEffect(() =>{
        searchMovies('Spiderman');
    },[])
    return(
       <div className="app">
             <h1>MovieLand</h1>

             <div className="search">
                <input placeholder="Search for movies" 
                value="Superman" 
                onChange={() => {}}
            />

            <img src={searchIcon}
            alt="search"
            oncClick={() => {}}
            />
             </div>
             <div className="container">
                <MovieCard movie1={movie1}/>
           </div>

       </div>
    );
}
export default App;