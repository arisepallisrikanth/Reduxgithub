import React from 'react';
import {Alert} from '@mui/material';

const Notifier = ({severity,message}) => {
  return (
    <Alert severity={severity}>{message}</Alert>

    )
}

export default Notifier