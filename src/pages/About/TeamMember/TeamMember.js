import React from 'react';
import {linkedin, twitter} from "../../../assets/images";

const TeamMember = (props) => {
    const { imgSrc, linkedinUrl, name, position, twitterUrl } = props;
    return (
        <div className="col-1-leadership w-clearfix">
            <img src={imgSrc} width="90" className="leader-image"/>
            <h2 className="leader-name">{name}</h2>
            <h3 className="leader-position">{position}</h3>
            <div className="social-icon-wrapper">
                { linkedinUrl &&
                    <a href={linkedinUrl} rel="nofollow" target="_blank" className="social-icon-1 w-inline-block">
                        <img src={linkedin} alt="LinkedIn" width="18" height="17" className="linkedin"/>
                    </a>
                }
                { twitterUrl &&
                    <a href={twitterUrl} rel="nofollow" target="_blank" className="social-icon-2 w-inline-block">
                        <img src={twitter} alt="Twitter" width="19" height="16" className="twitter"/>
                    </a>
                }
            </div>
        </div>
    )
};

export default TeamMember;
