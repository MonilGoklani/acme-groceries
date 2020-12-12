import {createStore} from 'redux';

const initialState = {
    groceries :[]
}

const LOAD_GROCERIES = 'LOAD GROCERIES'

const store = createStore((state=initialState,action) => {
if(action.type===LOAD_GROCERIES){
    state = {...state,groceries:action.groceries}
}
return state;
})


const loadGroceries = (groceries) => {
    return {
        type: LOAD_GROCERIES,
        groceries
    }
}

export default store;
export {loadGroceries};