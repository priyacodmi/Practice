import React from "react";

export const SearchedMovies=()=>{

    const movies=JSON.parse(localStorage.getItem('searchMovie'));
    console.log(movies);
    return(
        <div>
            movie list
        </div>
    )
}