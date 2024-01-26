
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {_id} = useParams();

    const job = jobs.find(job => job._id == _id);

    const [jobData, setJobData] = useState([]);

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
        </div>
    );
};

export default JobDetails;