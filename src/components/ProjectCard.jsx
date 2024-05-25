import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import project1 from './Assets/project1.png';
import project2 from './Assets/project2.png';
import project3 from './Assets/project3.png';
import './css/ProfileCard.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCard } from 'mdb-react-ui-kit';

export default function ProjectCard() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: <h4 style={{ color: 'white' }}>SamadhanMitra</h4>,
      description: "Incentives based Design for onboarding Legal Service Providers",
      image: project1,
      detailedDescription: "Our team, Ignite, hailing from Sri Krishna College of Technology, has developed an innovative solution named SamadhanMitra. This project addresses a significant challenge in the legal sector by creating a system that incentivizes the onboarding of legal service providers. Our solution was conceived as part of a problem statement focused on the legal domain, and we are proud to announce that it has garnered significant recognition. Out of numerous participating teams, our project was selected as one of the top 10 finalists within our college We built SamadhanMitra using HTML, CSS, JavaScript, and Axios, leveraging the MERN stack (MongoDB, Express.js, React, and Node.js) to create a robust and scalable application."
    },
    {
      title: <h4 style={{ color: 'white' }}>Rendes</h4> ,
      description: "Transform Your Home with Online Renovation Services",
      image: project2,
      detailedDescription: "Rendes is an online renovation platform developed as part of our college React course project. Using React hooks, Rendes offers a seamless way for users to plan and manage home renovations online. Our platform ensures a dynamic user experience by efficiently managing state and side effects. This project showcases our ability to create practical solutions with modern React concepts. We also utilized React Bootstrap and Material-UI for styling and layout, and Axios for handling HTTP requests efficiently"
    },
    {
      title: <h4 style={{ color: 'white' }}>Online Pharmacy System</h4>,
      description: "Get your prescriptions delivered conveniently with our cutting-edge Online Pharmacy System",
      image: project3,
      detailedDescription: "Our Online Pharmacy System was developed for our college Object-Oriented Analysis and Design (OOAD) project. This full-stack website is connected to a MongoDB database and includes functionalities for adding, updating, and deleting prescription records. The system is designed to streamline the process of managing prescriptions and delivering medications efficiently. Our project demonstrates our ability to create a robust, user-friendly system using the MERN stack."
    },
  ];

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
              width: '198vh',
              height: '90vh',
              marginTop: '-74vh',
              borderRadius: '2vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 2vh',
            }}
          >
            <div className="container">
              <div>
                <div className="col-lg-2 offset-lg-0" style={{ marginLeft: '10vh', marginTop: '10vh', width: '55vh' }}>
                  <p style={{ marginLeft: '73vh' }}><h1 style={{ marginTop: '-43vh' }}>PROJECTS</h1></p>
                  <br />
                  <br />
                  <br></br>
                  <br></br>

                  <MDBCard className="mb-2" style={{ backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)', backdropFilter: 'blur(25px)', borderRadius: '6vh' }}>
                  </MDBCard>
                </div>
              </div>
            </div>
            <div>
              <div>
                {projects.map((project, index) => (
                  <div key={index} className="col-lg-0 offset-lg-0" style={{ marginRight: '12vh', marginTop: index === 0 ? '40vh' : '10vh', width: '110vh', height: '70.5vh' }}>
                    <Card style={{ maxWidth: 345, marginLeft: index === 1 ? '1vh' : (index === 2 ? '62vh' : '-60vh'), marginTop: index === 0 ? '-0.90vh' : '-81.2vh', backgroundColor: '#152238' , boxShadow: '0 0 0 2px white'}}>
                      <CardMedia
                        component="img"
                        alt={project.title}
                        height="140"
                        image={project.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="white">
                          {project.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={() => handleClickOpen(project)}>View</Button>
                      </CardActions>
                      );
                    </Card>
                    </div>
                    ))}
                    </div>
                    </div>
                    </Box>
                    <Button variant="contained" style={{marginTop:'10vh',marginLeft:'72.1vh'}}
                    onClick={() => window.open('https://github.com/shrivignesh37', '_blank')}>
                    Show More
                  </Button>
        </Container>
      </React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedProject?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedProject?.detailedDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
