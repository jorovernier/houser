import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import StepOne from '../Step-1/StepOne';
import StepTwo from '../Step-2/StepTwo';
import StepThree from '../Step-3/StepThree';
import store, {CLEAR} from '../../store';
import './Wizard.css';

export default class Wizard extends React.Component {

    clear() {
        store.dispatch({
          type: CLEAR
        })
    }

    render(){
        return (
            <div className='wizard'>
                <span className='add-cancel'>

                    <h2>Add New Listing</h2>

                    <Link to='/'>
                        <button className='cancel' >Cancel</button>
                    </Link>

                </span>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </Switch>

            </div>
        )
    }
};