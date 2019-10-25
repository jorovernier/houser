import React from 'react';
import './Header.css';
import logo from './houserlogo.png';

export default class Header extends React.Component {
    render(){
        return (
            <div className='header'>
                <span className='content'>
                    <img src={logo} alt='logo of small house'/>
                    Houser
                </span>
            </div>    
        )
    }
};