import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress } from "@mui/material";

import JobCard from "./JobCard";



function JobList({ jobs }) {

    if (!jobs) {

        return(
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        marginTop="15px"
        width="70%" 

        >
            <CircularProgress />
        </Box>
        )
    }
    return (
        <Grid sx={{ p: 2, m: 1, width: '100%', maxWidth: 600 }}>
            
            
            {jobs.map((job) => (
                <JobCard job={job} key={job.id} />
            ))}
        </Grid>
    )
}

export default JobList;