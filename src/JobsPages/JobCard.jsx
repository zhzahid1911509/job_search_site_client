import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";


const JobCard = ({job}) => {

    const {_id, category, category_code, job_title, job_type, job_description, job_requirements, salary, other_benefits, deadline} = job;

    return (
        <div>
          <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {category}
      </Typography>
      <Typography variant="h5" component="div">
       {job_title} 
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {job_type}
      </Typography>
      <Typography variant="body2">
        <p className="font-bold">Salary:&nbsp;</p>{salary}
        <br />
        <p className="font-bold">Deadline:&nbsp;</p>{deadline}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View Details</Button>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>  
        </div>
    );
};

export default JobCard;