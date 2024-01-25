import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { FaGripLines, FaPlus } from "react-icons/fa";

const HomePage = () => {
    return (
        <div>
           <div>
           <img src="https://i.postimg.cc/zG9Z9YR0/Top-10-Job-Portals-in-India-That-Makes-Them-Good-min.jpg" alt="" />
           </div>
           <div>
           <p className="flex justify-center text-6xl text-blue-700"><FaGripLines/></p>
            <h4 className="text-center text-2xl font-semibold">Browse Open Positions by Category</h4>
           </div>
           <div>
      <Accordion className="mt-2">
        <AccordionSummary
          expandIcon={<FaPlus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Custom transition using Fade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mt-2">
        <AccordionSummary
          expandIcon={<FaPlus />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Default transition using Collapse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </div>
    );
};

export default HomePage;