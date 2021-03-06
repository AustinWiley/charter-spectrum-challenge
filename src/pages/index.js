import React, {
  Component
} from 'react';
import API from '../utils/API';
import TOOLS from '../utils/TOOLS';
import SEARCH from '../utils/SEARCH';
import Table from '../components/Table';
import SearchInput from '../components/SearchInput';
import SearchSelector from '../components/SearchSelect';

class RestaurantSearch extends Component {
  //set initial state
  state = {
    data: [],
    filteredData: [],
    pages: 0,
    pageIndex: 0,
    states: ['All States', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
    genres: [],
    searchActive: true,
    searchName: "",
    stateActive: true,
    stateName: "All States",
    genreActive: true,
    genreName: "All Genres",
  }

  //handle input change
  handleInputChange = event => {
    event.preventDefault()
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value,
      pageIndex: 0
    }, function () {
      this.filterData();
    });
  };

  //handle checkbox change
  handleCheckboxChange = event => {
    const {
      name,
      checked
    } = event.target;
    this.setState({
      [name]: checked,
      pageIndex: 0
    }, function () {
      this.filterData();
    });
  };

  //reset state if reset button is pressed
  resetSearch = event => {
    this.setState({
      pageIndex: 0,
      searchActive: true,
      searchName: "",
      stateActive: true,
      stateName: "All States",
      genreActive: true,
      genreName: "All Genres",
    }, function () {
      this.filterData();
    });
  };

  //filter the data based on user inputs
  filterData() {
    let data = this.state.data
    if (this.state.stateActive && this.state.stateName !== "All States") {
      const filteredData = SEARCH.filterStates(this.state.stateName, data)
      data = filteredData
    }
    if (this.state.genreActive && this.state.genreName !== "All Genres") {
      const filteredData = SEARCH.filterGenres(this.state.genreName, data)
      data = filteredData
    }
    if (this.state.searchActive && this.state.searchName !== "") {
      const filteredData = SEARCH.filterInput(this.state.searchName.toLowerCase(), data)
      data = filteredData
    }
    //put data in groups of 10 for pagination and set state
    this.chunkData(data)
  }

  //go to the next slide
  nextSlide = event => {
      var slideCount = this.state.pageIndex + 1;
      if (slideCount >= this.state.filteredData.length ) {this.setState({ pageIndex: 0})}
      else if (slideCount <= this.state.filteredData.length -1 ) {this.setState({ pageIndex: slideCount})};
    };

  //go to the previous slide
  prevSlide = event => {
    var slideCount = this.state.pageIndex - 1;
    if (slideCount < 0) {
      this.setState({ pageIndex: this.state.filteredData.length -1})
    }
    else if (slideCount <= this.state.filteredData.length) {
      this.setState({ pageIndex: slideCount})
    };
  };

  //break up data in to groups of ten for pagination
  chunkData(arr) {
    const ten = TOOLS.chunk(arr, 10);
    this.setState({
      filteredData: ten
    })
  }

  //once component did mound make API call and set state with response in alphabetical order
  componentDidMount() {
    API.search()
      .then(res => {
        const genres = TOOLS.getGenres(res.data)
        const sortedData = res.data.sort(function (a, b) {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a < b ? -1 : a > b ? 1 : 0;
        });
        this.setState({
          data: sortedData,
          genres: genres
        }, this.chunkData(sortedData))
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Search Restaurants</h1>
        <div className='searchGroup'>
        <SearchInput
          title={'Search: '}
          checkboxName={'searchActive'}
          checkboxValue={this.state.searchActive}
          name={'searchName'}
          value={this.state.searchName}
          placeholder={'(Name, City or Genre)'}
          onChange={this.handleInputChange}
          onCheckbox={this.handleCheckboxChange}
        />
        <SearchSelector
          title={'State: '}
          checkboxName={'stateActive'}
          checkboxValue={this.state.stateActive}
          name={'stateName'}
          value={this.state.stateName}
          onChange={this.handleInputChange}
          onCheckbox={this.handleCheckboxChange}
          options={this.state.states}
        />
        <SearchSelector
          title={'Genre: '}
          checkboxName={'genreActive'}
          checkboxValue={this.state.genreActive}
          name={'genreName'}
          value={this.state.genreName}
          onChange={this.handleInputChange}
          onCheckbox={this.handleCheckboxChange}
          options={this.state.genres}
        />
        <button onClick={this.resetSearch}>Reset Search</button>
        </div>
        <div className="paging">
          <a href="#0" className="prev" onClick={this.prevSlide}>&#10094;</a>
          <p>{"Page: " + (parseInt(this.state.pageIndex) + 1)  + " / " + this.state.filteredData.length}</p>
          <a href="#0" className="next" onClick={this.nextSlide}>&#10095;</a>
        </div>
        <Table data={this.state.filteredData[0] ? this.state.filteredData[this.state.pageIndex] : [] } />
      </div>
    );
  }
}

export default RestaurantSearch;