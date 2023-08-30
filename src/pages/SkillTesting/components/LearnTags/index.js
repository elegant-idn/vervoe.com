import React, { Component } from "react";

// local files and components
import LearnTag from "../LearnTag";
import {
    learn_img_01,
    learn_img_02,
    learn_img_03
} from "../../../../assets/images";

export default () =>
    <div className="container-hideScroll">
        <div className="container-learn">
            <div className="flexbox-wrapper-learn">
                <LearnTag
                    image={learn_img_01}
                    title="Why Talent Trials are better than interviews"
                    description="Traditional job interviews don’t do the job, pun intended. Top companies are finding smarter ways to let candidates showcase their talent. Enter the age of Talent Trials. First of all, we interview the wrong people. The laws of physics prevent us from interviewing every applicant…" url="https://vervoe.com/blog/why-talent-trials-are-better-than-interviews/"
                />
                <LearnTag
                    image={learn_img_02}
                    title="Pre-employment assessment, skill testing and interviewing: what’s the difference?"
                    description="We often hear terms like pre-employment assessment, skill testing and even interviewing used interchangeably. While they may have similar high level goals, such as identifying a suitable candidate, they are fundamentally…" url="https://vervoe.com/blog/pre-employment-assessment-skill-testing-interviewing/"
                />
                <LearnTag
                    image={learn_img_03}
                    title="Résumé screening: why you should screen people in, not out"
                    description="Résumé screening is an accepted part of the recruitment process. So accepted, in fact, that the focus of many talent acquisition vendors is to make the candidate screening process better. At face value that makes sense. Why not make…" url="https://vervoe.com/blog/resume-screening-why-you-should-screen-people-in-not-out/"
                />
            </div>
        </div>
    </div>

