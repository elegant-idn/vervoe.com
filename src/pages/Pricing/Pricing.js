import React, { PureComponent } from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Modal from "../../components/Modal/Modal";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import { tania, startupRocket } from "../../assets/images";
import Tooltip from '../../components/Tooltip';
import tooltips from './tooltips';
import LogoBar from '../../components/LogoBar'

class Pricing extends PureComponent {
    state = {
        AUD: 0,
        tab: 1,
        showMore: false,
        modal: false
    };

    changeTab = (tab) => this.setState({ tab });


    toggleModal = () => this.setState({ modal: !this.state.modal });

    showDefaultPricing = () => {
        $( "#pricing_usd" ).show();
        $( "#pricing_aud" ).hide();
    };

    showAUSPricing = () => {
        $( "#pricing_aud" ).show();
        $( "#pricing_usd" ).hide();
    };

    onSuccess = (location) => {
        if (location.country.iso_code == "AU") {
            this.showAUSPricing();
            this.changeAudTab(1);
        } else {
            this.changeAudTab(0);
            this.showDefaultPricing();
        }
    };

    onError = (error) => {
        this.showDefaultPricing();
    };

    componentDidMount() {
        if (typeof geoip2 !== 'undefined') {
            geoip2.country(this.onSuccess, this.onError);
        }
    }

