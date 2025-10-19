import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loadin from '../Components/Loadin';

const PrivetRouts = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loadin></Loadin>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivetRouts;