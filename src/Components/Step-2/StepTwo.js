import React from 'react';
import store, { STEP_TWO } from '../../store';
import {Link} from 'react-router-dom';
import './StepTwo.css';

export default class StepTwo extends React.Component {
    constructor(props){
        super(props)
        const reduxState = store.getState();
        this.state = {
            image: reduxState.image
        }
        this.universalInput = this.universalInput.bind(this);
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                image: reduxState.image
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
          type: STEP_TWO,
          payload: this.state.image
        })
    }

    render(){
        return (
            <div className='step2'>

                <input onChange={e => this.universalInput('image', e.target.value)} ref='image' placeholder='Image URL' />
            
                <span className='buttons'>
                    <Link to='/wizard/step1'>
                        <button className='back' onClick={() => this.saveChanges()}>
                            Back
                        </button>
                    </Link>
                    
                    <Link to='/wizard/step3'>
                        <button className='next' onClick={() => this.saveChanges()}>
                            Next
                        </button>
                    </Link>
                </span>

            </div>
        )
    }
}