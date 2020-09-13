import React from 'react'
import { Link } from 'react-router-dom';



export function RentalCard(props){
    const rental = props.rental;

    return(
        <div class={props.colNum}>
           <Link to={`/rentals/${rental.id}`} className="hvr-grow link">
           <div class='card bwm-card '>
                <img class='card-img-top' src={rental.image} alt=''></img>
                <div class='card-block'>
                    <h6 class='card-subtitle'>{rental.shared ?'shared' :'whole'} {rental.category}&#183; {rental.city}</h6>
                    <h4 class='card-title'>{rental.title}</h4>
                    <p class='card-text'>${rental.dailyRate}per Night &#183; Free Cancelation</p>
                    <a href='' class='card-link'>More Info</a>
                </div>
            </div>
           </Link>
        </div>
    )
}