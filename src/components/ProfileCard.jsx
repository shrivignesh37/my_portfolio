import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import mypic from './Assets/my_pic.jpg';
import './css/ProfileCard.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage ,MDBIcon} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ProfileCard() {
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
              margin: '-184px',
              width: '208vh',
              height: '90vh',
              marginTop: '18vh',
              borderRadius: '2vh',
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '0 2vh', 
            }}
          >
          <div className="container">
          <div className="row">
            <div className="col-lg-2 offset-lg-0" style={{marginLeft:'-8vh', marginTop:'10vh', width:'55vh'}}>
              <MDBCard className="mb-2" style={{backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)' ,  backdropFilter: 'blur(25px)'}}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={mypic}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: '300px' }}
                  />
                  <br></br>
                  <br></br>
                  <p className="text-muted mb-1">Shri Vignesh S</p>
                  <p className="text-muted mb-4">Full Stack Developer</p>
                  <div className="d-flex justify-content-center mb-5">
                  <MDBBtn className="btn btn-primary" style={{marginRight:'15px'}}> <MDBIcon fab icon="linkedin" /></MDBBtn>
                  <MDBBtn className="btn btn-primary" style={{marginRight:'15px'}}> <MDBIcon fab icon="instagram" /></MDBBtn>
                    <MDBBtn className="btn btn-primary" style={{marginRight:'15px'}}> <MDBIcon fab icon="google" /></MDBBtn>
                    <MDBBtn className="btn btn-primary" style={{marginRight:'15px'}}> <MDBIcon fas icon="envelope" /></MDBBtn>
                    <MDBBtn className="btn btn-primary" style={{marginRight:'1px'}}> <MDBIcon fab icon="github" /></MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
        
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
