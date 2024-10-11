import React from 'react';
import { Box, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import YoutubeIcon from '@mui/icons-material/YouTube';

const Socials: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            mt={2}
            width="100%"
            position="relative"
            bgcolor="background.paper"
            zIndex={1000}
        >
            <Box display="flex" justifyContent="center" gap={2}>
                <Link href="mailto:ethanbai360@gmail.com" target="_blank" rel="noopener">
                    <IconButton color="primary" style={{ transform: 'scale(1.5)' }}>
                        <EmailIcon fontSize="inherit" />
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/ethan-bai/" target="_blank" rel="noopener">
                    <IconButton color="primary" style={{ transform: 'scale(1.5)' }}>
                        <LinkedInIcon fontSize="inherit" />
                    </IconButton>
                </Link>
                <Link href="https://github.com/ebai2022" target="_blank" rel="noopener">
                    <IconButton color="primary" style={{ transform: 'scale(1.5)' }}>
                        <GitHubIcon fontSize="inherit" />
                    </IconButton>
                </Link>
                <Link href="https://github.com/ebai2022/Resume/blob/main/Bai_Ethan_Resume.pdf" target="_blank" rel="noopener">
                    <IconButton color="primary" style={{ transform: 'scale(1.5)' }}>
                        <DescriptionIcon fontSize="inherit" />
                    </IconButton>
                </Link>
                <Link href="https://www.youtube.com/channel/UCAdthy_I9VzqPqE1I5Fk7fw" target="_blank" rel="noopener">
                    <IconButton color="primary" style={{ transform: 'scale(1.5)' }}>
                        <YoutubeIcon fontSize="inherit" />
                    </IconButton>
                </Link>
            </Box>
        </Box>
    );
};

export default Socials;
