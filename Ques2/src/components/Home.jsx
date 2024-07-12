import {useEffect, useState} from 'react'
// import Navbar from './Navbar'
import { Outlet,useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Navbar from './Navbar';

function Home() {

  return (
    <div className=''>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Home 