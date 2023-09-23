import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FeatureJob = ({ featureJob }) => {
    console.log(featureJob)
    const { id, company_name, logo, job_title, job_type, location
        , salary, remote_or_onsite } = featureJob;
    return (
        <div className="border rounded-md  space-y-4 p-10  text-left">
            <img src={logo} alt="" />
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
            <Link to={`/featureJob/${id}`}>
                <button className="btn btn-primary">View Details</button>
            </Link>

        </div>
    );
};
FeatureJob.propTypes = {
    featureJob: PropTypes.object
}
export default FeatureJob;