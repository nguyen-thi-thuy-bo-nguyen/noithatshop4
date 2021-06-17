import React from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect,
    RouteProps,
} from "react-router-dom";

interface Props extends RouteProps {
    children: React.ReactNode;
}
const LoginRoute = ({ children, ...rest }: Props) => {
    const auth = useSelector((state: any) => state.auth.token)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth === "" ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default LoginRoute;