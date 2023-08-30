import React from "react";

export default ({onClick}) =>
    <div className="section centered-cta height-null">
        <div className="container center btn w-container home-container">
            <div className="button-wrapper">
                <div
                    data-ix="contact-sales"
                    onClick={onClick}
                    className="cta large w-button"
                >
                    Request demo
                </div>
            </div>
        </div>
    </div>
