import React, { useState, useEffect } from "react";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function SearchForm( {search} ) {

    const INITIAL_STATE = {
        searchTerm: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any field is empty
        search(formData.searchTerm);
    }
    
    return (

        <Box component="form" onSubmit={handleSubmit}
                sx={{
                    maxWidth: "600px",
                    minWidth: "600px", 
                    m: 4
                }}
            >
                <TextField
                    fullWidth
                    label="Search by name"
                    id="search"
                    name="searchTerm"
                    value={formData.searchTerm}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "5px"
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1 }}
                >
                    Search
                </Button>
        </Box>
    )

}

export default SearchForm;