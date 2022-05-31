import React from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import '../styles/NotFound.css';

export const NotFound = () => {
  return (
    <div className='Body-notfound'>
      
      <div className='Notfound-arrow'>
          <Link to="/movieapp">
            <IoIosArrowBack />
          </Link>
      </div>

      <section className='Section'>

        <div className='Section-left'>
          <p>Page NOT Found</p>
          <p>You must be lost</p>
          <p>Please go back to home or try anything else</p>
        </div>

        <div className='Section-right'>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>

      </section>


    </div>
  )
}
