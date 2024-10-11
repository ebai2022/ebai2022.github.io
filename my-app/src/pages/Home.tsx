import React from 'react';
import { Typography, Box, Grid, Avatar } from '@mui/material';
import homePageImage from '../assets/home_page.jpg';
import Navbar from '../components/navbar/Navbar.tsx';
import Socials from '../components/socials/Socials.tsx';

const Home: React.FC = () => {

    return (
        <div>
            <Navbar/>
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh" mt={-5}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
                            <Typography variant="h4" gutterBottom>
                                Welcome! I'm Ethan Bai❄️
                            </Typography>
                            <Typography variant="body1" align="left" paragraph>
                                Software engineer, athlete, musician, teacher, and traveller.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Avatar src={homePageImage} style={{ width: 200, height: 200 }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Socials/>
        </div>
    );
};

export default Home;
