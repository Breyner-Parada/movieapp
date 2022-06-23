import React from 'react';
import { Link } from 'react-router-dom';
import {RiMovie2Line} from 'react-icons/ri';
import {BsSearch} from 'react-icons/bs';
import { Loading } from '../Components/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    api_key: process.env.REACT_APP_API_KEY_MOVIE
  }
});




export const Home = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState('');


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
          onClick={() => navigate(`/movieapp/movies/search/${value}`)}
          >
            <BsSearch />
          </button>
        </div>
      </div>

      <h2 className='Title-categories'>Categories</h2>
      <section className='Categories'> 
        <ul className='Categories-list'>
          {categories.map(element => (
            <Link to={`/movieapp/category/${element.name}/${element.id}`}>
              <div className='Circle' id={'id' + element.id}></div>
              <li >
                {element.name}
              </li>
            </Link>
          ))}  
        </ul>       
      </section>

      <h2 className='Trending'>Trending</h2>
      <div className='Loading'>
        {loading && <Loading />}
      </div>
      
      <article className='Container-slider'>
        {movie.map(element => (
          <div className='Card'>
            <img 
            className='Face Front' 
            alt={element.original_title} 
            src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} 
            onClick={() => navigate(`/movieapp/movie/${element.id}`)}
            /> 
          </div>
        ))}
      </article>

    </div>
  )
  
}