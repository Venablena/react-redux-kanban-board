import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { startDoing } from '../actions'

const ToDoList = ({items, startDoing}) => {
  console.log(items);
  return (
    <ul className= 'list-group'>
      {items.map((el,i) =>
        <li
          key ={i}
          className= 'list-group-item'
          onClick = {() => startDoing(el)}>
          {el.task}

        </li>
      )}
    </ul>
  )
}

const mapStateToProps = state => {
  //This comes from the reducer
  return {items : state.todo}
}

// const mapDispatchToProps = dispatch => bindActionCreators({ startDoing }, dispatch)

export default connect(mapStateToProps, { startDoing })(ToDoList)
