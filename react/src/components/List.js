import React, { Component } from 'react';
import Destination from './Destination'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
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
        getData={this.props.getData}
        />
      )
    });


  return(
    <div className="row">
      <div className="col s12">
        {destinations}
      </div>
      <div className="col s8 offset-s2 center-align">
        <button className="btn" onClick={this.props.getData}>Next Destination</button>
        <button className="btn" onClick={this.props.switchDestination}>Switch New Destination</button>
      </div>
    </div>
    )
  }
}

export default List;
