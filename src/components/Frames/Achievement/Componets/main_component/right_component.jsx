import React from 'react'
import "./right_component.css"
import F1 from "./frames/frame1/Frame1.jsx"
import F2 from "./frames/frame2/Frame2.jsx"
import F3 from "./frames/frame3/Frame3.jsx"
import F4 from "./frames/frame4/frame4.jsx"

export default function main() {
  return (
    <div className='right_container'>
        <F1/>
        <F2/>
        <F3/>
        <F4/>
    </div>
  )
}
