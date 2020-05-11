import React, { Component } from 'react';

class RestaurantSearch extends Component {
    //set initial state
    state = {
        data: []
      }

      //handle input change
      //filter the data based on user inputs
      //paginate data into pages of 10 items at a time
      //once component did mound make API call and set state with response in alphabetical order
      componentDidMount() {
        console.log('Make Api call')
      }

  render() {
    return (
      <div>
        <h1>Search Restaurants</h1>
        {/* make seach input fields */}
        {/* make pagination buttons */}
        {/* make a table with the data from the API */}
      </div>
    );
  }
}

export default RestaurantSearch;