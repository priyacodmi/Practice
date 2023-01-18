import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

export const SearchInput=()=>{
    const [text,setText]=useState("");
    const [searchMovie,setSearchMovie]=useState([]);
    const inputRef = useRef();
    const navigte=useNavigate();

    // function onKeyDown(event) {
    //     localStorage.clear();
    //     if(event.key=="Enter"){
    //         navigte('/search');
    //         localStorage.setItem("searchMovie", JSON.stringify(searchMovie));
    //     }
    //   }

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

    // useEffect(()=>{
    //     document.body.addEventListener('keypress', onKeyDown);
    // },[searchMovie]);

    return(
        <div className='searchInput'>
           <input type="search" onChange={(e)=>setText(e.target.value)} ref={inputRef} placeholder='Search your movie here...' />
           <div className='searchedMovie'>
            {searchMovie?.map((el,ind)=>(
                <div key={ind} className="movie">
                    <div className='imageDiv'>
                        <img src={el.show?.image?.medium} alt="moviepic" />
                    </div>
                    <div className='moviename'>
                        {el.show?.name}
                    </div>
                </div>
            ))}
           </div>
        </div>
    )
}