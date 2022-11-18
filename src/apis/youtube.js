import axios from "axios";

const KEY = 'AIzaSyDsiAFuUqqp7TbjyVF8h3ksFHKPq6BMHjw';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'

    }
});

