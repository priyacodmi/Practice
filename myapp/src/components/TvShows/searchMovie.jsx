import React from "react";
import './show.css';

export const SearchedMovies=()=>{

    const movies=JSON.parse(localStorage.getItem('searchMovie'));
    console.log(movies);

    return(
        <div className='movieContainer'>
            {
                movies?.map((movie,ind)=>(
                    <div className='movieCard' key={ind}>
                    <div>
                        <img src={movie.show?.image?.medium} alt="moviepic" />
                    </div>
                    <div>
                        <p>Langauge : {movie?.show?.language}</p>
                        <p>Show Name : {movie?.show?.name}</p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}