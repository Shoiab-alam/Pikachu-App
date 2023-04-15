import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Pikachu() {
  const [num,setNum] = useState()
  const [valid,setValid] = useState(false)
  const [name,setName] = useState()
  const [move,setMove] = useState()

  async function getData (){
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const {name, moves} = res.data;

    setName(name)
    setMove(moves.length)
    setValid(true)
    
  }
  useEffect(()=>{
    getData()
  
  })
  return (
    <>
      <div>
        <h1>Choose The Value</h1>
        {valid? <h2>You Choose <span className='text-red-500'> {num} value</span></h2>: false}
        {valid? <h2>My Name is <span className='text-red-500'>{name}</span></h2>:false}
        {valid? <h2>I Have<span className='text-red-500'> {move} moves</span></h2>:false}
        <select value={num} onChange={(event)=>{
            setNum(event.target.value)
        }}>
          <option value='1'>1</option>
          <option value='25'>25</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
    </>
  )
}

export default Pikachu;
