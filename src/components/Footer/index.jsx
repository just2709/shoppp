import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Paper, Skeleton, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

index.propTypes = {};

function index(props) {
  return (
    <div className='grid grid-cols-4 justify-center bg-[#4c4c4c] text-white'>
      <Box className=''>
        <img src='https://vn-live-01.slatic.net/p/906bfbff3fbffb9bcf7f2a594203c027.png' className='m-auto w-2/5' />
      </Box>
      <Box>
        <List>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemIcon>
                <FacebookIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary='Facebook' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemIcon>
                <TelegramIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary='Telegram' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemIcon>
                <InstagramIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary='Instagram' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemIcon>
                <TwitterIcon style={{fill: "white"}}/>
              </ListItemIcon>
              <ListItemText primary='Twitter' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemText primary='Về chúng tôi' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemText primary='Liên hệ' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemText primary='Điều khoản' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemText primary='497 Evergreen Rd. Roseville, CA 95673' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemText primary='+44 345 678 903' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className='hover:text-red-500'>
            <ListItemButton disableGutters>
              <ListItemText primary='adobex@gmail.com' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default index;
