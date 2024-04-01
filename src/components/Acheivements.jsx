import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './css/ProfileCard.css';
import { MDBCard} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Acheivements() {
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
          margin: '79vh',
          width: '99vh',
          height: '70.0vh',
          marginTop: '-70vh',
          borderRadius: '2vh',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '0 2vh', 
        }}
      >
      <div className="container"> 
      <div >
        <div className="col-lg-2 offset-lg-0" style={{marginLeft:'10vh', marginTop:'10vh', width:'55vh'}}>
          <MDBCard className="mb-2" style={{backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)' ,  backdropFilter: 'blur(25px)',borderRadius: '6vh'}}>

          </MDBCard>
          </div>
          </div>
          </div>
      </Box>
    </Container>
  </React.Fragment>
</div>
  )
}
