import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Contactlayout() {
  return (
    <div>
        <h1>
        Contact
        </h1>
        <p>Hi contact me for further details..heloooo.......................</p>
        <div>

        <NavLink to='mail'>
        mail us
        </NavLink>
       <NavLink to='phone' style={{marginLeft:'10px'}}>
        contact us
        </NavLink>
        </div>
        <Outlet/>
    </div>
  )
}
