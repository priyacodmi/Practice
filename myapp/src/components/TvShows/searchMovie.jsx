import React, { useEffect, useState } from "react";
import axios from "axios";
import './show.css';

export const SearchedMovies = () => {
    const [searchShow, setSearchShow] = useState([]);
    const [value, setValue] = useState("");
    const getShow = async () => {
        try {
            const text = (localStorage.getItem('query'));
            console.log(text)
            setValue(text);
            await axios.get(`https://api.tvmaze.com/search/shows?q=${text}`)
                .then((response) => {
                    console.log(response.data[0]);
                    setSearchShow(response.data[0]);
                });
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getShow();
    }, [value]);

    return (

        <div className="searchShowContainer">
            {
                searchShow == "" ? (
                    <p>Oops show you are searching for is not available 😔</p>
                ) : (
                    <div className="detailDiv">
                        <div className="imageContainer">
                            <img src={searchShow?.show?.image?.medium} alt="show" />
                        </div>
                        <div className="showDetails">
                            <div className="rating">
                                <div>
                                    <h3>{searchShow?.show?.name}</h3>
                                </div>
                                <div className="rating">
                                    <div>
                                        Rating
                                    </div>
                                    <div>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Year {new Date(searchShow?.show?.ended).getFullYear()} | Length {searchShow?.show?.runtime}| Director { }</p>
                                <p>Cost : List Actors name</p>
                            </div>
                            <div>
                                <p style={{ textAlign: "justify" }}>{searchShow?.show?.summary}</p>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>

    )
}