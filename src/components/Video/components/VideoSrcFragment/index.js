import React , { Fragment } from "react";


export default ({ sources }) =>
    <Fragment>
        {
            sources.map(
                ({ src, type }, i) =>
                    <source { ...{ src, type } } key={ i }/>
            )
        }
    </Fragment>


