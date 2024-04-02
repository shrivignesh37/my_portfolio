import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './css/ProfileCard.css';
import { MDBCard} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ProjectCard() {
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
        <div >
          <div className="col-lg-2 offset-lg-0" style={{marginLeft:'10vh', marginTop:'10vh', width:'55vh'}}>
            <MDBCard className="mb-2" style={{backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)' ,  backdropFilter: 'blur(25px)',borderRadius: '6vh'}}>
            </MDBCard>
            </div>
            </div>
            </div>
            <div >
            <div >
            <div className="col-lg-0 offset-lg-0" style={{marginRight:'12vh', marginTop:'10vh', width:'110vh',height:'70.5vh'}}>

            <Card style={{ maxWidth: 345 , marginLeft:'-70vh' , marginTop:"-0.90vh" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
            </div>
      </div>
    </div>
      
        </Box>
      </Container>
    </React.Fragment>
  </div>
  )
}
