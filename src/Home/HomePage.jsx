import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { useLoaderData } from "react-router-dom";
import JobCard from "../JobsPages/JobCard";

const HomePage = () => {

  const [expanded, setExpanded] = useState(false);

  const allJobs = useLoaderData();
  
  const salesJobs = allJobs.filter(sJob => sJob.category_code === 'sm001')
  const dmJobs = allJobs.filter(dmJob => dmJob.category_code === 'dm002')
  const admJobs = allJobs.filter(admJob => admJob.category_code === 'adm003')
  const hrJobs = allJobs.filter(hrJob => hrJob.category_code === 'hr004')
  const devJobs = allJobs.filter(devJob => devJob.category_code === 'dv005')
  const engrJobs = allJobs.filter(engrJob => engrJob.category_code === 'engr006')
  const crtvJobs = allJobs.filter(crtvJob => crtvJob.category_code === 'crtv007')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
    return (
        <div>
           <div className="text-center">
           <img className="block m-auto" src="https://i.postimg.cc/m2Pr0dfd/job-search-portals.png" alt="" />
           </div>
           <div>
           <p className="flex justify-center text-6xl text-blue-700"><FaGripLines/></p>
            <h4 className="text-center text-2xl font-semibold my-4">Browse Open Positions by Category</h4>
           </div>
           <div className="mx-2">
           <Accordion className="mt-4" style={{ border: '2px solid #010101', borderRadius: '4px' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Sales & Marketing
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 my-4">
                {salesJobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-4" style={{ border: '2px solid #010101', borderRadius: '4px' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined/>}
          aria-controls="panel1bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Creative
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 my-4">
                {crtvJobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-4" style={{ border: '2px solid #010101', borderRadius: '4px' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined/>}
          aria-controls="panel1bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Human Resource
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 my-4">
                {hrJobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-4" style={{ border: '2px solid #010101', borderRadius: '4px' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined/>}
          aria-controls="panel1bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Administration
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 my-4">
                {admJobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-4" style={{ border: '2px solid #010101', borderRadius: '4px' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined/>}
          aria-controls="panel1bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Digital Marketing
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 my-4">
                {dmJobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-4" style={{ border: '2px solid #010101', borderRadius: '4px' }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined/>}
          aria-controls="panel1bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Development
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 my-4">
                {devJobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-4" style={{ border: '2px solid #010101', borderRadius: '4px' }} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined/>}
          aria-controls="panel1bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Engineering
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 my-4">
                {engrJobs.map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </div>
    );
};

export default HomePage;