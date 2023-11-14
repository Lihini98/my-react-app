import React from 'react';
import Layout from '../components/Layout/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const HeroBox = styled(Box)(({ theme }) => ({
  position: 'relative', // Update position to relative
  textAlign: 'center',
  color: '#ffffff',
  background: '#5a62a2',
  [theme.breakpoints.down('sm')]: {
    top: '40%',
    left: '50%',
    right: '0%',
  },
}));

const HeroTitle = styled(Typography)({
  fontSize: '4.2rem',
  fontWeight: 'bold',
  paddingTop: '40px',  
  paddingBottom: '15px',
  '@media (max-width:600px)': {
    fontSize: '3.2rem',
  },
});

const HeroButton = styled(Button)({
  marginTop: (theme) => theme.spacing(2),
  marginBottom: '50px',  
});

const GradeTitle = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(5), 
  fontSize: '3.5rem',
  textAlign: 'center',
  color: '#019413',
  fontWeight: 'bold',
  '@media (max-width:600px)': {
    fontSize: '1.8rem',
  },
}));


const GradeContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: (theme) => theme.spacing(4),
});

const GradeCard = styled(Card)(({ theme }) => ({
  minWidth: '230px',
  background: '#1eaf06',
  maxWidth: '230px',
  border: '1px solid #B7013A',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '148px',
  borderRadius: '22px',
  color: '#ffffff',
  fontSize: '28px',
  fontFamily: 'Poppins Extrabold',
  fontWeight: 800,
  cursor: 'pointer',
  margin: theme.spacing(2), // Add margin between cards
}));

const ImageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  '@media (max-width:600px)': {
    flexDirection: 'column',
  },
});

const Image = styled('img')({
  width: '200px', // Adjust the width as needed
  height: 'auto',
  margin: '10px', // Adjust the margin as needed
});

const Sentence = styled(Typography)({
  textAlign: 'center',
  marginTop: '10px', 
  marginBottom: '50px',
});

const Home = () => {
  return (
    <Layout>
      {/* Hero Image */}
      <Box pt={2} position="relative">
        <Card>
          <CardMedia
            component="img"
            height="450"
            image="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image"
          />
        </Card>
        <HeroBox>
          <HeroTitle variant="h4" gutterBottom>
            Explore the World of AI Education
          </HeroTitle>
          <HeroButton component={Link} to="/grades" variant="contained" color="secondary" size="large" marginBottom="20px">
            Get Started
          </HeroButton>
        </HeroBox>
      </Box>

      {/* Content */}
      <Container>
        {/* Choose Your School Grade */}
        <GradeTitle variant="h2">
          Choose Your School Grade
        </GradeTitle>

        {/* Displaying Boxes or Cards for Each Grade */}
        <GradeContainer>
          {Array.from({ length: 8 }, (_, index) => (
            <Link key={index} to={`/grade/${index + 6}`} style={{ textDecoration: 'none' }}>
              <GradeCard>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Grade {index + 6}
                  </Typography>
                  {/* Additional content for each grade card */}
                </CardContent>
              </GradeCard>
            </Link>
          ))}
        </GradeContainer>

        <GradeTitle variant="h2">
          Best Results With AI Learning
        </GradeTitle>
        <Typography variant="body1" align="center" style={{ paddingBottom: '60px' }}>
        Embark on the transformative journey of AI education from an early age, unlocking boundless opportunities and fostering innovation. Our commitment is to empower students with the essential skills, making the realm of Artificial Intelligence universally accessible for a brighter future.
        </Typography>

        <Box mt={4}>
      
      <ImageContainer>
        <div>
          <Image src="image1.jpg" alt="Image 1" />
          <Sentence>First sentence describing Image 1.</Sentence>
        </div>
        <div>
          <Image src="image2.jpg" alt="Image 2" />
          <Sentence>Second sentence describing Image 2.</Sentence>
        </div>
        <div>
          <Image src="image3.jpg" alt="Image 3" />
          <Sentence>Third sentence describing Image 3.</Sentence>
        </div>
        <div>
          <Image src="image4.jpg" alt="Image 4" />
          <Sentence>Fourth sentence describing Image 4.</Sentence>
        </div>
      </ImageContainer>
    </Box>

      </Container>
    </Layout>
  );
};

export default Home;
