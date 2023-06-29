import React from 'react';

export function SearchCard(props){

    return(
        <div className="card d-inline-block m-2" >
            <a href={props.photo.url} target="_blank" rel="noopener noreferrer" className="card-container h-100" >
                <figure class='card-img'>
                    <img src={props.photo.src.medium}  className="card-img-top" alt="..."></img>
                </figure>
                <div className="card-body  p-1">
                    <h5 className="card-title">{props.photo.alt}</h5>
                    <p>Photographer: {props.photo.photographer}</p>
                </div>
            </a>
        </div>
    );
}