import React from 'react';


const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 br3 pd3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;