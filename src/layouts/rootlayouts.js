import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function Rootlayouts() {
  return (
    <div>
        <Navbar/>
        <Container sx={{p:5}}>
        <Outlet/>
        </Container>
    </div>
  )
}
