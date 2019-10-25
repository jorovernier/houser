import React from 'react';
import store, { STEP_THREE } from '../../store';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './StepThree.css';

export default class StepThree extends React.Component {
    constructor(props){
        super(props)
        const reduxState = store.getState();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
        this.universalInput = this.universalInput.bind(this);
        this.addHouse = this.addHouse.bind(this);
        this.pageChange = this.pageChange.bind(this);
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    universalInput(prop, val){
        this.setState({
            [prop]: val
        })
    };

    saveChanges() {
        store.dispatch({
          type: STEP_THREE,
          payload: this.state
        })
    }

    addHouse(name, address, city, state, zip, image, mortgage, rent){
        const newHouse = {
            name,
            address,
            city,
            state,
            zip,
            image,
            mortgage,
            rent
        };
        axios.post('/api/add_house', newHouse).then(this.pageChange());
    }

    pageChange() {
        window.location.hash = '#/';
    }

    render(){
        const {mortgage, rent} = this.state;
        const reduxState = store.getState();
        const {name, address, city, state, zip, image} = reduxState;
        return (
            <div className='step3'>

                <input onChange={e => this.universalInput('mortgage', e.target.value)} ref='mortgage' placeholder='Mortgage' />

                <input onChange={e => this.universalInput('rent', e.target.value)} ref='rent' placeholder='Rent' />

                <Link to='/wizard/step2'>
                    <button className='back' onClick={() => this.saveChanges()}>
                        Back
                    </button>
                </Link>
            
                <button className='complete' onClick={() => {this.saveChanges(); this.addHouse(name, address, city, state, zip, image, mortgage, rent)}} >Complete</button>               

            </div>
        )
    }
}