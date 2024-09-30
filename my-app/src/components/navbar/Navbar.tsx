import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [appBarColor, setAppBarColor] = useState<string>('transparent');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setAppBarColor('beige');
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAppBarColor('transparent');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: appBarColor, boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                    EB
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                            sx={{ color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            PaperProps={{
                                sx: {
                                    width: '100vw',
                                    left: 0,
                                    right: 0,
                                    backgroundColor: 'beige',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/projects">Projects</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button component={Link} to="/" sx={{ color: 'black' }}>
                            <Typography variant="h6" sx={{ color: 'black' }}>Home</Typography>
                        </Button>
                        <Button component={Link} to="/about" sx={{ color: 'black' }}>
                            <Typography variant="h6" sx={{ color: 'black' }}>About</Typography>
                        </Button>
                        <Button component={Link} to="/projects" sx={{ color: 'black' }}>
                            <Typography variant="h6" sx={{ color: 'black' }}>Projects</Typography>
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
