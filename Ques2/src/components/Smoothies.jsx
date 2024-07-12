import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../schemas/index.js'
import SmoothieCard from './SmoothieCard.jsx'

function Smoothies() {

    const [smoothies, setSmoothies] = useState([])

    const getSmoothies = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/categories/Phone/products`)    
            console.log(res)
            if (res.data) {
                setSmoothies(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSmoothies()
    }, [])

  return (
    <div className='smoothie-main' >
        {
            smoothies.map((smoothie, index) => <SmoothieCard smoothie={smoothie} key={index} /> )
        }
    </div>
  )
}

export default Smoothies