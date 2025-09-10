import React, { useRef, useState } from "react";
import './Quiz.css'
import { data } from "../assets/data";


const Quiz = () => {
  return (
    <div className='container'>
      <h1>Quiz app</h1>
      <hr />
      <h2>pergunta 1</h2>
      <ul>
        <li>respota</li>
        <li>errado</li>
        <li>errado 2</li>
        <li>errado 3</li>
      </ul>
      <button>Next</button>
      <div className="index">1 de 5 perguntas</div>
    </div>
  )
}

export default Quiz