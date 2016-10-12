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
      data: [],
      component: "form"
    }
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
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

  getData() {
    $.ajax({
        method: "POST",
        url: "/yelp/data",
        data: {type: this.state.type, range: this.state.range, state: this.state.state, city: this.state.city}
      })
      .done(data => {
        this.setState({
          data: data,
          component: "list"
        })
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getData();
  }

  render () {

    let chooseComponent = () => {
      if (this.state.component === "form") {
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
              data={this.state.data}
              />
          )
        }
    }

    return(
      <div>
        <Menu />
        {chooseComponent()}
      </div>
      )
    }
}

export default App;
