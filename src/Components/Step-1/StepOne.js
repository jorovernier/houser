import React from 'react';
import {Link} from 'react-router-dom';
import store, {STEP_ONE} from '../../store';
import './StepOne.css';

export default class StepOne extends React.Component {
    constructor(props){
        super(props)
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
        this.universalInput = this.universalInput.bind(this);
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
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
          type: STEP_ONE,
          payload: this.state
        })
    }

    render(){
        return (
            <div className='step1'>
            
                <div className='n'>
                    Property Name
                    <input onChange={e => this.universalInput('name', e.target.value)} ref='name' placeholder='Name' />
                </div>

                <div className='a'>
                    Address
                    <input onChange={e => this.universalInput('address', e.target.value)} ref='address' placeholder='Address' />
                </div>

                <span className='csz'>

                    <div className='c'>
                        City
                        <input onChange={e => this.universalInput('city', e.target.value)} ref='city' placeholder='City' />
                    </div>

                    <div className='s'>
                        State
                        <input onChange={e => this.universalInput('state', e.target.value)} ref='state' placeholder='State' />
                    </div>

                    <div className='z'>
                        Zip
                        <input onChange={e => this.universalInput('zip', e.target.value)} ref='zip' placeholder='Zip' />    
                    </div>

                </span>

                <Link to='/wizard/step2'>
                    <button className='next' onClick={() => this.saveChanges()}>
                        Next Step
                    </button>
                </Link>

            </div>
        )
    }
}