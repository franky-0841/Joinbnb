import React from 'react'
import { RentalCard } from './RentalCard'

export class RentalList extends React.Component{
    constructor(){
        super();
        this.state = {
            rentals:  [{
                id: 1,
                title: "Central Apartment",
                city: "New York",
                street: "Times Sqaure",
                category: "apartment",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 3,
                description: "Very nice apartment",
                dailyRate: 34,
                shared: false,
                createdAt: "24/12/2017"
              },
              {
                id: 2,
                title: "Central Apartment 2",
                city: "San Francisco",
                street: "Main street",
                category: "condo",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 2,
                description: "Very nice apartment",
                dailyRate: 12,
                shared: true,
                createdAt: "24/12/2017"
              },
              {
                id: 3,
                title: "Central Apartment 3",
                city: "Bratislava",
                street: "Hlavna",
                category: "condo",
                image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 2,
                description: "Very nice apartment",
                dailyRate: 334,
                shared: true,
                createdAt: "24/12/2017"
              },
              {
                id: 4,
                title: "Central Apartment 4",
                city: "Berlin",
                street: "Haupt strasse",
                category: "house",
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 9,
                description: "Very nice apartment",
                dailyRate: 33,
                shared: true,
                createdAt: "24/12/2017"
            },
            {
                id: 4,
                title: "Central Apartment 4",
                city: "Berlin",
                street: "Haupt strasse",
                category: "house",
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 9,
                description: "Very nice apartment",
                dailyRate: 33,
                shared: true,
                createdAt: "24/12/2017"
            },
            {
                id: 4,
                title: "Central Apartment 4",
                city: "Berlin",
                street: "Haupt strasse",
                category: "house",
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 9,
                description: "Very nice apartment",
                dailyRate: 33,
                shared: true,
                createdAt: "24/12/2017"
            },
            {
                id: 4,
                title: "Central Apartment 4",
                city: "Berlin",
                street: "Haupt strasse",
                category: "house",
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 9,
                description: "Very nice apartment",
                dailyRate: 33,
                shared: true,
                createdAt: "24/12/2017"
            },{
                id: 4,
                title: "Central Apartment 4",
                city: "Berlin",
                street: "Haupt strasse",
                category: "house",
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                bedrooms: 9,
                description: "Very nice apartment",
                dailyRate: 33,
                shared: true,
                createdAt: "24/12/2017"
            }]
        }
    }
    renderRentals(){
        return this.state.rentals.map((rental,index) =>{
            return <RentalCard 
                    key={index} 
                    rental={rental} 
                    colNum="col-md-2 col-xs-6 my-3"/>
        }
        )
    }
    render(){
        return(
            <section id='rentalListing' className="px-4 py-0">
                {/* <h1 class='page-title'>Your Home All Around the World</h1> */}
                <div class='row'>
                {this.renderRentals()}
                </div>
            </section>
        )
    }
}