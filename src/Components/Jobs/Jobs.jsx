import React, { useState, useEffect } from "react";
import JoblyApi from "../../api";

import Box from '@mui/material/Box';

import SearchForm from "../Auth/SearchForm";
import JobList from "./JobList";

function Jobs() {

    const [jobs, setJobs] = useState([]);

    const searchJobs = async(searchTerm) => {
        if (!searchTerm) {
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs);
            return;
        }
        let jobs = await JoblyApi.searchJobs(searchTerm);
        setJobs(jobs);
    }

    useEffect(() => {
        async function getJobs() {
          let jobs = await JoblyApi.getJobs();
          setJobs(jobs);
        }
        getJobs();

      }, []);

      return (
        
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin="auto"
            marginTop="15px"
            minWidth="70%" 
        >
            <SearchForm search={searchJobs} />
            {!jobs ? <CircularProgress /> : null}
            <JobList jobs={jobs} />
        </Box>
        )
}

export default Jobs;