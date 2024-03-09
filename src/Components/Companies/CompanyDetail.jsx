import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import JoblyApi from "../../api";
import JobList from "../Jobs/JobList";
import { Box, Typography, CircularProgress } from "@mui/material";


/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {

    let params = useParams();

    const [company, setCompany] = useState(null);
    
    useEffect(() => {
        async function getCompany() {
          let company = await JoblyApi.getCompany(params.handle);
          setCompany(company);
        }
        getCompany();
      }, []);

    if (!company) {

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
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        marginTop="15px"
        width="70%" 

        >
            <Typography variant="h5">{company.name}</Typography>
            <Typography variant="body1">{company.description}</Typography>
            <JobList jobs={company.jobs} />
        </Box>
    )
}

export default CompanyDetail;