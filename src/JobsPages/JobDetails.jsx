import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {

    const jobs = useLoaderData();
    const {_id} = useParams();

    const {user} = useContext(AuthContext);

    const job = jobs.find(job => job._id == _id);

    const [jobData, setJobData] = useState([]);

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDialogueOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleShowToast = () => {
        toast.error('You cannot delete Job posted by other')
      }
    
      const handleDelete = () => {
        
            fetch(`http://localhost:4050/deleteJob/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log(_id);
                        if (data.deletedCount > 0) {
                            alert('Job Post is deleted successfully')  
                        }
                       
                    })
                    
                    navigate('/home');
        
      };

    useEffect(()=>{
        // axios.get(`http://localhost:4050/job/${job._id}`)
        // .then(res => {
        //     setJobData(res.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
        setJobData(job);
    },[job])

    

    return (
        <div className="my-4 mx-2">
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Deleting Job Post"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this Job Post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDelete}>
            Yes, Delete it
          </Button>
          <Button onClick={handleClose} autoFocus>
            No, Keep it
          </Button>
        </DialogActions>
      </Dialog>
      
        <div className="flex-1 text-right">
        {(user.email === jobData.user_email)
            ?<button className="border border-blue-950 p-2 rounded-md hover:text-white hover:bg-red-800" onClick={handleDialogueOpen}>Delete Post</button>
            :<button className="border border-blue-950 p-2 rounded-md hover:text-white hover:bg-red-800" onClick={handleShowToast}>Delete Post</button>
        }
        </div>
        <h4>Job Id: {jobData._id}</h4>
        <h2 className="text-3xl">{jobData.job_title}</h2> 
        <h3 className="text-xl">{jobData.category}</h3> <hr /><hr /><br />
        <p className="text-[18px] font-bold">Job Type:&nbsp;</p> <p className="text-[20px]">{jobData.job_type}</p> <br />
        <p className="text-[18px] font-bold">Salary:&nbsp;</p> <p className="text-[20px]">{jobData.salary}</p> <br />
        <p className="text-[18px] font-bold">Application Deadline:&nbsp;</p> <p className="text-[20px]">{jobData.deadline}</p><hr /><hr /> <br />
        <p className="text-[18px] font-bold">Job Description:&nbsp;</p> <p className="text-[20px]">{jobData.job_description}</p> <br />
        <p className="text-[18px] font-bold">Job Requirements:&nbsp;</p> <p className="text-[20px]">{jobData.job_requirements}</p> <br />
        <p className="text-[18px] font-bold">Other Benefits:&nbsp;</p> <p className="text-[20px]">{jobData.other_benefits}</p> <hr /> <hr /> <br />
        <p className="text-[18px] font-bold">Application Procedure:&nbsp;</p> <p className="text-[20px]">Email your CV at <b>{jobData.user_email}</b> with subject line: <b>Application for the position - {jobData.job_title}</b></p>
        <ToastContainer position="bottom-right"></ToastContainer>
        </div>
    );
};

export default JobDetails;