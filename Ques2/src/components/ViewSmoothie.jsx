import React, { useEffect } from 'react';
import { useNavigate, useLocation,Link } from "react-router-dom";
import axios from "axios";
import {url} from '../schemas/index.js'

function ViewSmoothie() {

    const location = useLocation()
    const smoothie = location.state

    const navigate = useNavigate()
    const handledel = async () => {
        try {
            const res = await axios.get(`${url}/smoothies/deleteSmoothie/${smoothie._id}`, {withCredentials: true})    
            if (res) navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="view-smoothie-main">
      <div className="visual">
        <img src='' />
      </div>
      <div className="contents">
        <div className="heading">{smoothie.productName}</div>
        <div className="sub-heading">{smoothie.price}</div>
        <div className="sub-heading">{smoothie.rating}</div>
        <div className="sub-heading">{smoothie.availability}</div>
      </div>
    </div>
  );
}

export default ViewSmoothie;
