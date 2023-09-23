import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import Job from "./Job";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJob(jobsApplied)
        }

    }, [])
    return (
        <div>
            <p>Jobs I applied : {appliedJob.length}</p>
           {
            appliedJob.map(job => <Job key={job.id} job={job}></Job>)
           }
        </div>
    );
};

export default AppliedJobs;