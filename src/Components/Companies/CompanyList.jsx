import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress } from "@mui/material";

import CompanyCard from "./CompanyCard";

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

function CompanyList({ companies }) {


    if (!companies) {

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
            
            {companies.map((company) => (
                <CompanyCard company={company} key={company.handle} />
            ))}
        </Grid>
    )
}

export default CompanyList;