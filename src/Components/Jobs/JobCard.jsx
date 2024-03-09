import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import UserContext from "../Auth/UserContext";

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function JobCard({ job }) {

    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    React.useEffect(function updateAppliedStatus() {
        

        setApplied(hasAppliedToJob(job.id));
    }, [job.id, hasAppliedToJob]);

    /** Apply for a job */
    async function handleApply(evt) {
        if (hasAppliedToJob(job.id)) return;
        applyToJob(job.id);
        setApplied(true);
        }
    return (

        
        <Card sx={{ m: 2 }} >
            <CardContent>
                <Typography variant="h5" >
                    {job.title}
                </Typography>

                <Typography variant="h6" >
                    {job.companyName}
                </Typography>
                <Typography variant="body1" >
                    Salary: {job.salary}
                </Typography>
                <Typography variant="body1" >
                    Equity: {job.equity}
                </Typography>
                <Button 
                    variant="contained"
                    onClick={handleApply}
                    disabled={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </Button>
            </CardContent>
        </Card>
    )
}

export default JobCard;