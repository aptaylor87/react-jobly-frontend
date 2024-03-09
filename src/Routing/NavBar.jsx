import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import UserContext from "../Components/Auth/UserContext";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <>
      <Button component={RouterLink} to="/companies" color="inherit">Companies</Button>
      <Button component={RouterLink} to="/jobs" color="inherit">Jobs</Button>
      <Button component={RouterLink} to="/profile" color="inherit">Profile</Button>
      <Button component={RouterLink} to="/" color="inherit" onClick={logout}>Logout</Button>
      </>
    );

  }

  function loggedOutNav() {
    return (
      <>
      <Button component={RouterLink} to="/login" color="inherit">Login</Button>
      <Button component={RouterLink} to="/signup" color="inherit">Sign up</Button>
      </>  
    );
  }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Jobly
            </Typography>
            {/* <Button component={RouterLink} to="/" color="inherit" sx={{ flexGrow: 1 }}>Jobly</Button> */}
            {currentUser ? loggedInNav() : loggedOutNav()}
            
          </Toolbar>
        </AppBar>
      </Box>
    );
    

    
}

export default NavBar;