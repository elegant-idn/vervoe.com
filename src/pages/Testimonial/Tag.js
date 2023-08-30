import React from 'react';

const Tag = (props) => (
    <div className="talk-tag">
        <div className={props.active ? "talk-tag-active" : "talk-tag-inactive"}>
            <div className="quote">“</div>
            <div className="text">
                {props.talk.text}
            </div>
            <div className="triangle">
            </div>
        </div>

        <div className="desc">
            <span className={props.active ? "desc-text active" : "desc-text"}>{props.talk.desc}<b>{props.talk.company}</b></span>
            {props.talk.logo &&
                <div className="companylogo">
                    <img src={props.talk.logo} alt="" className="talk-tag-logo" />
                </div>
            }
        </div>
    </div>
);

export default Tag;