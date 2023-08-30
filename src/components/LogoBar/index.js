import React from "react";
import {akqa, allegis, australiapost, kforce, naspers} from "../../assets/images";

const images = [akqa, allegis, australiapost, kforce, naspers]

export default ({ classIndex, wrapperClass }) =>
    <div
        className={ `logobar-${ wrapperClass ? 'black' : 'wrapper' }` }
    >
            {
                    images.map((image, i) =>
                        <div
                            key={ i }
                            className={ `logo-column${ classIndex === i ? ' orphan' : '' }` }>
                                <img
                                    src={ image }
                                    height="35" alt=""
                                    className="logo-bar-item"
                                />
                        </div>
                    )
            }
    </div>
