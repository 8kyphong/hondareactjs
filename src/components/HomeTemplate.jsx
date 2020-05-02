import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';


const Homelayout = (props) => {
    return <Fragment>
        {props.children}
    </Fragment>
}
export const Home = ({ Component, ...props }) => (
    <Route {...props} render={(propComponent) => (
        <Homelayout>
            <Component {...propComponent} />
        </Homelayout>
    )} />
)
