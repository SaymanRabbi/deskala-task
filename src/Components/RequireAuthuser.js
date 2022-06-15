import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
const RequireAuthuser = ({children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return 
    }
    if (user) {
        return <Navigate to="/candidate" state={{ from: location }} replace />
    }
    return children
};

export default RequireAuthuser;