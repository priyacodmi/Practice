import React from 'react';


export const Card = ({movie}) => {
    return (
        <div className='movieCard'>
            <div>
                <img src={movie.image.medium} alt="moviepic" />
            </div>
            <div>
                <p>Langauge : {movie.language}</p>
                <p>Show Name : {movie.name}</p>
            </div>
        </div>
    )
}