import React, {
  Component
} from 'react';
import API from '../utils/API';
import TOOLS from '../utils/TOOLS';
import Table from '../components/Table';

class RestaurantSearch extends Component {
  //set initial state
  state = {
    data: [],
    filteredData: [],
    pages: 0,
    pageIndex: 0
  }




  //handle input change
  //filter the data based on user inputs
  //go to the next slide
  nextSlide = event => {
    console.log("Next stlide")
    console.log(this.state.pageIndex);
    console.log(this.state.pageIndex)
    var slideCount = this.state.pageIndex + 1;
    console.log(slideCount)
    if (slideCount >= this.state.filteredData.length) {
      this.setState({
        pageIndex: 0
      })
    } else if (slideCount <= this.state.filteredData.length - 1) {
      this.setState({
        pageIndex: slideCount
      })
    };
  };

  //go to the previous slide
  prevSlide = event => {
    console.log("prev slide")
    console.log(this.state.pageIndex);
    var slideCount = this.state.pageIndex - 1;
    if (slideCount < 0) {
      this.setState({
        pageIndex: this.state.filteredData.length - 1
      })
    } else if (slideCount <= this.state.filteredData.length) {
      this.setState({
        pageIndex: slideCount
      })
    };
  };

  //break up data in to groups of ten for pagination
  chunkData(arr) {
    const ten = TOOLS.chunk(arr, 10);
    // this.setState({ data: res.data})
    this.setState({
      filteredData: ten
    })
  }

  //once component did mound make API call and set state with response in alphabetical order
  componentDidMount() {
    console.log('making API call')
    API.search()
      .then(res => {
        console.log(res);
        const sortedData = res.data.sort(function (a, b) {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a < b ? -1 : a > b ? 1 : 0;
        });
        this.setState({
          data: sortedData
        }, this.chunkData(sortedData))
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <h1>Search Restaurants</h1>
      {/* make seach input fields */}
      {/* make pagination buttons */}
      <div>
        <a onClick={this.prevSlide}>&#10094;</a>
        <p>{"Page: " + (parseInt(this.state.pageIndex) + 1)  + " / " + this.state.filteredData.length}</p>
        <a onClick={this.nextSlide}>&#10095;</a>
      </div>
      {/* make a table with the data from the API */}
      <Table data={this.state.filteredData[0] ? this.state.filteredData[this.state.pageIndex] : [] } />
    </div>
    );
  }
}

export default RestaurantSearch;