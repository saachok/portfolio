import React from 'react';
import { Button } from '@mui/material';

const CustomButton = (props) => {
  const { onClick, children, variant, sx } = props;
  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={{
        ...sx,
        textTransform: 'none',
        fontSize: '24px',
        padding: '4px 2rem',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
