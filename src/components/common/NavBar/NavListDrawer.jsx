import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

export default function NavListDrawer() {
  return (
    
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/formulario" >
              <ListItemIcon>
              <EmailTwoToneIcon sx={{ fontSize: 33}} />
              </ListItemIcon>
              <ListItemText primary="Contacto"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <InstagramIcon sx={{mr: 3, fontSize:33}}/>
              <ListItemText primary="Instagram"  sx={{mr:13}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
            <FacebookTwoToneIcon sx={{mr: 3, fontSize:33}} />
              <ListItemText primary="Facebook"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
            <YouTubeIcon sx={{mr: 3, fontSize:33}} />
              <ListItemText primary="YouTube"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    
    
  );
}