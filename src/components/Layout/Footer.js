import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(19 75 0)', padding: '20px 0', marginTop: 'auto', marginBottom: '-5px'}}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"  // Center the content horizontally
          alignItems="center"
          flexDirection="column"  // Stack the content vertically
          height="100%"  // Make the container take 100% height
        >
          <div>
            <Typography variant="body2" color="#ffffff" align="center">
              © {new Date().getFullYear()} Your Website Name. All rights reserved.
            </Typography>
            <Typography variant="body2" color="#ffffff" align="center">
              Developed by Lihini Jayasinghe
            </Typography>
          </div>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
