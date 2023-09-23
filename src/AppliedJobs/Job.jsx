import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';
const Job = ({ job }) => {
    console.log(job)
    const { id, logo, job_title, company_name, salary, remote_or_onsite, job_type, location } = job;

    return (

        <div className='flex gap-20 max-w-4xl mx-auto border rounded-lg  my-5 items-center p-5'>
            <img className='w-36' src={logo} alt="" />

            <div className='text-left space-y-3'> 
                <h3 className="text-2xl">{job_title}</h3>
                <p>{company_name}</p>
                <div className="flex gap-10">
                    <button className="border text-blue-700 rounded-lg py-2  px-5">{remote_or_onsite}</button>
                    <button className="border text-blue-700 rounded-lg py-2   px-5">{job_type}</button>
                </div>
                <div className="flex gap-5">
                    <div className='flex gap-2 items-center'> <CiLocationOn></CiLocationOn>
                        <p>{location}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineDollarCircle></AiOutlineDollarCircle>
                        <p>Salary : {salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>

    );
};
Job.propTypes = {
    job: PropTypes.object
}

export default Job;