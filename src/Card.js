import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className = 'tc bg-navy dib br4 pa3 ma3 grow bw2 shadow-5 light-gray'>
            <img alt='n/a' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;