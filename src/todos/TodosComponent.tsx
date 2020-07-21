//input, button

import React from "react";

const TodosComponent = ({todo, onToggle, onRemove}) => {
    return (
        <>
        <input type="checkbox"
        onClick={()=>ontoggle(todo.id)}
        checked={}
        ></input>
        <button></button>
        </>
    )

}
const Todos = ({
    input,
    todos,
    onChangeInput,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault()
        onInsert(input)
        onChangeInput('') //등록 후 인풋 초기화화
    }}

export default TodosComponent


