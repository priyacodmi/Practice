import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {
    const [text, setText] = useState("");
    const [searchMovie, setSearchMovie] = useState([]);
    const [show, setShow] = useState("");
    const navigte = useNavigate();

    const getShow = () => {
        document.getElementById("input").addEventListener('keypress', (event) => {
            const value=document.getElementById("input").value;
            if (event.key == "Enter") {
                window.localStorage.clear();
                localStorage.setItem("query", value);
                navigte('/search');
                window.location.reload();
            }
        });
    }


    useEffect(() => {
        const getData = setTimeout(() => {
            axios
                .get(`https://api.tvmaze.com/search/shows?q=${text}`)
                .then((response) => {
                    setSearchMovie(response.data);
                });
        }, 2000);

        //return () => clearTimeout(getData);
    }, [text]);

    return (
        <div className='searchInput'>
            <input type="search" onChange={(e) => setText(e.target.value)} id="input" onKeyPress={getShow} placeholder='Search your movie here...' />
            {/* <div className='searchedMovie'>
                {searchMovie?.map((el, ind) => (
                    <div key={ind} className="movie">
                        <div className='imageDiv'>
                            <img src={el.show?.image?.medium} alt="moviepic" />
                        </div>
                        <div className='moviename'>
                            {el.show?.name}
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}