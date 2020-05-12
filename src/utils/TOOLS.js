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
    }
};