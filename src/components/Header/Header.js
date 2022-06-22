import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, Inputbase,Box,Button,MenuIcon,IconButton, Input, InputBase } from '@material-ui/core';
import SearchIcon  from "@material-ui/icons/Search";
import useStyles from "./styles";

export const Header = () => {
  const classes=useStyles()
  return (
    
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Let's Travel 
          <i class='fas fa-globe-americas'></i>
        </Typography>
        <Box display="flex" >
           
        
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
               placeholder="Search Here" classes={{root : classes.inputRoot ,input: classes.inputInput}}
              />
            </div>
       
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>

    </AppBar>
  );
}


//

