import React from 'react'
import './Quiz.css'


const App = () => {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>1. Qual é o nome do parque temático onde se passa o filme "Jurassic World" (2015)?</h2>
      <ul>
        <li>Isla Nublar Park</li>
        <li>Jurassic Kingdom</li>
        <li>Jurassic World</li>
        <li>Dino Island</li>
      </ul>
      <button>Proximo</button>
      <div className="index">1 de 5 questões</div>
    </div>
  )
}

export default App