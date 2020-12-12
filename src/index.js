import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {Provider,connect} from 'react-redux';
import store,{loadGroceries} from './store';
import Nav from './nav'


class _App extends Component{
constructor(){
    super()
}
   
async componentDidMount(){

    this.props.load();
}

render(){
const {groceries} = this.props
    return (
    <div>
      <h1>Acme Groceries</h1>
      <Nav/>
      <ul>
        {groceries.map(item=>{
            return(
            <li key={item.id}>{item.name}</li>
            )
            })}
      </ul>
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
        }
    }
}

const App = connect(mapStateToProps,mapDispatchToProps)(_App);

render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'));