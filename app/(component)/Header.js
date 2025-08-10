'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';


export default function Header() {

  return (
     <AppBar position="static" sx={{ backgroundColor: '#0C1C2C' }}>
      <Toolbar>

        {/* Left Logo Text */}
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ fontWeight: 700, mr: 3 }}
          >
            Mirissa Diving
          </Typography>
        </Link>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Static Nav Links */}
        <Link href="/about" style={{ textDecoration: 'none', marginRight: '16px' }}>
          <Button sx={{ color: 'white' }}>About</Button>
        </Link>

        <Link href="/contact" style={{ textDecoration: 'none', marginRight: '16px' }}>
          <Button sx={{ color: 'white' }}>Contact</Button>
        </Link>

        {/* Avatar */}
        <Avatar alt="Logo" src="/MainLogo.png" sx={{ width: 32, height: 32 }} />

      </Toolbar>
    </AppBar>
  )
}
