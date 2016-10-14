import React, { Component } from 'react';
import Destination from './Destination'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render () {
    let destinations = this.props.data.map(destination => {

      return(
        <Destination
        key={destination.id}
        name={destination.name}
        categories={destination.categories}
        image_url={destination.image_url}
        rating={destination.rating}
        review_count={destination.review_count}
        address={destination.address}
        city={destination.city}
        state={destination.state}
        description={destination.description}
        />
      )
    });


  return(
    <div className="row">
      <div className="small-10 small-offset-1 columns">
        {destinations}
      </div>
      <div className="col s4 offset-s4 center-align">
        <button className="btn center-align" onClick={this.props.getData}>Next Destination</button>
      </div>
    </div>
    )
  }
}

export default List;
