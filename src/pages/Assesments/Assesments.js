import React from 'react';
import MetaTags from 'react-meta-tags';
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
/* images */
import {
    alex,
    cara,
    coding,
    ebay,
    freshdesk,
    hubspot,
    immersive,
    job,
    katy,
    libraryGif,
    personality,
    skill,
    tesla,
    work
} from "../../assets/images";

const Assesments = () => {
    return (
        <div>
            <MetaTags>
                <title>AI-Powered Skill Testing Assessment Library | Vervoe</title>
                <meta content="Vervoe’s Assessment Library gives you access to structured assessments, so you can hire like an expert."
                      property="og:description" name="description"/>
                <meta content="AI-Powered Skill Testing Assessment Library | Vervoe" property="og:title"/>
            </MetaTags>
            <div className="header assessmen-llibrary">
                <NavMenu current="/assessment-library"/>
                <div className="container w-container">
                    <div className="single-heading">
                        <h1 className="heading center library">USE HIRING KNOWLEDGE FROM EXPERTS</h1>
                    </div>
                </div>
            </div>
            <div className="section light-blue quote">
                <div className="container quote w-container">
                    <div className="quote-wrapper">
                        <div className="quote-icon">“</div>
                        <div className="quote-text">Vervoe’s Assessment Library gives you access to structured
                            assessments, so you can hire like an expert.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container w-container">
                    <div className="centered-content-wrapper">
                        <h2 className="heading dark library">THE FIRST AND MOST COMPREHENSIVE LIBRARY OF <br/>ASSESSMENT
                            SCRIPTS</h2><img src={libraryGif} className="media large"/></div>
                </div>
                <div className="centered-container w-container">
                    <div>
                        <div className="paragraph our-story dark library">Vervoe has built a community of experts who
                            continuously share their hiring expertise to help you:
                        </div>
                        <div className="paragraph assessment-library">&gt; <strong className="bold-blue-text">make
                            hiring faster and fairer</strong> thanks to knowledge from a diverse range of industry
                            leaders and reputable companies
                        </div>
                        <div className="paragraph assessment-library">&gt; <strong className="bold-blue-text">hire with
                            confidence for any role</strong>, in an instant, using expert assessments from top people in
                            each field
                        </div>
                        <div className="paragraph assessment-library">&gt; <strong className="bold-blue-text">understand
                            candidates’ skills and capabilities prior</strong> to making an offer, greatly lowering the
                            risk of a bad hire
                        </div>
                        <div className="paragraph assessment-library">All while furthering our goal to democratize
                            hiring, allowing smaller <br/>companies to compete with larger corporations for the best
                                talents.</div>
                    </div>
                </div>
            </div>
            <div className="section light-blue library">
                <div className="centered-container library w-container">
                    <h2 className="heading dark">VERVOE’S ASSESSMENT LIBRARY</h2>
                    <div className="hundred-columns w-row">
                        <div className="w-col w-col-4">
                            <h1 className="heading blue">Huge Variety</h1>
                        </div>
                        <div className="w-col w-col-8">
                            <div className="paragraph hundreed">Access a comprehensive library of structured assessments
                                for all your hiring needs - from administrative to executive roles, from marketing and
                                sales, to engineers and data scientists. And more.
                            </div>
                        </div>
                    </div>
                    <div className="paragraph assessments">All types of assessments.</div>
                    <div className="flexbox-wrapper small-color-boxes">
                        <div className="small-color-box _1"><img src={skill}/>
                            <div className="small-color-box-text">Skills Tests</div>
                        </div>
                        <div className="small-color-box _2"><img src={work}/>
                            <div className="small-color-box-text">Work Samples</div>
                        </div>
                        <div className="small-color-box _3"><img src={coding}/>
                            <div className="small-color-box-text">Coding Challenges</div>
                        </div>
                    </div>
                    <div className="flexbox-wrapper small-color-boxes">
                        <div className="small-color-box _4"><img src={immersive}/>
                            <div className="small-color-box-text">Immersive Assessments</div>
                        </div>
                        <div className="small-color-box _5"><img src={job}/>
                            <div className="small-color-box-text">Job Simulations</div>
                        </div>
                        <div className="small-color-box _6"><img src={personality}/>
                            <div className="small-color-box-text">Personality Quizzes</div>
                        </div>
                    </div>
                    <div className="paragraph centered">Whatever you need to assess for, our library has it covered.
                    </div>
                    <div className="blank"></div>
                    <div className="w-row">
                        <div className="column-1 w-col w-col-4">
                            <h1 className="heading blue">Cross-Industries</h1>
                        </div>
                        <div className="w-col w-col-8">
                            <div className="paragraph hundreed">Whether you work at an early stage tech startup, at a
                                marketing or communication agency, in the retail, food, banking, or health industry, our
                                assessments are designed to help you find the best talents in your field.
                            </div>
                        </div>
                    </div>
                    <div className="partner-logo-wrapper">
                        <img src={ebay} className="partner-logo _1"/>
                        <img src={tesla} className="partner-logo _2"/>
                        <img src={hubspot} height="50" className="partner-logo _3"/>
                        <img src={freshdesk} height="50" className="partner-logo _4"/>
                    </div>
                    <div className="paragraph assessment-library">We built our library sourcing assessment scripts from
                        individuals at market-leading companies.
                    </div>
                    <div className="blank"></div>
                    <div className="w-row">
                        <div className="column-1 w-col w-col-4">
                            <h1 className="heading threethousand">3,000+</h1>
                        </div>
                        <div className="w-col w-col-8">
                            <div className="paragraph hundreed">Over 3,000 companies trust Vervoe&#x27;s assessment
                                platform to hire better.<br/>Whether you&#x27;re a single person operation or scaling up
                                    quickly, our assessment scripts have helped customers just like you hire
                                    successfully.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="w-container">
                    <h2 className="heading dark library">SEE WHY OUR USERS LOVE THE ASSESSMENT LIBRARY</h2>
                    <div className="blank"></div>
                    <div className="testimonial-wrapper">
                        <img src={katy} height="100" className="testimonial-avatar"/>
                        <h1 className="author-name">Katy Katz</h1>
                        <h4 className="author-position">Senior Consultant @ SmartBug Media</h4>
                        <div className="testimonial-text">&quot;Love the emphasis on demonstrating skills versus the old
                            standard of hiring questions. Sounds like a great way to help circumvent the natural hiring
                            biases that are proven to inhibit the process right now.&quot;</div>
                    </div>
                    <div className="blank"></div>
                    <div className="testimonial-wrapper">
                        <img src={cara} height="100" className="testimonial-avatar"/>
                        <h1 className="author-name">Cara Hogan</h1>
                        <h4 className="author-position">Content Marketing Strategist @ Zaius</h4>
                        <div className="testimonial-text">&quot;I&#x27;ve always been a believer in actually testing a
                            candidate&#x27;s skills before hiring them. I ask content candidates to do a sample blog
                            post as part of the interview process. It&#x27;s great to see a company recognizing this is
                            important and creating a usable system to accomplish this at scale.&quot;</div>
                    </div>
                    <div className="blank"></div>
                    <div className="testimonial-wrapper">
                        <img src={alex} height="100" className="testimonial-avatar"/>
                        <h1 className="author-name">Alex Birkett</h1>
                        <h4 className="author-position">Growth Marketing Manager @ HubSpot</h4>
                        <div className="testimonial-text">&quot;Hiring is a huge bottleneck for startups and almost no
                            one gets it right without a few (or many) hiccups. Pulling knowledge from those who have
                            already experienced those hiccups and smoothed out their own process is a great
                            idea.&quot;</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Assesments;
