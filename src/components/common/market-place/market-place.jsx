import React from "react";
import "./market-place.scss";
import Background from 'assets/images/home-bg.png'

export const MarketPlace = () => {

    return (
        <>
            <div className='market-place' style={{backgroundImage: `url(${Background})`}}>
                <h1>Asia IT <br/> Market Place</h1>
            </div>
        </>
    );
};
