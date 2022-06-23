import React from 'react';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../styles/SearchMovie.css';


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

export const SearchMovie = () => {
    const navigate = useNavigate();
    const { query } = useParams();
    const [value, setValue] = React.useState('');
    const [search, setSearch] = React.useState([]);
    const [page, setPage] = React.useState(1);
    React.useEffect(() =>{
        async function searchMovies () {
            const {data} = await api('/search/movie', {
              params: {
                query: query,
                page: page
              }
            });
            if (query === value && page > 1) {
              setSearch([...search, ...data.results]);
            } else {
                setSearch(data.results);
                setPage(1);
            }
        }
        searchMovies();
    },[page, query, value]);
    
  return (
    <div className='Body-search'>
        <div className='Search-header'>
            <div className='Header-arrow'>
                <Link to={-1}>
                    <IoIosArrowBack />
                </Link>
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


        <div className='Search-container-img'>
            {search.map(element =>(
              <img className='Search-img' alt={element.original_title} src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} 
              onClick={() => navigate(`/movieapp/movie/${element.id}`)}
              />
            ))}
        </div>
        
        <div className='Primary-button'>
            <button 
            className='Button-show-more'
            onClick ={() => setPage(page + 1)}
            > Show more </button>
        </div>
    </div>
  )
}
