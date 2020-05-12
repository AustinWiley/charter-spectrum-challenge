import React, { Component } from 'react';
import API from '../utils/API';

class RestaurantSearch extends Component {
    //set initial state
    state = {
        data: [],
      }




      //handle input change
      //filter the data based on user inputs
      //paginate data into pages of 10 items at a time
      //once component did mound make API call and set state with response in alphabetical order
      componentDidMount() {
        console.log('making API call')
        API.search()
          .then(res => {
            console.log(res);
            const sortedData = res.data.sort( function(a, b) {
              a = a.name.toLowerCase();
              b = b.name.toLowerCase();
              return a < b ? -1 : a > b ? 1 : 0;
            });
    
            // var ten = this.chunk(sortedData, 10);
            // this.setState({ data: res.data})
            this.setState({ data: sortedData}, console.log(sortedData))
          })
          .catch(err => console.log(err));
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