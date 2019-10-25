import {createStore} from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    mortgage: '',
    rent: ''
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";
export const CLEAR = "CLEAR";

function reducer(state = initialState, action){
    const{type, payload} = action;
    switch(type){
        case STEP_ONE:
            return {...state, 
                name: payload.name,
                address: payload.address, 
                city: payload.city, 
                state: payload.state, 
                zip: payload.zip,
                image: '',
                mortgage: '',
                rent: ''
            };
        case STEP_TWO:
            return {...state, image: payload};
        case STEP_THREE:
            return {...state, mortgage: payload.mortgage, rent: payload.rent};
        case CLEAR:
            return {...state, name: '', address: '', city: '', state: '', zip: '', image: '', mortgage: '', rent: ''};
        default:
            return state;
    }
}

export default createStore(reducer);