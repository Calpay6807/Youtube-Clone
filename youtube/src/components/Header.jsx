import React, { useState } from 'react'
import {BsBellFill} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  const[query, setQuery] = useState("")
  return (
    <header className='flex justify-between items-center p-2 sticky'>

    <Link to={"/"}>
    <div className='flex items-center'>
    <img className='w-[100px]' src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" alt="" />
    <h1 className='text-2xl'>Youtube</h1>
    </div>
    </Link>

    <form className='bg-white rounded flex items-center'>
    <input type="text" className='px-4 py-1 rounded outline-none text-black' 
    onChange={(e) => setQuery(e.target.value)}
    
    />
    <Link to={`/results?search_query=${query}`} className='mr-2' >
    <FiSearch className='text-black'/>
    </Link>
    </form>
      <BsBellFill className='mr-4' />
    </header>
  )
}

export default Header
