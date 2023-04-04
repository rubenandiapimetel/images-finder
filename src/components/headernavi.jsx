

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CollectionsIcon from '@mui/icons-material/Collections';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import { Link } from 'react-router-dom';


function ResponsiveAppBar() {


  return (
    <AppBar
      sx={{
        position: "static",
        bgcolor: "rgba(140, 48, 245, 1)",
        px: { xs: "1rem", md: "5rem" },
        boxShadow: "0px 0px 9px 100px rgb(255 255 255)",
      }}
    >
      <Toolbar disableGutters>
        <div
          style={{
            gap: { xs: "1rem", sm: "3rem" },
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CollectionsIcon
              sx={{
                display: { md: "flex" },
                xs: "flex",
                ml: "0.5rem",
                mr: "1rem",
                fontSize: "3rem",
              }}
            />
            <Typography
              variant="h4"
              
              href="/"
              sx={{
                display: { xs: "flex", md: "flex" },
                fontFamily: "Inter",
                fontStyle: "normal",
                letterSpacing: ".3rem",
                color: "rgb(0, 0, 0)",
                textDecoration: "none",
                width: "100%",
                minWidth: { sm: "153px", md: "180px", lg: "205px" },
              }}
            ><Link to='/'>
              my
              <br />
              Gallery
              </Link >
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhotoAlbumIcon
                sx={{ display: { md: "flex" }, xs: "flex", mr: "0.5rem" }}
              />
              <Typography
                variant="h4"
                
                href="/"
                sx={{
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "Inter",
                  fontWeight: 70,

                  color: "black",
                  textDecoration: "none",

                  minWidth: { sm: "153px", md: "180px", lg: "205px" },
                }}
              >
                <Link to='/fav'>            {/* aqui */}
                my Images
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
