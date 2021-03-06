import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
  
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <Link className="Link" to={`/counter`}>Counter</Link>
      <Link className="Link" to={`/clock`}>Clock</Link>
      <Link className="Link" to={`/colorgenerator`}>Random Color generator</Link>
      <Link className="Link" to={`/todolist`}>Todo List</Link>
    </div>
  )
}

export default Home
