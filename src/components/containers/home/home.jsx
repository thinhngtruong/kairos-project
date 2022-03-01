import React from "react";
import {Header, MarketPlace} from 'components/common';
import {TOP_HEADER, BOTTOM_HEADER} from "config";
import "./home.scss";

export const HomePage = () => {

    return (
        <>
            <Header topHeaders={TOP_HEADER} bottomHeaders={BOTTOM_HEADER}/>
            <MarketPlace/>
            <div className='notification'>
                You are now viewing an <b> IT Software</b> that has been verified by <b> over 1 million users</b>.
            </div>
        </>
    );
};
