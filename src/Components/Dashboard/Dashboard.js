import React from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';
import './Dashboard.css';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        this.getHouses();
    }

    getHouses(){
        axios.get('/api/houses').then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(err => console.log(err))
    }

    deleteHouse(id){
        axios.delete(`/api/delete_house/${id}`).then(
            this.getHouses()
        )
    }

    render(){

        const mappedHouses = this.state.houses.map((house, index) => {
            return (
                <div key={index} >
                    <House house={house} deleteHouse={this.deleteHouse} />
                </div>
            )
        })

        return (
            <div className='dash'>

                <span className='dash-header'>
                    Dashboard
                    <Link to='/wizard/step1'>
                        <button className='add'>Add New Property</button>
                    </Link>
                </span>

                <div className='listings'>Home Listings</div>

                <div className='houses'>
                    <div>{mappedHouses}</div>
                </div>
                
            </div>
        )
    }
};