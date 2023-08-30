import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Modal from '../../components/Modal/Modal';
import NavMenu from '../../components/NavMenu/NavMenu';
import Footer from '../../components/Footer/Footer';
import {
    draggingGif,
    howCandidate_12,
    howCandidate_22,
    howCandidate_32, howCandidate_32_1204,
    howCandidate_32_500,
    howCandidate_32_800, howCandidate_42, howCandidate_52, howCandidate_52_1080, howCandidate_52_1200,
    howEmployer,
    howEmployer1,
    howEmployer1_1080,
    howEmployer1_1200,
    howEmployer1_800,
    howEmployer3,
    howEmployer3_1080,
    howEmployer3_1200,
    howEmployer4,
    howEmployer4_1080,
    howEmployer4_1200,
    howEmployer_1080,
    howEmployer_1200,
    howEmployer_500,
    howEmployer_800
} from '../../assets/images';

class HowItWorks extends Component {
    state = {
        tab: 1,
        modal: false
    };

    changeTab = (tab) => this.setState({ tab });

    toggleModal = () => this.setState({ modal: !this.state.modal });

    renderFirstTab = () => (
        <div className="w-tab-pane w--tab-active">
            <div className="container tabbed _1 w-container">
                <div className="flexbox-wrapper _1">
                    <div className="col-1">
                        <img src={howEmployer}
                            srcSet={[howEmployer_500, howEmployer_800, howEmployer_1080, howEmployer_1200]}
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 97vw, (max-width: 991px) 93vw, 46vw"
                            className="media"/>
                    </div>
                    <div className="col-2">
                        <h2 className="section-title how-it-works">Set up the interviewing process.</h2>
                        <p className="paragraph how-it-works">Select interview scripts and on-the-job
                            simulations created by experts from our library. Adjust the questions and
                            tasks as needed, or create your own. Add as many rounds of interviews as
                            necessary.</p>
                    </div>
                </div>
            </div>
            <div className="container tabbed _2 w-container">
                <div className="flexbox-wrapper _2">
                    <div className="col-1">
                        <h2 className="section-title how-it-works">Invite jobseekers to apply on
                            Vervoe.</h2>
                        <p className="paragraph how-it-works">Whether you advertise on job boards or
                            social platforms, candidates can apply in one click and start the
                            interviewing process right away!</p>
                    </div>
                    <div className="col-2">
                        <img src={howEmployer1}
                             srcSet={[howEmployer1_800, howEmployer1_1080, howEmployer1_1200]}
                             sizes="(max-width: 479px) 92vw, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 46vw"
                             className="media"/></div>
                </div>
            </div>
            <div className="container tabbed _3 w-container">
                <div className="flexbox-wrapper _1">
                    <div className="col-1">
                        <img src={howEmployer3}
                             srcSet={[howEmployer3_1080, howEmployer3_1200]}
                             sizes="(max-width: 479px) 92vw, (max-width: 767px) 97vw, (max-width: 991px) 93vw, 46vw"
                             className="media"/>
                        <div className="media-wrapper single-image"></div>
                    </div>
                    <div className="col-2">
                        <h2 className="section-title how-it-works">Review your candidates’
                            responses.</h2>
                        <p className="paragraph how-it-works">Be notified as soon as candidates complete
                            a stage of the interviewing process. Grade their answers, select who
                            advances to the next step. And let Vervoe automatically share status updates
                            with all candidates and collaborators involved.</p>
                    </div>
                </div>
            </div>
            <div className="container tabbed _4 w-container">
                <div className="flexbox-wrapper _2">
                    <div className="col-1">
                        <h2 className="section-title how-it-works">Only meet the very best.</h2>
                        <p className="paragraph how-it-works">Once you’ve identified the finalists, it’s
                            time to meet them face-to-face. Whether in-person, over video call, or
                            through a pre-recorded video, only spend time with the very best.</p>
                    </div>
                    <div className="col-2">
                        <img src={draggingGif} className="media"/>
                    </div>
                </div>
            </div>
            <div className="container tabbed _5 w-container">
                <div className="flexbox-wrapper _1">
                    <div className="col-1">
                        <img src={howEmployer4}
                             srcSet={[howEmployer4_1080, howEmployer4_1200]}
                             sizes="(max-width: 479px) 92vw, (max-width: 767px) 97vw, (max-width: 991px) 93vw, 46vw"
                             className="media"/>
                    </div>
                    <div className="col-2">
                        <h2 className="section-title how-it-works">Hire!</h2>
                        <p className="paragraph how-it-works">Collaborate with your team to gather
                            feedback on best applicants along the way. And when you’ve found the perfect
                            candidate, hire straight from the platform, it is that easy!</p>
                    </div>
                </div>
            </div>
            <div className="container center w-container">
                <a href="https://app.vervoe.com/registration" className="cta large w-button">
                    Try For Free
                </a>
                <div className="_2-column-field sales-text centered-sales-text">
                    <div className="text top-margin prefix gray">Or,</div>
                    <a href="#" className="text top-margin gray" data-ix="contact-sales" onClick={this.toggleModal}>
                        talk to us
                    </a>
                </div>
            </div>
        </div>
    );

