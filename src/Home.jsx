import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import UserContext from "./Components/Auth/UserContext";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';





function Home() {

    const { currentUser } = useContext(UserContext);


    return (
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        marginTop="15px"
        minWidth="70%" 
    >
        <Typography variant="h5" >
            Jobly
        </Typography>

        <Typography variant="body1" >
            All the jobs in one, convenient place.
        </Typography>
        {currentUser 
            ?   <Typography variant="body1" >
                    Welcome back {currentUser.username}
                </Typography>
            :
            <Box display="flex">
            <Button 
                component={RouterLink} 
                to="/login"
                variant="contained"
                style={{ marginRight: "8px" }} 
                >
                Login
            </Button>
            <Button 
                component={RouterLink} 
                to="/signup"
                variant="contained" 
                >
                Signup
            </Button>
            </Box>
            
            

            
        }
        
        
        
    </Box>
    )
}

export default Home;