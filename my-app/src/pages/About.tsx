import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Navbar from '../components/navbar/Navbar.tsx';
import Socials from '../components/socials/Socials.tsx';
import BadmintonPhoto from '../assets/badminton_photo.jpg';
import WhistlerPhoto from '../assets/whistler_photo.jpg';

const About: React.FC = () => {
    const items = [
        {
            title: "Badminton",
            description: "I've been playing competitive badminton since 13 years old. I play for the University of Washington and also for EPFL in Switzerland. I compete on the national and collegiate level in the USA, where I was formerly ranked in the top 50 in U19.",
            image: BadmintonPhoto,
            alt: "Picture 1"
        },
        {
            title: "Ski & Snowboard",
            description: (
                <>
                    I love the snow and everything related to it! I've been skiing since 4 years old and started picking up snowboarding last year thanks to my coach
                    <a href="https://www.instagram.com/leemms_/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>❤️</a>.
                    I'm certified by the Professional Ski Instructors of America, have taught at the Summit at Snoqualmie, and have raced for Team Alpental Snoqualmie. Always looking for new places to explore!
                </>
            ),
            image: WhistlerPhoto,
            alt: "Picture 2"
        },
        // {
        //     title: "Music",
        //     description: "Description for picture 3.",
        //     image: "/path/to/your/image3.jpg",
        //     alt: "Picture 4"
        // },
        // {
        //     title: "Travel",
        //     description: "Travelling is one of my favorite things to do. So far, my favorite countries have been the US, Canada, and Iceland. I've been to over 20 different countries and counting! Top places I want to go: Hokkaido, New Zealand, Taipei, Shanghai, Seoul.",
        //     image: "/path/to/your/image3.jpg",
        //     alt: "Picture 4"
        // }
    ];

    return (
        <>
            <Navbar/>
            <Container>
                <Typography variant="h3" gutterBottom align="center">
                    About Me
                </Typography>
                <Typography variant="body1" gutterBottom align="center">
                    I'm a computer science student studying at the University of Washington. I chose CS because I love building, problem solving, and working across multiple fields. I spent last summer intering at Amazon in San Diego as a software engineer and at Centific the year prior. I believe in a well rounded life with many interests, so below are some of my passions outside of CS!
                </Typography>
                <Grid container spacing={4}>
                    {items.map((item, index) => (
                        <Grid container item xs={12} spacing={2} key={index} direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt={item.alt}
                                        height="300"
                                        image={item.image}
                                        title={item.alt}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Socials/>
        </>
    );
};

export default About;
