import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { ImSpinner } from "react-icons/im";
import { AuthContext } from './AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (<div className='my-48'><ImSpinner className='text-9xl mx-auto animate-spin '/></div>)
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;