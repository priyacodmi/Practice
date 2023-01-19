import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import './show.css';

export const FetchMovies=()=>{
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    var [comedyList,setComedyList]=useState([]);
    var [crimeList,setCrimeList]=useState([]);
    var [dramaList,setDramaList]=useState([]);

    const getAllMovies=async()=>{
            try {
                const res= await axios.get(`https://api.tvmaze.com/shows?page=1`);
                const moviesList=res.data;
                //console.log(moviesList);
                moviesList.map((movie)=>{
                    if(movie.genres.includes("Crime")){
                        setCrimeList(...crimeList,movie);
                    }
                });

                moviesList.map((movie)=>{
                    if(movie.genres.includes("Comedy")){
                        setComedyList([...comedyList,movie]);
                    }
                });

                moviesList.map((movie)=>{
                    if(movie.genres.includes("Drama")){
                        setDramaList([...dramaList,movie]);
                    }
                });

                setMovies(moviesList);
                setLoading(false);
            } catch (error) {
                console.log("error",error);
            }
    }

    console.log(comedyList)
    console.log(crimeList)
    console.log(dramaList)

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