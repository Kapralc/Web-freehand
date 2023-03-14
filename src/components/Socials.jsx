import React from 'react'
import {
  ImGithub,
  ImTwitter,
  ImInstagram,
  ImLinkedin2
} from 'react-icons/im'

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li><a href='https://github.com/Abiodun-code' target='_blank'><ImGithub/></a></li>
        <li><a href='https://www.linkedin.com/in/olaroungbe-j11/' target='_blank'><ImLinkedin2 /></a></li>
        <li><a href='https://twitter.com/Olaroungbe_j' target='_blank'><ImTwitter /></a></li>
        <li><a href='https://www.instagram.com/abiodun_code/' target='_blank'><ImInstagram /></a></li>
      </ul>
    </div>
  )
}

export default Socials