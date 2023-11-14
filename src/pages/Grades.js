import React from 'react';
import Layout from '../components/Layout/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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

const Grades = () => {
  return (
    <Layout>
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
      </Container>
    </Layout>
  );
};

export default Grades;
