import axios from 'axios';

const fetch = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd7551c6877019bd5087b489d17189f15',
  },
});

const fetcher = (url) => {
  return fetch.get(url).then((res) => res.data);
};

export default fetcher;
