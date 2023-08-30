import React from 'react';
import Video from '../../../../components/Video';
import NavMenu from '../../../../components/NavMenu/NavMenu';
import videoSrc from './videoSources'



export default () =>
    <div className="header">
        <NavMenu />
        <div className="container w-container home-container home-header-container">
            <div className="heading-wrapper">
                <h1 className="heading bold">Skill testing predicts performance.</h1>
                <h3 className="sub-heading skill video-section">
                    Don’t rely on résumés or interviews to identify top performers.
                </h3>
            </div>
        </div>
        <Video source={videoSrc}/>
    </div>

