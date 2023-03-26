import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppBreadcrumbs from './../components/AppBreadCrumbs';

const Rootlayout = () => {
  return (
    <>
        <Navbar/>
        <Container sx={{p:3}}>
            <AppBreadcrumbs/>
        </Container>
        <Container sx={{p:5}}>
            <Outlet/>
        </Container>
    </>
  )
}

export default Rootlayout