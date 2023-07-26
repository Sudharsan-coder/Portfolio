import React from 'react'
import "./Block.css"
import git_hub from "../../../../assets/Project/github.png"
export default function Block(prop) {
  return (
    <div className='single_block'>
      <div className="initial">
        <h3>p{prop.number}</h3>
      </div>
      <div className="active">
        <img src={prop.image} alt="img"/>
        <div className="content">{prop.content}</div>
        {/* <img src={git_hub} alt='git' className='git_hub'/> */}
        <div className="git_hub" ><a href="https://github.com/Sudharsan-coder/Third_i"><img src={git_hub}/></a></div>
      </div>
    </div>
  )
}
