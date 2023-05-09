import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const location = useLocation();
    console.log(location)

    if(user){
        return children;

    }

    return (
            <Navigate state={{from: location}} to='/signin' replace></Navigate>
    );
};

export default PrivateRoute;