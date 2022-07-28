import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        alignContent="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{ 
            borderTop: bodyPart === item? '4px solid #ff2625' :'',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '200px',
            heigth: '282px',
            cursor: 'pointer',
            gap: '7px'
        }}
        onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top: 1800, left:100, behaviour: 'smooth'});
        }}
    >
        <img src={Icon}  alt="dumbbell" style={{width: '40px', heigth: '40px', align: 'center'}}/>
        <Typography fontSize="21px" fontWeight="bold" color="#3A1212" textTransform="capitalize ">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart