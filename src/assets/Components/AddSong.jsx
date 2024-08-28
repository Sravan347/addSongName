import React, { useState } from 'react'
import "./AddSong.css"

function AddSong({newList}) {
    const[userInput,setUserInput]=useState("")
    const addNewSongs=(e)=>{
        e.preventDefault()
        newList(userInput)


    }
  return (
    <div className='search'>
        <form action="" onSubmit={addNewSongs} >
           
            <label htmlFor="">Add Songs : </label>
            <input type="text" onChange={(e)=>setUserInput(e.target.value)}/>
            <input type="submit" value={"click here"}  />
        </form>
      
    </div>
  )
}

export default AddSong
