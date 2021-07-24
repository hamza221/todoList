import React from "react"
export default  props =>
<div style={{display:"flex",justifyContent:"center"}}>
    <div style={{
        textDecoration: props.elem.complete? "line-through" :""
    }} onClick={props.toggleComplete} >{props.elem.text}</div>
    <button onClick={props.onDelete}>x</button>
    </div>;
