import React from 'react'
import './listdelivery.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Datatabledemo from '../components/Demo'

function ListDemo() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatabledemo/>
      </div>
      </div>
  )
}

export default ListDemo