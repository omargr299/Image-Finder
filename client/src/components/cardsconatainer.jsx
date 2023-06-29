import React from "react";
import {useSelector} from 'react-redux'


import {SearchCard} from "./searchcard";

export function CardsContainer(props){

    const ps = useSelector(state => state.photos);


    return(
        <section className="card-section d-inline-block ml-auto mr-auto">
            <div id="CardsContainer " className="card-container ">
                {
                    typeof(ps.photos[0])!='undefined' 
                    ? ps.photos.map( (photo,id)=>  <SearchCard key={id} photo={photo}></SearchCard>) 
                    : console.log("no hay")
                }
            </div>
        
        </section>
    );
}