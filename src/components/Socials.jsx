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
        <li><a href='https://www.instagram.com/abiodun_code/' target='_blank'><ImInstagram /></a></li>
      </ul>
    </div>
  )
}

export default Socials