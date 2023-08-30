import React from "react";

export default () =>
    <div className="section homepage-charts">
        <div className="container center w-container home-container">
            <div className="flexbox-wrapper">
                <div className="col-1 w-clearfix">
                    <div className="donut-chart chart1 centered-content-wrapper">
                        <div className="slice one"></div>
                        <div className="slice two"></div>
                        <div className="chart-center">
                            <span>70</span>
                        </div>
                    </div>
                    <h4>Improved Time to Hire</h4>
                </div>
                <div className="col-1 w-clearfix">
                    <div className="donut-chart chart2 centered-content-wrapper">
                        <div className="slice one"></div>
                        <div className="slice two"></div>
                        <div className="chart-center">
                            <span>97</span>
                        </div>
                    </div>
                    <h4>Candidate Completion Rate</h4>
                </div>
                <div className="col-1 w-clearfix">
                    <div className="donut-chart chart3 centered-content-wrapper">
                        <div className="slice one"></div>
                        <div className="slice two"></div>
                        <div className="chart-center">
                            <span>62</span>
                        </div>
                    </div>
                    <h4>Female Candidates</h4>
                </div>
            </div>
        </div>
    </div>
