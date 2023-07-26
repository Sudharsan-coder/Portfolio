import React from 'react'
import whatsapp from "../../../assets/social/what.gif"
import linkedin from "../../../assets/social/linkedin.gif"
import insta from "../../../assets/social/instagram.gif"
import twitter from "../../../assets/social/Twitter.gif"
import "./Social.css"
export default function Social() {
  return (
    <div className='social'>
        <a href='https://api.whatsapp.com/send/?phone=9943471966&text&type=phone_number&app_absent=0' target='blank'><img src={whatsapp}/></a>
        <a href='https://www.linkedin.com/in/sudharsan-k-2a2763232/' target='blank'><img src={linkedin}/></a>
        <a  href='https://www.instagram.com/simply_sudharsan/' target='blank'><img src={insta}/></a>
        <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FSudharsan220103' target='blank'><img src={twitter}/></a>
    </div>
  )
}
