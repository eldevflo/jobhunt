import React from 'react';
import NavBar from '../navbar/NavBar'
import SearchBar from '../search/SearchBar'
import '../../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

  return (

    <header className="header">
      <NavBar/>
    <div className="main-header-sec">
      <SearchBar/>   
    </div>

    </header>
  )
}

export default Header
