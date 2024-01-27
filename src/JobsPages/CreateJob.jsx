import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import './CreateJobCSS.css';

const CreateJob = () => {

    const {user} = useContext(AuthContext);

    const user_email = user.email;

    function getCurrentDate() {
        const currentDate = new Date().toISOString().split('T')[0];
        return currentDate;
    }

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const category = form.jb_cat.value;
        const job_title = form.jbt.value;
        const job_type = form.jb_tp.value;
        const job_description = form.jb_desc.value;
        const job_requirements = form.jb_req.value;
        const salary = form.salary.value;
        const other_benefits = form.benefits.value;
        const deadline = form.deadline.value;
        var category_code = "";
        if(category === "Sales & Marketing") {
            category_code = "sm001";
        }
        if(category === "Creative") {
            category_code = "crtv007";
        }
        if(category === "Human Resource") {
            category_code = "hr004";
        }
        if(category === "Administration") {
            category_code = "adm003";
        }
        if(category === "Digital Marketing") {
            category_code = "dm002";
        }
        if(category === "Development") {
            category_code = "dv005";
        }
        if(category === "Engineering") {
            category_code = "engr006";
        }

        const newJob = {category, category_code, job_title, job_type, job_description, job_requirements, salary, other_benefits, deadline, user_email};
        console.log(newJob);

        fetch('http://localhost:4050/addJob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(result => result.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success('Job Post Added successfully')
            }
        })

    }

    return (
        <div>
          <div className="formbold-main-wrapper">
  
  <div className="formbold-form-wrapper text-center">
    
    <img className='w-full h-[240px]' src="https://i.postimg.cc/76hvkXcw/Job-Posting.png"/>
    
    

    <form onSubmit={handleAddJob} action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="formbold-form-title">
        <h2 className="">Create a Job Post</h2>
      </div>

      <div className="">
        <div>
          <label htmlFor="jb_cat" className="formbold-form-label">Category</label>
          <select className="select-bordered formbold-form-input" name='jb_cat' required>
            <option disabled selected>Select Type</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Creative">Creative</option>
            <option value="Human Resource">Human Resource</option>
            <option value="Administration">Administration</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Development">Development</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        
      </div>

      <div className="">
        <div>
          <label htmlFor="jbt" className="formbold-form-label">
            Job Title
          </label>
          <input
            type="text"
            name="jbt"
            placeholder='Enter Job Title'
            className="formbold-form-input"
            required
          />
        </div>
        
      </div>

      

      <div className="">
        <div>
          <label htmlFor="jb_tp" className="formbold-form-label">Job Type</label>
          <select className="select-bordered formbold-form-input" name='jb_tp' required>
            <option disabled selected>Select Type</option>
            <option value="Full-time On-site">Full-time On-site</option>
            <option value="Full-time Remote">Full-time Remote</option>
            <option value="Part-time On-Site">Part-time On-Site</option>
            <option value="Part-time Remote">Part-time Remote</option>
          </select>
            
          
        </div>
        
      </div>

      <div className="formbold-mb-3">
        <label htmlFor="jb_desc" className="formbold-form-label">
          Job Description
        </label>
        <textarea name="jb_desc"
          id="address2"
          placeholder='Write Job Description'
          className="formbold-form-input"
          rows="8"
          required
          >
        </textarea>
        
      </div>

      <div className="formbold-mb-3">
        <label htmlFor="jb_req" className="formbold-form-label">
          Job Requirements
        </label>
        <textarea name="jb_req"
          id="address2"
          placeholder='Write Job Requirements'
          className="formbold-form-input"
          rows="8"
          required
          >
        </textarea>
        
      </div>

      <div className="">
        <div>
          <label htmlFor="salary" className="formbold-form-label">
            Salary
          </label>
          <input
            type="text"
            name="salary"
            placeholder='Enter Salary amount'
            className="formbold-form-input"
            required
          />
        </div>
        
      </div>

      <div className="formbold-mb-3">
        <label htmlFor="benefits" className="formbold-form-label">
          Other Benefits
        </label>
        <textarea name="benefits"
          id="address2"
          placeholder='Write Other Benefits'
          className="formbold-form-input"
          rows="6"
          required
          >
        </textarea>
        
      </div>

      <div className="">
        <div>
          <label htmlFor="deadline" className="formbold-form-label">
            Application Deadline
          </label>
          <input
            type="date"
            name="deadline"
            className="formbold-form-input"
            min={getCurrentDate()}
            required
          />
        </div>
        
      </div>

      <div className="formbold-checkbox-wrapper mt-4">
        <label htmlFor="supportCheckbox" className="formbold-checkbox-label">
          <div className="formbold-relative">
            <input
              type="checkbox"
              id="supportCheckbox"
              className="formbold-input-checkbox"
            />
            <div className="formbold-checkbox-inner">
              <span className="formbold-opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  className="formbold-stroke-current"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    strokeWidth="0.4"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          I agree to the defined
          <a href="#"> terms, conditions, and policies</a>
        </label>
      </div>
      <div className="my-2"></div>
        <button type="submit" style={{'border':'1px solid'}} className="p-2 rounded-md hover:bg-[#000099] hover:text-white">Submit</button>
    </form>
  </div>
</div>  
<ToastContainer></ToastContainer>
        </div>
    );
};

export default CreateJob;