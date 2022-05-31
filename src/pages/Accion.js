import React from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import '../styles/Accion.css';
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


export const Accion = () => {

  const [search, setSearch] = React.useState('');
  const [action, setAction] = React.useState([]);
  console.log(search);

  React.useEffect(() =>{
   async function actionMoviesPreview() {
     const {data} = await api("/discover/movie", {
       params: {
         with_genres: 28
       }
     });
     setAction(data.results);
     console.log(data);
   } 
   actionMoviesPreview();

  }, []);

  const filterUsers = React.useMemo(() => 
  action.filter(user => {
                return user.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
            })
    , [action, search]);

  return (
    <div className='Body-action'>

      <div className='Header-action'>
        <div className='Header-arrow'>
          <Link to="/">
            <IoIosArrowBack />
          </Link>
        </div>
        <input className='Action-search' placeholder='Filter' value={search} onChange={(event) => setSearch(event.target.value)}  />
      </div>
      
      <section className='Action-list'>
        {filterUsers.map(element => (
          <div className='Action-container'>
            <div className='Action-info'>
              <p><b>Title:</b> {element.title}</p>
              <p><b>Overview:</b> {element.overview}</p>
              <p><b>Popularity:</b> {element.popularity}</p>
              <p><b>Release date:</b> {element.release_date}</p>
              <p><b>Vote average:</b> {element.vote_average}⭐</p>   
            </div>
            <div className='Action-container-img'>
              <img className='Action-img' alt={element.title}src={`https://image.tmdb.org/t/p/w300${element.poster_path}`}/>
            </div>
          </div>
        ))}
      </section>

      <div className='No-result'>
        {!filterUsers.length && <p>No hay resultados para {search.toUpperCase()}</p>}
      </div>

  </div>

  )
}
