import React, { useState, useEffect } from "react";
import JoblyApi from "../../api";

import Box from '@mui/material/Box';

import CompanyList from "./CompanyList";
import SearchForm from "../Auth/SearchForm";
import { CircularProgress } from "@mui/material";

function Companies() {

    const [companies, setCompanies] = useState(null);

    const searchCompanies = async(searchTerm) => {
        if (!searchTerm) {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
            return;
        }
        let companies = await JoblyApi.searchCompanies(searchTerm);
        setCompanies(companies);
    }
    
    useEffect(() => {
        async function getCompanies() {
          let companies = await JoblyApi.getCompanies();
          setCompanies(companies);
        }
        getCompanies();
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
        <SearchForm search={searchCompanies} />
        {!companies ? <CircularProgress /> : null}
        <CompanyList  companies={companies} />
    </Box>
    )
}

export default Companies;