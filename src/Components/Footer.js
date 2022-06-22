import React from 'react';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div className='Footer-container'>
        <div className='Footer'>
            <div className='Footer-name'>{ "{ Breyner Parada. } ...." }</div>
                <div className='Footer-social'>
                    <div>Social Media</div>
                    <div><a href='https://twitter.com/Tiven_95'><BsTwitter /></a></div>
                    <div><a href='https://www.instagram.com/breyner_parada/'><BsInstagram /></a></div>
                    <div><a href='https://www.facebook.com/breynerestiven/'><BsFacebook /></a></div>
                    <div><a href='https://github.com/Breyner-Parada'><BsGithub /></a></div>
                </div>
            <div className='Footer-info'>
                <div>Información</div>
                <div>paradabre@gmail.com</div>
                <div>+573174531701</div>
                <div>Bucaramanga, Colombia</div>
            </div>
        </div>
        <p className='Footer-powered'>Breyner Parada | ©️ 2022</p>
    </div>
  )
}
