export default {
  chunk: function (arr, len) {
    var chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  },
  getGenres: function (data) {
    //get a list of all genres and get rid of the duplicates
    let newArr = ['All Genres']
    data.map(item => {
      const items = item.genre.split(',')
      newArr = newArr.concat(items)
    })
    const newGenres = [...new Set(newArr)]
    return newGenres;
  }
};