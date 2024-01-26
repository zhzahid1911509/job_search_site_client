import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { ExpandMoreOutlined } from "@mui/icons-material";

const HomePage = () => {

  const [expanded, setExpanded] = useState(false);

  const [sales, setSales] = useState([]);
  const [digitals, setDigital] = useState([]);
  const [managements, setManagement] = useState([]);
  const [hrAdmins, setHrAdmin] = useState([]);
  const [developments, setDevelopment] = useState([]);
  const [engineerings, setEngineering] = useState([]);
  const [creatives, setCreative] = useState([]);

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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </div>
    );
};

export default HomePage;