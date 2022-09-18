import React from 'react'
import './button.css'
import {Button,styled} from '@mui/material'

const BootstrapButton = styled(Button)({
  borderRadius: '4rem',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '18px',
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: '60px',
  borderColor: '#0063cc',
  fontFamily: [
    'Mulish',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


const CustomButton = (props) => {
  return (
    <>
    <BootstrapButton className='button-css' variant={props.varient} style={props.style}>{props.label}</BootstrapButton>
    </>
  )
}

export default CustomButton