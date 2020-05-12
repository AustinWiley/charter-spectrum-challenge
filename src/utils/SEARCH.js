export default {
    filterStates: function (state, data) {
      const filteredByState = [];
      data.map(item => {
        // console.log(item)
        // console.log(state)
        if (item.state === state) {
          console.log(item.state)
          console.log(item.genre)
          filteredByState.push(item)
        }
      })
      return filteredByState
    },
    filterGenres: function (genre, data) {
      const filteredByGenres = [];
      data.map(item => {
        // console.log(item.state)
        // console.log(item.genre)
        if (item.genre.includes(genre)) {
          console.log(item.genre)
          filteredByGenres.push(item)
        }
      })
      return filteredByGenres
    },
    filterInput: function (input, data) {
      const filteredByGenres = [];
      data.map(item => {
        // console.log(item.state)
        // console.log(item.genre)
        if (item.genre.toLowerCase().includes(input) || item.name.toLowerCase().includes(input) || item.city.toLowerCase().includes(input)) {
          console.log(item.genre)
          filteredByGenres.push(item)
        }
      })
      return filteredByGenres
    }
  };
  
  
  