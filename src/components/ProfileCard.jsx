import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import mypic from './Assets/my_pic.jpg';
import './css/ProfileCard.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage ,MDBIcon,MDBTypography} from 'mdb-react-ui-kit';
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
          <div >
            <div className="col-lg-2 offset-lg-0" style={{marginLeft:'10vh', marginTop:'10vh', width:'55vh'}}>
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
                  <p style={{color:"white"}}>Shri Vignesh S</p>
                  <p style={{color:"white"}}>Full Stack Developer</p>
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
              <div >
              <div >
              <div className="col-lg-0 offset-lg-0" style={{marginRight:'12vh', marginTop:'10vh', width:'110vh',height:'70.5vh'}}>
              <MDBCard className="mb-3" style={{backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)' ,  backdropFilter: 'blur(25px)'}}>
              <MDBCardBody className="text-center">
              <MDBTypography variant='h3'>
              <br></br>
              <p className="text-muted mb-1">
              About Me
              </p>
              </MDBTypography>
              <MDBTypography variant='h5' color="white">
              <p style={{color:"white",height:'50.2vh'}}>
              <br></br>
              <br></br>
              <br></br>
            
          
              As a sophomore at Sri Krishna College of Technology (SKCT), my passion for 
              creative design roles in the tech industry drives me. Committed to mastering 
              React, SQL, DSA, Java, C++, MongoDB, SpringBoot, and Agile methodologies, I'm 
              
              poised to contribute innovative ideas to future projects. With accolades in
               hackathons and a finalist position at Smart India Hackathon (SIH), I'm set to graduate in 2026. Based in Coimbatore,
               I bring skills in video editing and a proactive approach to learning 
               and collaboration, ready to excel in the tech world.      
           </p>
              </MDBTypography>  
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
