import axios from "axios";
const BASEURL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const API_KEY = 'Api-Key q3MNxtfep8Gt'

export default {
  search: function () {
    return (
      axios.get(BASEURL, {
        headers: {
          Authorization: API_KEY
        }
      })
    )
  }
};