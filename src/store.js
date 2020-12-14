import {createStore} from 'redux';
import groceries from './groceries';

const initialState = {
    groceries :[],
    view:''
}

const LOAD_GROCERIES = 'LOAD GROCERIES'
const SET_VIEW = 'SET_VIEW'
const TOGGLE = 'TOGGLE'
const CREATE = 'CREATE'

const store = createStore((state=initialState,action) => {
    switch(action.type){
        case LOAD_GROCERIES:
            return {...state,groceries:action.groceries}
        case SET_VIEW:
            return {...state,view:action.view}
        case TOGGLE:
            return {...state,groceries:state.groceries.map(grocery=>{
                if(action.grocery.name===grocery.name){
                    grocery.purchased = action.grocery.purchased
                }
                return grocery
            })}
        case CREATE:
            return {...state,groceries:[...state.groceries,action.newItem]}
        default:
            return state
    }
})


const loadGroceries = (groceries) => {
    return {
        type: LOAD_GROCERIES,
        groceries
    }
}

const setView = (view) => {
    return {
        type: SET_VIEW,
        view
    }
}

const toggle = (grocery) => {
    return {
        type: TOGGLE,
        grocery
    }
}

const addItem = (newItem) => {
    return {
        type: CREATE,
        newItem
    }
}

export default store;
export {loadGroceries,setView,toggle,addItem};