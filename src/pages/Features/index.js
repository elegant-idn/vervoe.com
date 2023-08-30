import React, { PureComponent } from 'react';
import MetaTags from 'react-meta-tags';
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import LogoBar from '../../components/LogoBar'
import {
    dynamic,
    customize,
    aiPowered,
    sec1t1,
    sec1t2,
    sec1t3,
    sec2t1,
    sec2t2,
    sec2t3,
    sec3t1,
    sec3t2,
    sec3t3,
    sec4t1,
    sec4t2,
    sec4t3,
    search,
    loop,
    timer,
    upload,
    shareCandidate,
    pallet,
    chat,
    magic,
    feedback,
    insights,
    video,
    responsive,
} from "../../assets/features-images";

import '../../assets/css/features.css';

class Features extends PureComponent {
    componentDidMount = () => {
        // require('./webflow');
        // delete require.cache[require.resolve('./webflow.js')]
    }

    render() {
        return (
            <div>
                <MetaTags>
                    <title>Features: Putting AI-powered Skill Testing to Work | Vervoe</title>
                    <meta
                        content="Vervoe is a dynamic AI-powered skill testing platform. Learn more about our immersive skill testing and video interviewing tools, and get started today."
                        property="og:description"
                        name="description"/>
                    <meta content="Features: Putting AI-powered Skill Testing to Work | Vervoe" property="og:title"/>
                </MetaTags>
                <NavMenu dark={true} />

                <div className="feature-hero">
                    <div className="container">
                        <h1 className="h1 centre feature-hero">Vervoe helps you test skills</h1>
                        <div className="w-row">
                            <div className="w-col w-col-4">
                                <a href="#dynamic-skill-testing" className="feature-hero-button w-inline-block">
                                    <img src={dynamic} alt="" className="feature-hero-icons" />
                                    <h4 className="h4 centre feature-hero-text-1">Dynamic skill testing</h4>
                                </a>
                            </div>
                            <div className="w-col w-col-4">
                                <a href="#customizable-expert-content" className="feature-hero-button w-inline-block">
                                    <img src={customize} alt="" className="feature-hero-icons" />
                                    <h4 className="h4 centre feature-hero-text-2">Customizable expert content</h4>
                                </a>
                            </div>
                            <div className="w-col w-col-4">
                                <a href="#ai-powered-hiring-automation" className="feature-hero-button w-inline-block">
                                    <img src={aiPowered} alt="" className="feature-hero-icons" />
                                    <h4 className="h4 centre feature-hero-text-3">AI-powered hiring automation</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="1" className="feature-tabs-section-1">
                    <div id="dynamic-skill-testing" className="container feature-1">
                        <h2 className="h2 centre">Dynamic skill testing</h2>
                        <h4 className="h5 centre feature-subtitle">Use a variety of question and answer types, including text, multiple choice, video, document editing and more. See candidates perform on-the-job tasks.</h4>
                        <div data-duration-in="300" data-duration-out="100" className="w-tabs">
                            <div className="tabs-content-right w-tab-content">
                                <div data-w-tab="Tab 1" className="tab-pane-tab w-tab-pane features w--tab-active">
                                    <img
                                        src={sec1t1}
                                        sizes="(max-width: 479px) 96vw, (max-width: 767px) 93vw, (max-width: 991px) 95vw, 48vw"
                                        alt=""
                                    />
                                </div>
                                <div data-w-tab="Tab 2" className="tab-pane-tab w-tab-pane features">
                                    <img
                                        src={sec1t2}
                                        alt=""
                                    />
                                </div>
                                <div data-w-tab="Tab 3" className="tab-pane-tab w-tab-pane features">
                                    <img
                                        src={sec1t3}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="tabs-menu-left w-tab-menu features">
                                <a data-w-tab="Tab 1" className="feature-tab-1 w-inline-block w-tab-link w--current">
                                    <div className="feature-tab-title">Immersive skill testing</div>
                                    <p className="body-small">Ask candidates to edit documents, spreadsheets or presentations using Google&#x27;s suite of apps. Use a code editor to test software development skills.</p>
                                </a>
                                <a data-w-tab="Tab 2" className="feature-tab-1 w-inline-block w-tab-link">
                                    <div className="feature-tab-title">Video interviewing</div>
                                    <p className="body-small">Save time by interviewing remotely. See how candidates communicate by asking them to record video responses. Use video-based questions to make the process engaging.</p>
                                </a>
                                <a data-w-tab="Tab 3" className="feature-tab-1 w-inline-block w-tab-link">
                                    <div className="feature-tab-title">Multiple testing and grading formats</div>
                                    <p className="body-small">Ask candidates to respond in their own time, or set time limits. Deliver multiple choice questions in random order. Auto-progress or reject candidates based on score.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-tabs-section-2">
                    <div id="customizable-expert-content" className="container feature-2">
                        <h2 className="h2 centre">Customizable expert content</h2>
                        <h4 className="h5 centre feature-subtitle">From quick surveys to rigorous talent assessment, use customizable content to test skills or validated assessments to test personality and cognitive ability.</h4>
                        <div data-duration-in="300" data-duration-out="100" className="w-tabs">
                            <div className="tabs-content-left w-tab-content">
                                <div data-w-tab="Tab 1" className="tab-pane-tab w-tab-pane features w--tab-active">
                                    <img
                                        src={sec2t1}
                                        alt=""
                                    />
                                </div>
                                <div data-w-tab="Tab 2" className="tab-pane-tab w-tab-pane features">
                                    <img
                                        src={sec2t2}
                                        alt=""
                                    />
                                </div>
                                <div data-w-tab="Tab 3" className="tab-pane-tab w-tab-pane features">
                                    <img
                                        src={sec2t3}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="tabs-menu-right w-tab-menu features">
                                <a data-w-tab="Tab 1" className="feature-tab-2 w-inline-block w-tab-link w--current">
                                    <div className="feature-tab-title">Talent Trial builder</div>
                                    <p className="body-small">Bring your existing process online, and create your own tests from scratch with an easy-to-use Talent Trial builder. Save your tests in a private directory.</p>
                                </a>
                                <a data-w-tab="Tab 2" className="feature-tab-2 w-inline-block w-tab-link">
                                    <div className="feature-tab-title">Library of expert content</div>
                                    <p className="body-small">Choose from a library of Talent Trials created by industry experts. Customize Talent Trials to suit the requirements of your role and your company&#x27;s culture.</p>
                                </a>
                                <a data-w-tab="Tab 3" className="feature-tab-2 w-inline-block w-tab-link">
                                    <div className="feature-tab-title">Validated psychometric assessments</div>
                                    <p className="body-small">Combine bespoke skill testing with pre-employment assessment. Test personality and cognitive ability using validated psychometric assessments from market-leading providers.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-tabs-section-3">
                    <div id="ai-powered-hiring-automation" className="container feature-3">
                        <h2 className="h2 centre">AI-powered hiring automation</h2>
                        <h5 className="h5 centre feature-subtitle">Hire at scale by easily managing a high volume of candidates without
                            compromising quality. Keep candidates engaged and informed thorough the process.</h5>
                        <div data-duration-in="300" data-duration-out="100" className="w-tabs">
                            <div className="tabs-content-right w-tab-content">
                                <div data-w-tab="Tab 1" className="tab-pane-tab w-tab-pane features w--tab-active">
                                    <img
                                        src={sec3t1}
                                        alt=""
                                    />
                                </div>
                                <div data-w-tab="Tab 2" className="tab-pane-tab w-tab-pane features">
                                    <img
                                        src={sec3t2}
                                        alt=""
                                    />
                                </div>
                                <div data-w-tab="Tab 3" className="tab-pane-tab w-tab-pane features">
                                    <img
                                        src={sec3t3}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="tabs-menu-left w-tab-menu features">
                                <a data-w-tab="Tab 1" className="feature-tab-3 w-inline-block w-tab-link w--current">
                                    <div className="feature-tab-title">AI-powered candidate ranking</div>
                                    <p className="body-small">Machine learning algorithms automatically grade, and stack-rank, candidates based on how they perform. Evaluate at scale, focus only on the best.</p>
                                </a>
                                <a data-w-tab="Tab 2" className="feature-tab-3 w-inline-block w-tab-link">
                                    <div className="feature-tab-title">Reporting and talent insights</div>
                                    <p className="body-small">See which sourcing methods deliver the best performing candidates, and make decisions based on ROI. See completion rates and times for each stage and sourcing method.</p>
                                </a>
                                <a data-w-tab="Tab 3" className="feature-tab-3 w-inline-block w-tab-link">
                                    <div className="feature-tab-title">Bulk candidate actions</div>
                                    <p className="body-small">Automate your entire process. Auto-progress or reject multiple candidates with one click. Give multiple candidates more time to complete Talent Trials.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="cta-wrapper"><a href="https://app.vervoe.com/registration" className="cta-features w-button">Try Free</a>
                            <div className="text-below-cta">No Credit Card Required</div>
                        </div>
                    </div>
                </div>
                <div className="feature-were-easy">
                    <div className="container">
                        <h2 className="h2 centre">We’re easy to do business with</h2>
                        <div className="were-easy-column w-row">
                            <div className="w-col w-col-4">
                                <div className="were-easy-wrapper">
                                    <img src={sec4t1} alt="" className="were-easy-image" />
                                    <h4 className="h5 centre">CSV import <br/>and export</h4>
                                    <div className="body-small centre">Import a list of candidates from your ATS, and invite them to be evaluated. Then export them back with their scores.</div>
                                </div>
                            </div>
                            <div className="w-col w-col-4">
                                <div className="were-easy-wrapper">
                                    <img src={sec4t2} alt="" className="were-easy-image" />
                                    <h4 className="h5 centre">Zapier and ATS<br/>integrations</h4>
                                    <div className="body-small centre">Seamlessly integrate Vervoe into your existing workflow. Use Zapier to create actions, or explore a full ATS integration.</div>
                                </div>
                            </div>
                            <div className="w-col w-col-4">
                                <div className="were-easy-wrapper">
                                    <img src={sec4t3} alt="" className="were-easy-image" />
                                    <h4 className="h5 centre">No implementation required</h4>
                                    <div className="body-small centre">Avoid lengthy implementations. Get started straight away with Vervoe&#x27;s cloud-based platform. Start hiring the day you register.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-matrix">
                    <div className="container">
                        <h2 className="h2 centre feature-matrix">More features to turbocharge your hiring process</h2>
                        <div className="w-layout-grid feature-grid">
                            <div id="w-node-0e8b7cf235f3-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={loop}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Unlimited candidates</h3>
                                <p className="body-small feature-matrix">Test as many candidates as you want on all our plans! We believe everyone should get a chance to prove their skills.</p>
                            </div>
                            <div id="w-node-b8ad8b5d82e9-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={search}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Talent pools</h3>
                                <p className="body-small feature-matrix">Search and filter candidates across all jobs you&#x27;ve tested over time. Utilize their tested skills to place in different jobs.</p>
                            </div>
                            <div id="w-node-cfc4bd7ba289-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={timer}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Timed questions &amp; tests</h3>
                                <p className="body-small feature-matrix">Limit the time to complete a specific question or for the entire test. One of many ways to eliminate cheating &amp; improve completion rates.</p>
                            </div>
                            <div id="w-node-0c75bbdfedb8-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={upload}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">File upload</h3>
                                <p className="body-small feature-matrix">Ask candidates to download any file type as part of a question. Let candidates upload any file type as their response. Think .pdf, .psd, .odt and any other!</p>
                            </div>
                            <div id="w-node-04e530527cb4-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={shareCandidate}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Share candidate cards</h3>
                                <p className="body-small feature-matrix">Make collaborative hiring decisions by sharing candidate details, and scores, with hiring managers and recruiters.</p>
                            </div>
                            <div id="w-node-9dba07b606bf-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={pallet}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Employer branded</h3>
                                <p className="body-small feature-matrix">Candidates will be immersed in your brand using your logo, colors and tone of voice.</p>
                            </div>
                            <div id="w-node-4a6ce121937d-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={chat}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Candidate messaging</h3>
                                <p className="body-small feature-matrix">Communicate with candidates without leaving the platform. Customize email templates for each test and automate them.</p>
                            </div>
                            <div id="w-node-2d25b1634a8e-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={magic}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Candidate magic links</h3>
                                <p className="body-small feature-matrix">Invite candidates to showcase their talent and they&#x27;ll seamlessly be taken into their test without having to create an account.</p>
                            </div>
                            <div id="w-node-a71c2e6e93b3-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={feedback}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Candidate status</h3>
                                <p className="body-small feature-matrix">Stay up to date  when candidates open your emails, start taking a test or complete it.</p>
                            </div>
                            <div id="w-node-1b51c7430665-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={insights}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Talent Insights</h3>
                                <p className="body-small feature-matrix">Create trackable links with a single click &amp; understand which sources perform best on your tests and double down on those.</p>
                            </div>
                            <div id="w-node-e187917f1144-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={video}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Video introduction</h3>
                                <p className="body-small feature-matrix">Attach a personalized video to the job application page or Talent Trial. An effective way to humanize the process and make it interactive.</p>
                            </div>
                            <div id="w-node-c29dc90e8c53-42626e59" className="feature-grid-wrapper">
                                <img
                                    src={responsive}
                                    width="30"
                                    height="30"
                                    alt=""
                                    className="feature-grid-icon"
                                />
                                <h3 className="h5 feature-matrix">Mobile friendly</h3>
                                <p className="body-small feature-matrix">Candidates can showcase their talent on any device. You can get work done on the go.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <h2 className="h3 centre feature-footer">Great people are worth it</h2>
                        <div className="body centre feature-footer">The cost of making the wrong hire can be up to 2.5x salary. That's easily over $100,000. Vervoe helps you identify the best people at under $100 per hire.</div>
                        <div className="cta-wrapper"><a href="https://app.vervoe.com/registration" className="cta-features w-button">Try Free</a>
                            <div className="text-below-cta">No Credit Card Required</div>
                        </div>
                        <div className="logobar-wrapper-feature">
                            <LogoBar classIndex={4} wrapperClass="black"/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Features;
