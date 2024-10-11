import React from 'react';
import Socials from '../components/socials/Socials.tsx';
import Navbar from '../components/navbar/Navbar.tsx';
import { Card, CardContent, Typography, Grid, Box, Link } from '@mui/material';
import { Message, Map, Games, Search, Groups, SmartToy, Settings, Flight, GitHub } from '@mui/icons-material';

interface Project {
    icon: React.ReactNode;
    title: string;
    description: string[];
    tools: string[];
    githubLink?: string;
}

const projects: Project[] = [
    {
        icon: <Settings />,
        title: 'xk Operating System',
        description: [
            'Developed a Unix-like operating system from scratch that supports multi-threading, virtual memory, and file systems. Implemented a shell that supports multiple commands, piping, and redirections.',
        ],
        tools: ['C', 'C++', 'Unix/Linux'],
    },
    {
        icon: <Search />,
        title: 'Webserver Search Engine',
        description: [
            'Built a complete webserver using C and C++ that serves a webpage interface, accepts client search requests, finds relevant documents and webpages in its index, then serves a response over the internet.',
        ],
        tools: ['C', 'C++', 'HTTP', 'TCP/IP', 'POSIX', 'Unix/Linux', 'DNS protocols'],
    },
    {
        icon: <Games />,
        title: 'Java Game Engine',
        description: [
            'Created a game engine that supports a customized version of the Pac-Man video game that contains original maps, music, and dynamic user modifications.',
        ],
        tools: ['Java', 'Javafx'],
        githubLink: 'https://github.com/hcp-uw/java-game-engine-pacman'
    },
    {
        icon: <Groups />,
        title: 'Fred Hutch Social Network',
        description: [
            'Built a back-end application to track research co-authorship between scientists on the infectious disease team and visualized their mutual efforts before and throughout COVID-19 using SOCNETV.',
        ],
        tools: ['Python', 'SocNetV', 'JSON', 'CSV'],
        githubLink: 'https://github.com/ebai2022/fred_hutch_publication_map'
    },
    {
        icon: <Message />,
        title: 'uMessage',
        description: [
            'Created a chat application that utilizes multiple implementations of different data structures to efficiently drive word suggestion, spelling correction, and auto-completion.',
        ],
        tools: ['Java', 'HTML', 'CSS'],
        githubLink: 'https://github.com/ebai2022/uMessage'
    },
    {
        icon: <Map />,
        title: 'UW Campus Map',
        description: [
            'Developed a full stack web application that allows users to find the shortest walk-able path from one building to another on campus and receive directional instructions.',
        ],
        tools: ['Java', 'Typescript', 'React', 'JSON', 'GSON', 'HTML'],
        githubLink: 'https://github.com/ebai2022/UWCampusMap'
    },
    {
        icon: <Flight />,
        title: 'Flight App',
        description: [
            'Designed a database for the flight booking system using SQL Azure server. Implemented flight booking application that allows customers to perform task such as create username, login, search for itinerary, cancel reservation, and pay.',
        ],
        tools: ['Java', 'SQL', 'Azure'],
        githubLink: 'https://github.com/ebai2022/FlightApp'
    },
    {
        icon: <SmartToy />,
        title: 'Operation Thanos',
        description: [
            'Built a Chess AI program that is able to play at a 1300-1400 ELO rating and features a take-back feature, a blunder warning, and a start from FEN position feature.',
        ],
        tools: ['Javascript', 'Lichess API'],
    }
];

const Projects: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Box sx={{ padding: '20px' }}>
                <Typography variant="h3" gutterBottom align="center">
                    Projects
                </Typography>
                <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                                    <Box sx={{ marginRight: '20px' }}>
                                        {project.icon}
                                    </Box>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.tools.join(', ')}
                                        </Typography>
                                        {project.description.map((desc, idx) => (
                                            <Typography variant="body2" key={idx}>
                                                {desc}
                                            </Typography>
                                        ))}
                                        {project.githubLink && (
                                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                                <GitHub sx={{ marginRight: '5px' }} />
                                                <Link href={project.githubLink} target="_blank" rel="noopener" underline="none">
                                                    Github
                                                </Link>
                                            </Box>
                                        )}
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Socials />
        </div>
    );
};

export default Projects;
