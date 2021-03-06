import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state: "",
      range: "",
      type: "food",
      destinations: [],
      component: "search"
    };
    this.returnToSearch = this.returnToSearch.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.deleteLastDestination = this.deleteLastDestination.bind(this);
    this.switchDestination = this.switchDestination.bind(this);
  }

  handleCityChange(event) {
    let newCity = event.target.value;
    this.setState({city: newCity});
  }

  handleStateChange(event) {
    let newState = event.target.value;
    this.setState({ state: newState});
  }

  handleRangeChange(event) {
    let newMileRange = event.target.value;
    let metersPerMile = 1609.34;
    let newMeterRange = newMileRange * metersPerMile;
    this.setState({ range: newMeterRange })
  }

  handleTypeChange(event) {
    let newType= event.target.value;
    this.setState({ type: newType })
  }

  returnToSearch(event) {
    this.setState({ component: "search" })
  }

  getData() {
    $.ajax({
        method: "POST",
        url: "/yelp/data",
        data: {type: this.state.type, range: this.state.range, state: this.state.state, city: this.state.city}
      })
      .done(data => {
        this.setState({
          destinations: this.state.destinations.concat(data),
          component: "list"
        });
      })
  }

  deleteLastDestination() {
    if (this.state.destinations.length === 1){
      this.setState({destinations: []})
    } else {
      this.setState( this.state.destinations.pop() )
    }
  }

  switchDestination() {
    $.ajax({
        method: "POST",
        url: "/yelp/data",
        data: {type: this.state.type, range: this.state.range, state: this.state.state, city: this.state.city}
      })
      .done(data => {
        this.deleteLastDestination();
        this.setState({
          destinations: this.state.destinations.concat(data),
          component: "list"
        });
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getData();
  }

  render () {

    let chooseComponent = () => {
      if (this.state.component === "search") {
        return (
          <Form
            handleStateChange={this.handleStateChange}
            handleCityChange={this.handleCityChange}
            handleRangeChange={this.handleRangeChange}
            handleTypeChange={this.handleTypeChange}
            handleSubmit={this.handleSubmit}
            />
        )
      } else {
          return (
            <List
              getData={this.getData}
              switchDestination={this.switchDestination}
              data={this.state.destinations}
              />
          )
        }
    }

    return(
      <div>
        <Menu
          returnToSearch={this.returnToSearch}
          component={this.state.component}
          />
        {chooseComponent()}
      </div>
      )
    }
}

export default App;
