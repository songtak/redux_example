import React from "react";
import {userSelector, useDispatch} from 'react-redux'
import TodosComponent from "./TodosComponent";
import {changeInput, insert, toggle, remove} from "./todos.reducer";

//CHANGE_INPUT, INSERT, TOGGLE, REMOVE


const TodosContainer = () => {
    const string = userSelector(state => state.todosReducer.string)
    const dispatch = useDispatch()

}

export default TodosContainer
