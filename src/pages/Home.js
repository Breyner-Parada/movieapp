import React from 'react';
import { Link } from 'react-router-dom';
import {RiMovie2Line} from 'react-icons/ri';
import {BsSearch} from 'react-icons/bs';
import { Loading } from '../Components/Loading';
import axios from 'axios';
import '../styles/Home.css';

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


// const API_URL = 'https://api.themoviedb.org/3?api_key=09709bcb90d7e2d76a129709c7bddd9d'

export const Home = () => {

  const [movie, setMovie] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState([]);
  const [value, setValue] = React.useState('');

  async function searchMovies () {
    const {data} = await api('/search/movie', {
      params: {
        query: value
      }
    });
    setSearch(data.results);
    console.log(data);
  }

  React.useEffect(() => {
    if(loading){
      setTimeout(
        async function trendingMoviesPreview() {
          const {data} = await api('/trending/movie/day');
          setMovie(data.results);
          console.log(data);
          setLoading(false);
        }, 1000
        )
      }
    async function categoriesMoviesPreview() {
      const {data} = await api('/genre/movie/list');
      setCategories(data.genres);
    }
    categoriesMoviesPreview();
  }, [loading])

if(!value){
  return (
    <div className='Body-home' >
      <div className='Home-header'>
        <div className='Main-title'>
          <h1 className='Title'>
              <RiMovie2Line />MoviesRoom
          </h1>
        </div>
        <div className='Input-container'>
          <input className='Search' placeholder='Search' 
          value={value} 
          onChange={(event) => setValue(event.target.value)}  />
          <button
          className='Button-search'
          onClick={searchMovies}
          >
            <BsSearch />
          </button>
        </div>
          
      </div>

      <h2 className='Trending'>Trending</h2>
      <div className='Loading'>
        {loading && <Loading />}
      </div>
      
      <article className='Container-slider'>
        {movie.map(element => (
          <div className='Card'>
            <img className='Face Front' alt={element.original_title} src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} />
          </div>
        ))}
      </article>

      <h2 className='Title-categories'>Categories</h2>
      <section className='Categories'> 
        <ul className='Categories-list'>
          {categories.map(element => (
            <Link to={`/${element.name}`}>
              <li id={element.id}>
                {element.name}
              </li>
            </Link>

          ))}  
        </ul>       
          
      </section>

    </div>
  )
}
else{
  return (
    <div className='Body-home'>
      <div className='Home-header'>
        <div className='Main-title'>
          <h1 className='Title'>
              <RiMovie2Line />MoviesRoom
          </h1>
        </div>
        <div className='Input-container'>
          <input className='Search' placeholder='Search' 
          value={value} 
          onChange={(event) => setValue(event.target.value)}  />
          <button
          className='Button-search'
          onClick={searchMovies}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <div className='Search-img'>
        {search.map(element =>(
          <img className='Face Front' alt={element.original_title} src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} />
        ))}
      </div>
    </div>
  )
}
  
}