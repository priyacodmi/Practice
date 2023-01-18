import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './show.css';

export const FetchMovies=()=>{
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    const getAllMovies=async()=>{
            try {
                const res= await axios.get(`https://api.tvmaze.com/shows?page=1`);
                const moviesList=res.data;
                setMovies(moviesList);
                setLoading(false);
            } catch (error) {
                console.log("error",error);
            }
    }

    useEffect(()=>{
        getAllMovies();
    },[]);

    return(
      <div className='movieContainer'>
        {
            movies?.map((movie,ind)=>(
                <div className='movieCard' key={ind}>
                    <div>
                        <img src={movie.image.medium} alt="moviepic" />
                    </div>
                    <div>
                        <p>Langauge : {movie.language}</p>
                        <p>Show Name : {movie.name}</p>
                    </div>
                </div>
            ))
        }
      </div>
    )
}