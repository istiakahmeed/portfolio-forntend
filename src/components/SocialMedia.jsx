import React from 'react'
import { BsTwitter, BsInstagram} from 'react-icons/bs'
import { FaFacebook} from 'react-icons/fa'
function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
           <a href="https://www.instagram.com/istiak.minal/"> <BsInstagram/></a>
        </div>
        <div>
           <a href=""><FaFacebook/></a>
        </div>
        <div>
           <a href=""> <BsTwitter/></a>
        </div>
    </div>
  )
}

export default SocialMedia