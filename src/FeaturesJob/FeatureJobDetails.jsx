import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";

const FeatureJobDetails = () => {
    const { id } = useParams();
    const featureJobDetails = useLoaderData();
    const job = featureJobDetails.find(job => job.id === parseInt(id));
   
    const { job_description, job_responsibility, educational_requirements, experiences,
        salary, job_title, contact_information
    } = job;

    const handleApplyJob = () => {
        saveJobApplication(parseInt(id));
        toast("You have already apply this job")
    }
    return (
        <div className="grid grid-cols-3 gap-5 mx-10 ">
            <div className=" p-5 col-span-2 space-y-5 ">
                <p><span className="text-bold text-white">Job Description :</span> {job_description}</p>
                <p><span className="text-bold text-white">Job Description :</span> {job_responsibility}</p>
                <p><span className="text-bold text-white">Educational Requirements: <br /> </span> {educational_requirements}</p>
                <p><span className="text-bold text-white">Experiences : <br /> </span> {experiences}</p>

            </div>
            <div>
                <div className=" p-5 space-y-3 bg-slate-700 rounded-lg ">
                    <h3 className="text-xl text-white  font-semibold">Job Details </h3>
                    <hr className="my-5" />
                    <p><span className="text-white font-semibold">Salary :</span> {salary} </p>
                    <p><span className="text-white font-semibold">Job Title :</span> {job_title}</p>

                    <h3 className="text-xl text-white  font-semibold pt-5">Contact Information </h3>
                    <hr className="my-5" />
                    <p><span className="text-white font-semibold">Phon :</span> {contact_information.phone}</p>
                    <p><span className="text-white font-semibold">Email :</span> {contact_information.email}</p>
                    <p><span className="text-white font-semibold">Address :</span> {contact_information.address}</p>
                </div>
                <button onClick={handleApplyJob} className="w-full btn btn-primary my-5">Apply Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FeatureJobDetails;