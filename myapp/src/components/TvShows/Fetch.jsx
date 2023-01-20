import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import './show.css';
import { Card } from './Card';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
export const FetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [comedyList, setComedyList] = useState([]);
    const [crimeList, setCrimeList] = useState([]);
    const [dramaList, setDramaList] = useState([]);
    const [romanceList, setRomanceList] = useState([]);

    const getAllMovies = async () => {
        try {
            const res = await axios.get(`https://api.tvmaze.com/shows?page=1`);
            const moviesList = res.data;
            //console.log(moviesList);
            let arr1 = moviesList.filter((movie) => {
                if (movie.genres.includes("Crime")) {
                    return movie;
                }
            });
            setCrimeList(arr1);
            let arr2 = moviesList.filter((movie) => {
                if (movie.genres.includes("Comedy")) {
                    return movie;
                }
            });
            setComedyList(arr2);
            let arr3 = moviesList.filter((movie) => {
                if (movie.genres.includes("Drama")) {
                    return movie;
                }
            });
            setDramaList(arr3);

            let arr4 = moviesList.filter((movie) => {
                if (movie.genres.includes("Romance")) {
                    return movie;
                }
            });
            setRomanceList(arr4);

            setMovies(moviesList);
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <>
            <div className='movieContainer'>

                <h2>Comedy Shows</h2>
                <div className='comedyMovieContainer'>
                    {
                        comedyList?.map((movie, ind) => (
                            <Card movie={movie} key={ind}/>
                        ))
                    }
                </div>
            </div>
            <div className='movieContainer'>
                <h2>Drama Shows</h2>
                <div className='dramaMovieContainer'>
                    {
                        dramaList?.map((movie, ind) => (
                            <Card movie={movie} key={ind}/>
                        ))
                    }
                </div>
            </div>
            <div className='movieContainer'>
                <h2>Crime Shows</h2>
                <div className='crimeMovieContainer'>
                    {
                        crimeList?.map((movie, ind) => (
                            <Card movie={movie} key={ind}/>
                        ))
                    }
                </div>
            </div>
            <div className='movieContainer'>
                <h2>Romance Shows</h2>
                <div className='romanceMovieContainer'>
                    {
                        romanceList?.map((movie, ind) => (
                            <Card movie={movie} key={ind}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}