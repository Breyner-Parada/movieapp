import React from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/Categories.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    api_key: process.env.REACT_APP_API_KEY_MOVIE
  }
})


export const Categories = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [action, setAction] = React.useState([]);


  React.useEffect(() =>{
   async function actionMoviesPreview() {
     const {data} = await api("/discover/movie/", {
       params: {
         with_genres: id,
         page: page
       }
     });
     if (page > 1) {
      setAction([...action, ...data.results]);
    } else {
      setAction(data.results);
      setPage(1);
    }
   } 
   actionMoviesPreview();

  }, [id, page]);

  const filterUsers = React.useMemo(() => 
  action.filter(user => {
                return user.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
            })
    , [action, search]);

  return (
    <div className='Body-action'>

      <div className='Header-action'>
        <div className='Header-arrow'>
          <Link to={-1}>
            <IoIosArrowBack />
          </Link>
        </div>
        <input className='Category-search' placeholder='Filter' value={search} onChange={(event) => setSearch(event.target.value)}  />
      </div>
      
      <section className='Category-list'>
        {filterUsers.map(element => (
            <div className='Category-container-img'>
              <img className='Category-img' style={{backgroundColor: "blue"}} alt={element.title}src={`https://image.tmdb.org/t/p/w300${element.poster_path}`}
              onClick={() => navigate(`/movieapp/movie/${element.id}`)}
              />
            </div>
        ))}
      </section>
      <div className='Primary-button'>
        <button 
        className='Button-show-more'
        onClick ={() => setPage(page + 1)}
        > Show more </button>
      </div>
      

      <div className='No-result'>
        {!filterUsers.length && <p>No hay resultados para {search.toUpperCase()}</p>}
      </div>

  </div>

  )
}
