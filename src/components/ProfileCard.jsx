import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ProfileCard() {
  return (
    <div>
      <React.Fragment>
        <Container fixed>
          <Box
            sx={{
              backgroundColor: ' #192841', // Adjust the opacity and color as needed
              backdropFilter: 'blur(5px)', // Adds a blur effect to the background
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', // Adds a shadow effect
              margin: '-120px',
              width: '190vh',
              height: '90vh',
              marginTop: '18vh'
            }}
          />
        </Container>
      </React.Fragment>
    </div>
  );
}
