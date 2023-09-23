import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h3 className="text-5xl">404 NOT FOUND</h3>
            <button><Link to='/' >Go Back To Home</Link></button>
        </div>
    );
};

export default ErrorPage;