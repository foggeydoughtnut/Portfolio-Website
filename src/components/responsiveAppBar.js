import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { 
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Menu,
  Button,
  Link,
 } from '@mui/material'

const ResponsiveAppBar = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();



return (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          varient="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex'} }}
        >
          PORTFOLIO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuItem />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
          </Menu>
        </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate('/')}>Home</Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate('/projects')}>Projects</Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate('/about')}>About Me</Button>

{/* 
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link> */}
          </Box>


          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}



      </Toolbar>
    </Container>


  </AppBar>

  
 
);
}

export default ResponsiveAppBar;