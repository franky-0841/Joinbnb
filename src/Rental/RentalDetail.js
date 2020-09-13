import React from 'react'

export class RentalDetail extends React.Component{
    render(){
        return(
           <>
            <h1>hello {this.props.match.params.id}</h1>
           </>
        )
    }
}