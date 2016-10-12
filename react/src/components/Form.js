import React from 'react';

const Form = props => {
  return(
    <div className="row search">
        <form>
          <div className="input-field col s3">
            <input type="text" name="city" placeholder="Enter city here..." onChange={props.handleCityChange}/>
          </div>
          <div className="input-field col s3">
            <input type="text" name="state" placeholder="Enter state here..." onChange={props.handleStateChange}/>
          </div>
          <div className="input-field col s3">
            <input type="text" name="range" placeholder="Enter range (in miles) here..." onChange={props.handleRangeChange}/>
          </div>
          <div className="input-field col s3">
            <select name="type" className="browser-default" onChange={props.handleTypeChange}>
              <option value="food">Food</option>
              <option value="museum">Learn</option>
              <option value="nature">Nature</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <div className="row">
            <div className="col s2 offset-s5 center-align">
              <input className="btn" type="submit" value="Submit" name="Submit" onClick={props.handleSubmit}/>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Form;
