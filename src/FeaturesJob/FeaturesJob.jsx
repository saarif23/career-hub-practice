import { useEffect, useState } from "react";
import FeatureJob from "./FeatureJob";


const FeaturesJob = () => {
    const [loadData, setLoadData] = useState(4)
    const [featuresJob, setFeaturesJob] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setFeaturesJob(data))
    }, [])
    return (
        <div className="text-center my-10">
            <h3 className="text-4xl font-bold">Featured Jobs</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-10 items-start mt-10 mx-10">
                {
                    featuresJob.slice(0, loadData).map(featureJob => <FeatureJob
                        key={featureJob.id}
                        featureJob={featureJob}
                    ></FeatureJob>)
                }
            </div>
            <div className={loadData === featuresJob.length && 'hidden'}>
                <button
                    onClick={() => setLoadData(featuresJob.length)}
                    className="btn btn-primary mt-5">Show All Features Jobs</button>
            </div>
        </div>
    );
};

export default FeaturesJob;