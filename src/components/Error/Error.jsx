import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='bg-white'>



	<div id="notfound">
		<div className="notfound">
        <img className='w-3/4 mx-auto' src="error.gif" alt="" />
			<div className="notfound-404">
				<h1>40<span></span>4</h1>
			</div>
			<h2>Oops! Page Not Be Found</h2>
			
			<Link className='mt-8' to="/">Back to homepage</Link>
		</div>
	</div>


        </div>
    );
};

export default Error;