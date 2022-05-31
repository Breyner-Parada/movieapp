import React from 'react'
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    'api_key': '09709bcb90d7e2d76a129709c7bddd9d'
  }
})


export const Search = () => {

  const [search, setSearch] = React.useState([]);
  async function searchMovies() {
    const {data} = await api('/search/movie', {
      params: {
        query: search
      }
    });
    setSearch(data.results);
    console.log(data);
  }
  searchMovies();

  return (
    <div>
      {search.map(element => (
        <p>{element.title}</p>
      ))}
    </div>
  )
}
