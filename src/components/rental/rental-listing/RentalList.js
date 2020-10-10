import React from 'react';
import { RentalCard } from './RentalCard';

export class RentalList extends React.Component {

  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      return (
          <RentalCard key={index}
                      colNum="col-lg-4 col-xl-2 col-md-6 col-sm-6 my-3"
                      rental={rental}/>
        )
    });
  }
  render() {
    return (
      <div className="row">
        {this.renderRentals()}
      </div>
    )
  }
}
