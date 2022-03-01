import React from "react";
import {ArrowIcon} from 'components/common/icons'
import "./header.scss";
import Logo from 'assets/images/logo.png'

export const Header = ({topHeaders, bottomHeaders}) => {

    return (
        <div className='header'>
            <div className='top-header'>
                {
                    topHeaders.map(item => <div className='top-header-item' key={item.id}>
                        {item.name} <ArrowIcon/>
                    </div>)
                }
            </div>
            <div className='bottom-header'>
                <img src={Logo} alt={"logo"}/>
                {
                    bottomHeaders.map(item => <div
                        className={`bottom-header-item ${item.name === 'Home' ? 'home' : ''}`}>
                        {item.name}
                    </div>)
                }
            </div>
        </div>

    );
};
