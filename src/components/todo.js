
import React from "react" 
import TodoForm from "./todoForm"
import Element from "./element";
export default class Todo extends React.Component{
    state = {
        todos :[],
        toShow:"all",
        all:true
    };
    submitTodo = todo =>{
        this.setState({
            todos: [todo, ...this.state.todos]
        })


    }
    toggleCompete =(id)=> {
        
       this.setState({
           todos:this.state.todos.map( todo=>{
               if(todo.id===id){
                  return{
                      ...todo,
                      complete: !todo.complete
                  }
               }else{
                   return todo;
               }
           }

           )
       })
       
    }
    todosToShow =(s)=>{
        this.setState({
            toShow:s
        })
    }
    onDelete =(id)=>{
        this.setState({
            todos:this.state.todos.filter(todo =>todo.id!==id)
        })
    }
    removeCompletes =() =>{
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }
    toggleAll=()=>{
        this.setState({
            todos:this.state.todos.map(todo=> {return {
                ...todo,
                complete:this.state.all
            }}),
            all: !this.state.all
        })
    }

    render(){
        let todos =[]
        if (this.state.toShow==="all"){
            todos =this.state.todos;
        }
        else if (this.state.toShow==="active"){
            todos=this.state.todos.filter(todo=> !todo.complete)
        }
        else if (this.state.toShow==="complete"){
            todos=this.state.todos.filter(todo => todo.complete)
        }
      return   (
      <div>
            <TodoForm onSubmit={this.submitTodo}  />
            {todos.map(todo => (
                    <Element key={todo.id} onDelete={()=>this.onDelete(todo.id)} toggleComplete ={()=> this.toggleCompete(todo.id)} elem={todo}></Element>
            ))}
            <div>todos left: {this.state.todos.filter(todo=> !todo.complete).length}</div>
            <div>
                <button onClick={()=>this.todosToShow("all")}>all</button>
                <button onClick={()=>this.todosToShow("active")}>active</button>
                <button onClick={()=>this.todosToShow("complete")}>complete</button>
            </div>
            {this.state.todos.filter(todo=>todo.complete).length?<div>
            <button onClick={this.removeCompletes}>Delete All Completes</button>
            </div>:null}
            <div>
                <button onClick={this.toggleAll}>Toggle All Complete {`${this.state.all}`}</button>
            </div>
            </div>
        
                )
}}