    renderSecondTab = () => (
        <div className="w-tab-pane w--tab-active">
            <div className="container tabbed _1 w-container">
                <div className="flexbox-wrapper _1">
                    <div className="col-1">
                        <img src={howCandidate_12} className="media"/>
                    </div>
                    <div className="col-2">
                        <h2 className="section-title how-it-works">Candidates start the interviewing
                            process as soon as they apply.</h2>
                        <p className="paragraph how-it-works">No matter where candidates come across
                            your job posting, they can apply right away on Vervoe. Vervoe takes them
                            through the interview stages seamlessly, and notifies you each time they
                            complete a step. Voila!</p>
                    </div>
                </div>
            </div>
            <div className="container tabbed _2 w-container">
                <div className="flexbox-wrapper _2">
                    <div className="col-1">
                        <h2 className="section-title how-it-works">Vervoe guides all applicants through
                            the process, automatically.</h2>
                        <p className="paragraph how-it-works">Vervoe emails candidates each time an
                            action is required or a decision made about their application. The platform
                            also shows them where they stand in the process at all times. And they can
                            chat with us, always.</p>
                    </div>
                    <div className="col-2">
                        <img src={howCandidate_22} className="media"/>
                    </div>
                </div>
            </div>
            <div className="container tabbed _3 w-container">
                <div className="flexbox-wrapper _1">
                    <div className="col-1">
                        <img src={howCandidate_32}
                             srcSet={[howCandidate_32_500, howCandidate_32_800, howCandidate_32_1204]}
                             sizes="(max-width: 479px) 92vw, (max-width: 767px) 97vw, (max-width: 991px) 93vw, 46vw"
                             className="media"/>
                    </div>
                    <div className="col-2">
                        <h2 className="section-title how-it-works">Candidates can show their true value
                            through tailored interviews and simulations.</h2>
                        <p className="paragraph how-it-works">Whether candidates take customized tests,
                            share work samples, or complete on-the-job tasks, you will be able to judge
                            who they truly are and what their real potential is. Hire based on merit,
                            not imperfect resumes.</p>
                    </div>
                </div>
            </div>
            <div className="container tabbed _4 w-container">
                <div className="flexbox-wrapper _2">
                    <div className="col-1">
                        <h2 className="section-title how-it-works">Interviewees have many other ways to
                            show their know-how and motivation.</h2>
                        <p className="paragraph how-it-works">Vervoe gives candidates the option to
                            customize their profile and use file uploads, audio or video recordings to
                            bring their application to life. Let’s raise the bar in hiring and be ready
                            to be dazzled!</p>
                    </div>
                    <div className="col-2">
                        <img src={howCandidate_42} className="media"/>
                    </div>
                </div>
            </div>
            <div className="container tabbed _5 w-container">
                <div className="flexbox-wrapper _1">
                    <div className="col-1">
                        <img src={howCandidate_52}
                             srcSet={[howCandidate_52_1080, howCandidate_52_1200]}
                             sizes="(max-width: 479px) 92vw, (max-width: 767px) 97vw, (max-width: 991px) 93vw, 46vw"
                             className="media"/>
                    </div>
                    <div className="col-2">
                        <h2 className="section-title how-it-works">Hire!</h2>
                        <p className="paragraph how-it-works">Collaborate with your team to gather
                            feedback on best applicants along the way. And when you’ve found the perfect
                            candidate, hire straight from the platform, it is that easy!</p>
                    </div>
                </div>
            </div>
            <div className="container center w-container">
                <a href="https://app.vervoe.com/registration" className="cta large w-button">
                    Try For Free
                </a>
                <div className="_2-column-field sales-text centered-sales-text">
                    <div className="text top-margin prefix gray">Or,</div>
                    <a href="#" className="text top-margin gray" data-ix="contact-sales" onClick={this.toggleModal}>
                        talk to us
                    </a>
                </div>
            </div>
        </div>
    );

    render() {
        const { modal, tab } = this.state;
        return (
            <div>
                <Modal show={modal} toggleModal={this.toggleModal}/>
                <MetaTags>
                    <title>How It Works | Vervoe</title>
                    <meta content="See how easy it is to hire using online simulations.
                    Advertise your job, set up the interviewing process, review candidates&#x27;
                     responses and only meet the best." property="og:description" name="description"/>
                    <meta content="How It Works | Vervoe" property="og:title"/>
                </MetaTags>
                <div className="header how-it-works">
                    <NavMenu current="/how-it-works"/>
                    <div className="container w-container">
                        <div className="single-heading">
                            <h1 className="heading single">HOW VERVOE WORKS</h1>
                        </div>
                    </div>
                </div>
                <div className="section tabs">
                    <div data-duration-in="300" data-duration-out="100" className="w-tabs">
                        <div className="tab-menu w-tab-menu">
                            <a onClick={() => this.changeTab(1)}
                               className={"tab-item w-inline-block w-tab-link" + (tab === 1 ? " w--current" : "")}>
                                <div className="tab-text">FOR EMPLOYERS</div>
                            </a>
                            <a onClick={() => this.changeTab(2)}
                               className={"tab-item w-inline-block w-tab-link" + (tab === 2 ? " w--current" : "")}>
                                <div className="tab-text">FOR CANDIDATES</div>
                            </a>
                        </div>
                        <div className="w-tab-content">
                            { tab === 1 ? this.renderFirstTab() : this.renderSecondTab() }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default HowItWorks;
