import React from "react";

export default ({ url, image, title, description }) =>
    <div className="col-3">
        <div className="learn-tag media">
            <div className="learn-tag card">
                <a href={url} target="_blank">
                    <img src={image} alt="" />
                    <div className="tag-body">
                        <h4 className="tag-title">{title}</h4>
                        <p className="tag-desc">{description}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
