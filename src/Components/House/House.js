import React from 'react';
import './House.css';

export default function House(props) {
    return (
        <div className='house'>

            <img className='image' alt='a house' src={props.house.image}/>

            <div className='fields'>
                <div>Property Name: {props.house.name}</div>
                <div>Address: {props.house.address}</div>
                <div>City: {props.house.city}</div>
                <div>State: {props.house.state}</div>
                <div>Zip: {props.house.zip}</div>
            </div>

            <div className='fields'>
                <div>Monthly Mortgage: {props.house.mortgage}</div>
                <div>Desired Rent: {props.house.rent}</div>
            </div>

            <div className='delete'>
                <button onClick={() => props.deleteHouse(props.house.id)} >X</button>
            </div>

        </div>
    )
};