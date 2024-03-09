import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import JoblyApi from '../../api';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

function ProfileForm() {
  
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      username: currentUser.username,
      });
      const [formErrors, setFormErrors] = useState([]);  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        let profileData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        };
    
        let username = formData.username;
        let updatedUser;
    
        try {
          updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (errors) {
          setFormErrors(result.errors);
          return;
        }
    
        setFormData(f => ({ ...f, password: "" }));
        // setFormErrors([]);
        // setSaveConfirmed(true);
    
        // trigger reloading of user information throughout the site
        setCurrentUser(updatedUser);
      };
    
      return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        marginTop="15px"
        minWidth="70%" 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          onSubmit={handleSubmit}
        >
        <Typography variant="h5">Profile</Typography>
          <TextField
            disabled
            id="username"
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            required
            id="firstname"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            required
            id="lastname"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.length
                    ? <Alert severity="error">{ formErrors }</Alert>
                    : null}
          <Button type="submit" variant="contained">Update</Button>
        </Box>
      );
}

export default ProfileForm;