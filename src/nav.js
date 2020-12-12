import React from 'react'
import {connect} from 'react-redux'

const _Nav = (props) => {
    const {groceries} = props
    console.log(groceries)
        return(
            <div id='nav'>
                <p className='navitem'>All({groceries.length})</p>
                <p className='navitem'>Need</p>
                <p className='navitem'>Purchased</p>
            </div>
        )
}


const mapStateToProps = (state) => {
    return state;
}

const Nav = connect(mapStateToProps)(_Nav)
export default Nav