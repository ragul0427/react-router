import React from 'react'
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	Container,styled} from '@mui/material'
import { NavLink } from 'react-router-dom'

function Navbar() {

    
const StyledNavLink=styled(NavLink)({
    textDecoration:'none',
    color:'#fff',
    fontSize:'20px',
    "&.active":{
        backgroundColor:'blue',
        padding:10,
        borderRadius:5
    }
})

	return (
		<> 
			<AppBar position='static' sx={{backgroundColor:'red'}}>
				<Container>
					<Toolbar sx={
						{
							display: 'flex',
							justifyContent: 'space-between'
						}
					}>
						<Typography   variant='h5'>
							router 6.4 and above
						</Typography>
						<Box sx={
							{
								display: 'flex',
								alignItems: 'center',
								gap: '50px'
							}
						}>
							<StyledNavLink to='/'>
								Home
							</StyledNavLink>
							<StyledNavLink to='about'>
								about
							</StyledNavLink>
							<StyledNavLink to='contactus'>
								contact
							</StyledNavLink>
							<StyledNavLink to='careers'>
								careers
							</StyledNavLink>
						</Box>
					</Toolbar>
				</Container>

			</AppBar>
		</>
	)
}

export default Navbar
