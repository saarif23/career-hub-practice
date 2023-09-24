import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import Job from "./Job";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJob);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        } else if (filter === 'Onsite') {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }

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
            setAppliedJob(jobsApplied);
            setDisplayJobs(jobsApplied);
        }

    }, [])
    return (
        <div>
            <div className="dropdown dropdown-bottom pl-52">
                <label tabIndex={0} className="btn m-1">filter by</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter("all")}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></li>
                </ul>
            </div>
            {
                displayJobs.map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
    );
};

export default AppliedJobs;