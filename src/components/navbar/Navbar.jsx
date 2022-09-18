
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import './navbar.css'


export const Navbar = () => {
  const mobile = useMediaQuery('(max-width:767px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    {mobile?<div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <div className='logo-text'><div className='logo'>T</div> <span>Trafalgor</span></div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          'min-width':'41px',
        }}
        PaperProps={{
          style: {
            width: '41%',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Find a doctor</MenuItem>
        <MenuItem onClick={handleClose}>Apps</MenuItem>
        <MenuItem onClick={handleClose}>Testimonials</MenuItem>
        <MenuItem onClick={handleClose}>About us</MenuItem>
      </Menu>
    </div>:
    <div className='navbar'>
        <div className='logo-text'><div className='logo'>T</div> <span>Trafalgor</span></div>
        <div className='navlink-container'>
            <ul className='navbar-links'>
                <li> <a href="#"  >Home</a> </li>
                <li> <a href="#" >Find a doctor</a> </li>
                <li> <a href="#"  >Apps</a> </li>
                <li> <a href="#" >Testimonials</a> </li>
                <li> <a href="#"  >About us</a> </li>
            </ul>
        </div>  
    </div>
}
    </>
  )
}