    renderTab = ({ currency, basicPrice, intelligentPrice, showExclude, yearly}) => (
        <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
            <div className="pricing-box-wrapper">
                <div className="pricing-box-item">
                    <h2 className="pricing-title">Basic</h2>
                    <h3 className="pricing-title pricing-subtitle">Skill testing for small teams</h3>
                    <div className={yearly ? 'currency-wrapper' : 'currency-wrapper simple'}>
                        <div className="currency">{currency}</div>
                        <h1 className="plan-price">{basicPrice}</h1>
                        <div className="month">/month</div>
                        {yearly &&
                            <div className="billed-annually">billed yearly</div>
                        }
                    </div>
                    <div className="light-blue pricing-feature-bg">
                        <h4 className="price-properties visibility-hidden">Basic</h4>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.unlimited_testing.name}>Unlimited Candidate Testing</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.customized_tt.name}>Customizable Expert Talent Trials</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.tt_creator.name}>Talent Trial Creator</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.video_audio.name}>Video &amp; Audio Testing</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.imm_testing.name}>Immersive Testing</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.up_to_10.name}>Up to 10 Hires Yearly</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.three_users.name}>3 User Seats</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.branded_experience.name}>Branded Candidate Experience</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.zapier.name}>Zapier Integration</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.online_supprot.name}>Online Chat Support</span>
                        </div>
                    </div>
                    <a href="https://app.vervoe.com/registration" className="link price-link">
                        Get Started
                    </a>
                </div>
                <div className="pricing-box-item">
                    <div className="ribbon">
                        <div className="ribbon-text">POPULAR</div>
                    </div>
                    <h2 className="pricing-title">Intelligent</h2>
                    <h3 className="pricing-title pricing-subtitle">AI-powered automation</h3>
                    <div className={yearly ? 'currency-wrapper' : 'currency-wrapper simple'}>
                        <div className="currency">{currency}</div>
                        <h1 className="plan-price">{intelligentPrice}</h1>
                        <div className="month">/month</div>
                        {yearly &&
                            <div className="billed-annually">billed yearly</div>
                        }
                    </div>
                    <div className="light-blue pricing-feature-bg">
                        <h4 className="price-properties">Everything in Basic, plus:</h4>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.ai_povered.name}>AI-Powered Grading of Talent Trials</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.inteligent_ranking.name}>Intelligent Candidate Ranking</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.job_reports.name} className="new">Job Insights &amp; Reports</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.bulk_actions.name} className="new">Bulk Candidate Actions</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.messaging.name} className="new">Direct Candidate Messaging</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.up_to_40.name}>Up to 40 Hires Yearly</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.unlimited_users.name}>Unlimited User Seats</span>
                        </div>
                    </div>
                    <a href="https://app.vervoe.com/registration" className="link price-link">
                        Get Started
                    </a>
                </div>
                <div className="pricing-box-item">
                    <h2 className="pricing-title">Pro</h2>
                    <h3 className="pricing-title pricing-subtitle">Large companies &amp; grad programs</h3>
                    <div className="currency-wrapper">
                        <img src={startupRocket} className="price-custom-icon"/>
                    </div>
                    <div className="light-blue pricing-feature-bg">
                        <h4 className="price-properties">Everything in Intelligent, plus:</h4>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.dedicated.name}>Dedicated Client Executive</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.io.name}>I/O Psychologist Talent Trial Design</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.custom_setup.name}>Custom Expert Setup</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.monitoring.name}>Monitoring of Hiring Effectiveness</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.candidate_engagement.name}>Candidate Engagement Reports</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.more_than_40.name}>More than 40 Hires Yearly</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.invoicing_payments.name}>Custom Invoicing &amp; Payment Terms</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.data_retention.name}>10 Year Data Retention</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.custom_integrations.name}>Custom ATS Integrations</span>
                        </div>
                        <div className="price-properties-2">
                            <span data-tip data-for={tooltips.priority.name}>Priority Phone Support</span>
                        </div>
                    </div>
                    <Link to="/demo" className="link price-link">
                        Inquire
                    </Link>
                </div>
            </div>
            { showExclude &&
                <div className="price-excludes-gst">Price excludes GST</div>
            }
        </div>
    );

    renderFirstTab = (AUD = false) => {
        const data = {
            currency: AUD ? 'AUD' : '$',
            basicPrice: AUD ? '129' : '99',
            intelligentPrice: AUD ? '529' : '399',
            showExclude: AUD,
            yearly: true
        };
        return this.renderTab(data);
    };

    renderSecondTab = (AUD = false) => {
        const data = {
            currency: AUD ? 'AUD' : '$',
            basicPrice: AUD ? '169' : '129',
            intelligentPrice: AUD ? '669' : '499',
            showExclude: AUD
        };
        return this.renderTab(data);
    };

    renderTooltips = () => (
        <div>
            {Object.values(tooltips).map((item) => (
                <Tooltip id={item.name} options={{position: item.position, className: 'tooltip_white hide-mob', effect: 'solid', delayHide: 100}}>
                    {item.content}
                </Tooltip>
            ))}
        </div>
    );

    changeAudTab = (AUD) => this.setState({ AUD });

    render() {
        const { AUD, modal, tab } = this.state;
        return (
            <div>
                <Modal show={modal} toggleModal={this.toggleModal}/>
                <MetaTags>
                    <title>Pricing | Vervoe</title>
                    <meta content="Register for free, you don&#x27;t even need a credit card.
                     You can start hiring immediately. Enjoy all of Vervoe&#x27;s features for 14 days
                     before choosing a plan." property="og:description" name="description"/>
                    <meta content="Pricing | Vervoe" property="og:title"/>
                </MetaTags>
                <div className="header pricing">
                    <NavMenu current="/pricing"/>
                    <div className="single-heading pricing">
                        <h2 className="heading pricing">How much of an unfair advantage do you want?</h2>
                    </div>
                    <div className="header-background" />
                    <div id="pricing_usd" className="container pricing usd">
                        <div data-easing="ease-in" data-duration-in="200" data-duration-out="200"
                             className="pricing-tabs w-tabs">
                            <div className="w-tab-menu">
                                <a data-w-tab="Tab 1" onClick={() => this.changeTab(1)}
                                    className={"pricing-tab-item w-inline-block w-tab-link" + (tab === 1 ? " w--current" : "")}>
                                    <div className="pricing-tab-text">Yearly</div>
                                </a>
                                <span className="pricing-tabs-divider"></span>
                                <a data-w-tab="Tab 2" onClick={() => this.changeTab(2)}
                                    className={"pricing-tab-item w-inline-block w-tab-link" + (tab === 2 ? " w--current" : "")}>
                                    <div>Monthly</div>
                                </a>
                            </div>
                            <div className="pricing-tab-content w-tab-content">
                                { tab === 1 ? this.renderFirstTab() : this.renderSecondTab() }
                            </div>
                        </div>
                    </div>
                    <div id="pricing_aud" className="container pricing aud">
                        <div data-easing="ease-in" data-duration-in="200" data-duration-out="200"
                             className="pricing-tabs w-tabs">
                            <div className="w-tab-menu">
                                <a data-w-tab="Tab 1" onClick={() => this.changeAudTab(1)}
                                    className={"pricing-tab-item w-inline-block w-tab-link" + (AUD === 1 ? " w--current" : "")}>
                                    <div className="pricing-tab-text">Yearly</div>
                                </a>
                                <span className="pricing-tabs-divider"></span>
                                <a data-w-tab="Tab 2"  onClick={() => this.changeAudTab(2)}
                                   className={"pricing-tab-item w-inline-block w-tab-link" + (AUD === 2 ? " w--current" : "")}>
                                    <div>Monthly</div>
                                </a>
                            </div>
                            <div className="pricing-tab-content w-tab-content">
                                { AUD === 1 ? this.renderFirstTab(true) : this.renderSecondTab(true) }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pricing-table"></div>
                <div className="logobar pricing-logobar">
                    <div className="logobar-container">
                        <div className="w-row">
                            <div className="text gray lb">
                                Over 4,000 companies trust Vervoe to uncover hidden talent.
                            </div>
                        </div>
                    </div>
                    <LogoBar classIndex={4} />
                </div>

                <div className="section">
                    <div className="w-container">
                        <div className="testimonial-wrapper pricing">
                            <div className="quote-icon">“</div>
                            <div className="quote-text">“We capitalized on Vervoe’s A.I. to efficiently assess and shortlist 1000’s of applications, increase diversity, and provide all applicants timely outcomes.”
                            </div>
                            <img src={tania} height="70" className="testimonial-avatar pricing"/>
                            <h4 className="author-name">Tania Dowling</h4>
                            <h4 className="author-position">Talent Acquisition Team Lead @ Australia Post</h4>
                        </div>
                    </div>
                </div>
                <div className="talk-to-us">
                    <a href="#" className="talk-to-us-button" onClick={this.toggleModal}>
                        Talk to Us
                    </a>
                </div>
                <div className="section light-blue faq">
                    <div className="container w-container">
                        <h1 className="heading pricing _2">Frequently Asked Questions</h1>
                        <div className="flexbox-wrapper">
                            <div className="faq-item">
                                <h4>What is an 'active job'?</h4>
                                <div className="faq-text">Every new role you want to fill is an 'active job', and you can hire as many people as you like into that role. You can deactivate your job and create a new one any time. Don't worry, deactivated jobs will still store all your data.
                                </div>
                            </div>
                            <div className="faq-item">
                                <h4>Once I sign up to a plan, am I locked in?</h4>
                                <div className="faq-text">Plans are either monthly or annual.  You can move between plans or cancel your subscription at any time from within the app. If you cancel, you’ll still be able to use the platform until the end of the subscription period. You can subscribe to a plan any time.
                                </div>
                            </div>
                        </div>
                        <div className="flexbox-wrapper">
                            <div className="faq-item">
                                <h4>Unlimited candidate testing? What’s the catch?</h4>
                                <div className="faq-text">We believe every candidate should have a chance to showcase their talent because our mission is to make hiring about merit. So why would we charge you based on how many candidates you evaluate?
                                </div>
                            </div>
                            <div className="faq-item">
                                <h4>How do I add candidates to Vervoe?</h4>
                                <div className="faq-text">You can easily invite candidates via email, share your job on social media or link it to your career site. You can even track the source of each candidate.
                                </div>
                            </div>
                        </div>
                        <div className="flexbox-wrapper">
                            <div className="faq-item">
                                <h4>What is a Talent Trial?</h4>
                                <div className="faq-text">Candidates get a chance to prove their skills by completing tasks they would normally do on the job. Here’s an example: Q1: Please edit this pitch document in Google Slides. Q2: Record a video explaining your answer to Q1.
                                </div>
                            </div>
                            <div className="faq-item">
                                <h4>How is Vervoe different to a video interviewing tool?</h4>
                                <div className="faq-text">Vervoe helps you see how candidates perform in real-world scenarios. This can include video, but Vervoe offers much more than your typical video interviewing tool.
                                </div>
                            </div>
                        </div>
                        <div className="flexbox-wrapper">
                            <div className="faq-item">
                                <h4>Is Vervoe an applicant tracking system?</h4>
                                <div className="faq-text">No. Vervoe is an AI-powered skill testing platform that helps you decide who to hire based on candidates performing job related tasks.
                                </div>
                            </div>
                            <div className="faq-item">
                                <h4>What is the candidate experience like?</h4>
                                <div className="faq-text">Candidates apply for a job, and can immediately get started without even registering. They are immersed in your brand, and receive live status updates so they always know where they stand.
                                </div>
                            </div>
                        </div>
                        <div className="flexbox-wrapper">
                            <div className="faq-item">
                                <h4>Who grades candidate responses?</h4>
                                <div className="faq-text">Vervoe’s machine learning algorithms automatically rank candidates based on how well they complete Talent Trials. This allows you to focus on the top candidates, and drill down on their responses.
                                </div>
                            </div>
                            <div className="faq-item">
                                <h4>What happens during the I/O psychologist review?</h4>
                                <div className="faq-text">Vervoe’s behavioral science team will review your hiring objectives and work with you to design tailored Talent Trials that suit your unique requirements.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderTooltips()}
                <Footer/>
            </div>
        );
    }
}

export default Pricing;
