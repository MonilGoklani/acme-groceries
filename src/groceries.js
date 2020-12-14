import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import {toggle,addItem} from './store'

const Groceries = ({groceries,view,toggle,addItem}) =>{
if(view==='purchased'){
    groceries = groceries.filter(_=>_.purchased)
}else if(view==='need'){
    groceries = groceries.filter(_=>!_.purchased)
}
    return(
        <ul>
        <li><button onClick={addItem}>CREATE</button></li>
        {groceries.map(grocery=>{
            return(
            <li onClick = {()=>toggle(grocery)} className={grocery.purchased?'purchased':''} key={grocery.id}>{grocery.name}</li>
            )
            })}
      </ul>
    )
}

const mapStateToProps = ({groceries,view}) =>{
    return{
        groceries,
        view
    }
}

const matchDispatchToPrope = (dispatch) => {
    return{
        toggle: async(grocery)=>{
            const updated = (await axios.put(`/api/groceries/${grocery.id}`,{purchased:!grocery.purchased})).data
            console.log(updated)
            dispatch(toggle(updated))
        },
        addItem: async()=>{
            const newItem = (await axios.post('api/groceries/random')).data
            dispatch(addItem(newItem))
        }
    }
}

export default connect(mapStateToProps,matchDispatchToPrope)(Groceries)