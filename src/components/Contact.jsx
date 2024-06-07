import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  return (
    <div>
      <React.Fragment>
        <Container fixed>
          <Box
            sx={{
              display: 'flex',
              backgroundColor: '#152238',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              margin: '-147px',
              width: '199vh',
              height: '20vh',
              marginTop: '10vh',
              borderRadius: '2vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 2vh',
            }}
          >
            <div className="container">
              <div>
                <div className="col-lg-2 offset-lg-0" style={{ marginLeft: '  1vh', marginTop: '4vh', width: '190vh' }}>

                    Connect With Me
                    I'm actively seeking web development opportunities! If you have any projects or collaboration ideas or just want to say hi, please feel free to connect with me at 
                    <br></br>
        
                 <center>   Shrivigneshsumathi@gmail.com</center>
                    <br></br>
                    <center>by Shri Vignesh S ♥</center>
                
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
