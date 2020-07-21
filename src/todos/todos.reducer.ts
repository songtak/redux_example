import {createAction, handleActions} from "redux-actions";

//CHANGE_INPUT, INSERT, TOGGLE, REMOVE
const CHANGE_INPUT = 'CHANGE_INPUT'
const INSERT = 'INSERT'
const TOGGLE = 'TOGGLE'
const REMOVE = 'REMOVE'

export const changeInput = createAction(CHANGE_INPUT)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

const initialState = {string : ""}
const todosReducer = handleActions({
    [CHANGE_INPUT]: (state, action) =>({string:state.string}),
    [INSERT]: (state, action) =>({string:state.string + {string}}),
    [TOGGLE]: (state, action) =>({string:state.}),
    [REMOVE]: (state, action) =>({string:state.remove.{string}})
}, initialState)

export default todosReducer