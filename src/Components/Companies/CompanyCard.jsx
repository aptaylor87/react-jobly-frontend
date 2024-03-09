import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
    const companyLink = `/companies/${company.handle}`

    return (
        <Card sx={{ m: 2 }} >
            <CardContent>
                <Typography variant="h5" >
                    {company.name}
                </Typography>

                <Typography variant="body1" >
                    {company.description}
                </Typography>
                <Button component={RouterLink} to={companyLink} variant="contained">See More</Button>
            </CardContent>
        </Card>
       
    )
}

export default CompanyCard;