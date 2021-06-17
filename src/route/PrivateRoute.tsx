import React from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect,
    RouteProps,
} from "react-router-dom";
import { getItem } from '../services/api/AuthServices';

interface Props extends RouteProps {
    children: React.ReactNode;
}
const PrivateRoute = ({ children, ...rest }: Props) => {
    const auth = useSelector((state: any) => state.auth.token)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth !== "" ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;