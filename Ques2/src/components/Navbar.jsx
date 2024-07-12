import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../schemas/index';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${url}/auth/logout`, { withCredentials: true });
      console.log(res.data);
      navigate('/auth');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nav-main">
      <div className="logo">
        LOGO
      </div>
      <div className="menu">
        <Link to="/">Our Products</Link>
      </div>
    </div>
  );
}

export default Navbar;
