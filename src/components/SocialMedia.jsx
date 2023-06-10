import React from 'react'
import { BsGithub, BsInstagram} from 'react-icons/bs'
import { FaFacebook} from 'react-icons/fa'
function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
           <a href="https://www.instagram.com/istiak.minal/"> <BsInstagram/></a>
        </div>
        <div>
           <a href="https://www.facebook.com/minalislam.khondrokar"><FaFacebook/></a>
        </div>
        <div>
           <a href="https://github.com/MINAL-AHMED"> <BsGithub/></a>
        </div>
    </div>
  )
}

export default SocialMedia