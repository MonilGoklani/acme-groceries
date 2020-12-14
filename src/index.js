import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {Provider,connect} from 'react-redux';
import store,{loadGroceries,setView} from './store';
import Nav from './nav'
import Groceries from './groceries'


class _App extends Component{
constructor(){
    super()
}
   
async componentDidMount(){
    this.props.load();
    window.addEventListener('hashchange',()=>{
    this.props.setView(window.location.hash.slice(1))
    })
    this.props.setView(window.location.hash.slice(1))
}

render(){
const {groceries,view} = this.props
console.log(view)
    return (
    <div>
      <h1>Acme Groceries</h1>
      <Nav/>
      <Groceries/>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: async()=> {
            const groceries = (await axios.get('/api/groceries')).data
            dispatch(loadGroceries(groceries));
        },
        setView: (view)=>{
                dispatch(setView(view))
            }
        }
    }


const App = connect(mapStateToProps,mapDispatchToProps)(_App);

render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'));