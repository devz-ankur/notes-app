import React, { useState } from 'react'

import plusIcon from '../../Assets/plusicon.png';
import './Sidebar.css'


const Sidebar = (props) => {
  const colors = ['cyan', 'yellow', 'Beige', 'pink', 'orange', 'Lavender',]
  // ["#fe9b72","#fec971","#00d4fe","#b693fd","#e4ee91"]

  const [listOpen, setlistOpen] = useState('false')
  return (
    <>
      <div className='sidebar'>
        <img src={plusIcon.src} alt='Add ' onClick={() => setlistOpen(!listOpen)} />
        <ul className={`sidebar-list ${listOpen ? 'sidebar-list-active' : ''}`}>
          {
            colors.map((color, index) => <li
              className='sidebar-list-item'
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => props.addNote(color)}
            />)
          }

        </ul>
      </div>
    </>
  )
}

export default Sidebar