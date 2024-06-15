import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/contact.css';

export default function Contact() {
  return (
    <div>
      <React.Fragment>
        <Container fixed>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              backgroundColor: '#152238',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              margin: { xs: '20px 0', sm: '20px -147px' }, // Adjust margins for mobile and larger screens
              width: { xs: '100%', sm: 'auto' },
              height: 'auto',
              marginTop: '10vh',
              borderRadius: '2vh',
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center',
              padding: '2vh',
              textAlign: 'center', // Center text for smaller screens
            }}
          >
            <div className="container">
              <div>
                <div className="col-lg-2 offset-lg-0" style={{ margin: '2vh', color: 'white', width: '100%' }}>
                  Connect With Me
                  <br />
                  I'm actively seeking web development opportunities! If you have any projects or collaboration ideas or just want to say hi, please feel free to connect with me at
                  <br />
                </div>
                <center style={{ color: 'white' }}>Shrivigneshsumathi@gmail.com</center>
                <center style={{ color: 'white' }}>by Shri Vignesh S ❤️</center>
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
