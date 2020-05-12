export default {
  chunk: function (arr, len) {

    var chunks = [],
      i = 0,
      n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    // console.log('this is the chunks:')
    // console.log(chunks)
    return chunks;
  },
  getGenres: function (data) {
    //get a list of all genres and get rid of the duplicates
    let newArr = ['All Genres']
    data.map(item => {
      const items = item.genre.split(',')
      // console.log(items)
      newArr = newArr.concat(items)
    })
    const newGenres = [...new Set(newArr)]
    console.log('=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-')
    console.log(newGenres)
    return newGenres;
    // console.log(newArr)
  }
};