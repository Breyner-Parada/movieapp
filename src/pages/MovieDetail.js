import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import '../styles/MovieDetail.css';

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
  
  export const MovieDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = React.useState([]);
    const [genres, setGenres] = React.useState([]);

     React.useEffect(() =>{
        async function movieDetail() {
            const {data} = await api(`movie/${id}`);
            
            setMovie(data);
            setGenres(data.genres);
            console.log(data);
        } 
        movieDetail();
  }, [id]);

     return(
        <div>
            
            <div className='Header-arrow'>
                <IoIosArrowBack 
                onClick={() => navigate(-1)}
                />
            </div>

            <section className='Movie-list'>
                <div className='Movie-container'>
                    <div className='Movie-container-img'>
                        <img className='Movie-img' alt={movie.title}src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                    </div>
                    <div className='Movie-info'>
                        <p><b>Title:</b> {movie.title}</p>
                        <p><b>Genres:</b>  {genres.map(element => `${element.name} `)}</p>
                        <p><b>Overview:</b> {movie.overview}</p>
                        <p><b>Popularity:</b> {movie.popularity}</p>
                        <p><b>Release date:</b> {movie.release_date}</p>
                        <p><b>Vote average:</b> {movie.vote_average}⭐</p>   
                    </div>
                </div>
            </section>
        </div>
      )

  }
  
