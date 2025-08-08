'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'; // ✅ still using Next.js Link

const pages = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo title (desktop) */}
          <Typography
            variant="h6"
            noWrap
            component={Link} // ✅ changed from <a href="/"> to Link component
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mirissa Diving Activities Center
          </Typography>

          {/* Hamburger menu (mobile) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="app menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  {/* ✅ Removed legacyBehavior and used Link as component */}
                  <Typography
                    component={Link}
                    href={page.path}
                    sx={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo title (mobile) */}
          <Typography
            variant="h5"
            noWrap
            component={Link} // ✅ used Next.js Link component directly
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mirissa Diving
          </Typography>

          {/* Desktop navigation buttons aligned right */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center', ml: 'auto', mr: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link} // ✅ Button now directly uses Next.js Link
                href={page.path}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Avatar icon with image */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/MainLogo.png" /> {/* ✅ Avatar image set */}
              </IconButton>
            </Tooltip>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
