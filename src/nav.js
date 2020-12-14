import React from 'react'
import {connect} from 'react-redux'

const _Nav = ({groceries,view}) => {
        return(
            <div id='nav'>
                <a href='#' className= {!view?'navitem selected':'navitem'}>All({groceries.length})</a>
                <a className = {view==='need'?'navitem selected':'navitem'} href='#need'>Need({groceries.filter(_=>!_.purchased).length})</a>
                <a className = {view==='purchased'?'navitem selected':'navitem'} href='#purchased'>Purchased({groceries.filter(_=>_.purchased).length})</a>
            </div>
        )
}


const mapStateToProps = ({groceries,view}) => {
    return {
        groceries,
        view
    };
}

const Nav = connect(mapStateToProps)(_Nav)
export default Nav