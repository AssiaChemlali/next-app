"use client"
import React ,{useState,useEffect} from 'react'

const List = () => {

  const [todo,setTodo]=useState({})

  const getData= async()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo=await response.json()
    setTodo(todo)
  }


  useEffect(()=>{

getData()
  },[])
  
  return (
    <h1>components : {todo.title}</h1>
  )
}

export default List