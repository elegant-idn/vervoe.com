import React, { PureComponent } from 'react';
import Modal from "../../components/Modal/Modal";
import MetaTags from 'react-meta-tags';
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import TeamMember from "./TeamMember/TeamMember";
import { members } from "./TeamMembers";

class About extends PureComponent {
    renderEmployees = ({ name, imgSrc, position, linkedinUrl, twitterUrl }) => (
        <TeamMember
          key={name}
          name={name}
          imgSrc={imgSrc}
          position={position}
          linkedinUrl={linkedinUrl}
          twitterUrl={twitterUrl}
        />
    );
    
    state = {
        modal: false
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    render() {
        return (
            <div>
                <Modal show={this.state.modal} toggleModal={this.toggleModal}/>
                <MetaTags>
                    <title>About Us: Rethinking the Hiring Process  | Vervoe</title>
                    <meta
                        content="At Vervoe, our mission is to fundamentally transform the hiring process from mediocracy to meritocracy with AI-powered skill testing."
                        property="og:description" name="description"/>
                    <meta content="About Us: Rethinking the Hiring Process  | Vervoe" property="og:title"/>
                </MetaTags>
                <div className="header story">
                    <NavMenu/>
                    <div className="container story w-container">
                        <div className="single-heading story">
                            <h1 className="heading center story">A NEW RECRUITING EXPERIENCE.</h1>
                        </div>
                    </div>
                </div>
                <div className="section light-blue">
                    <div className="container w-container">
                        <div className="quote-wrapper story">
                            <div className="quote-icon">“</div>
                            <div className="quote-text">
                                At Vervoe, our mission is to fundamentally transform the hiring process from mediocracy
                                to meritocracy.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container w-container">
                        <div className="our-story-wrapper">
                            <h2 className="heading dark">OUR STORY</h2>
                            <div className="paragraph our-story dark">Vervoe was built because, while everyone
                                recognizes
                                that hiring is painful, nobody was solving the problem in the right way.
                            </div>
                            <div className="paragraph our-story">Disqualifying people based on their résumé is both
                                inefficient and unfair. Too much time is wasted meeting people who look good on paper,
                                while
                                some of the hidden gems get overlooked.
                            </div>
                            <div className="paragraph our-story">Vervoe shifts the focus from deciding who to interview
                                to
                                deciding who performs well in the interview itself, giving everyone a chance to do so.
                            </div>
                            <div className="paragraph our-story">Today it matters less what university someone attended
                                or
                                how many LinkedIn connections they have. What really matters is how well people can do
                                the
                                job, and how they can contribute to a company’s culture.
                            </div>
                            <div className="paragraph our-story">We believe there is a perfect job out there for
                                everyone
                                and we are focused on creating a platform to help employers and candidates find that
                                perfect
                                fit.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section about">
                    <div className="container w-container">
                        <div className="about-wrapper">
                            <div className="paragraph about">“Instead of focusing on more ways to rule people out, we’re
                                creating better ways to give people an opportunity to show what they can do, faster.
                                That’s
                                the type of innovation our clients expect from us.”
                            </div>
                            <div className="paragraph about-author">- Omer Molad, Vervoe Co-founder and CEO</div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container w-container">
                        <h2 className="heading dark">THIS IS WHAT WE CARE ABOUT</h2>
                        <div className="flexbox-wrapper care">
                            <div className="col-1 w-clearfix">
                                <h3 className="care-number">01</h3>
                                <h1 className="care-title">Integrity first</h1>
                                <div className="care-text">We want to be trusted by our clients, so first we must build
                                    a
                                    culture of trust within our company. Before skills, or anything else, we value
                                    integrity. We expect all our people to be honest, respectful and responsible.
                                </div>
                            </div>
                            <div className="col-1 w-clearfix">
                                <h3 className="care-number">02</h3>
                                <h1 className="care-title">Grit before talent</h1>
                                <div className="care-text">Talent is meaningless if it is wasted. We reward people who
                                    work
                                    hard to get the best out of themselves, go the extra mile and never give up. People
                                    who
                                    do that improve their skills and grow. They become more talented over time.
                                </div>
                            </div>
                            <div className="col-1 w-clearfix">
                                <h3 className="care-number">03</h3>
                                <h1 className="care-title">Tenacity</h1>
                                <div className="care-text">Succeeding against the odds requires courage, and sometimes
                                    pain.
                                    Tenacious people dare to go where others won’t. They experiment and take risks. They
                                    face their fears. That’s how we overcome adversity, we face it head on.
                                </div>
                            </div>
                        </div>
                        <div className="flexbox-wrapper care">
                            <div className="col-1 w-clearfix">
                                <h3 className="care-number">04</h3>
                                <h1 className="care-title">Feedback is a gift</h1>
                                <div className="care-text">We actively seek feedback from our customers, from each other
                                    and
                                    from the market, even when it’s difficult to hear. That’s how we ensure we’ll
                                    continue
                                    to improve.
                                </div>
                            </div>
                            <div className="col-1 w-clearfix">
                                <h3 className="care-number">05</h3>
                                <h1 className="care-title">Ambiguity tolerance</h1>
                                <div className="care-text">People who roll with the punches and fearlessly face into
                                    ambiguity, and uncertainty, tend to succeed in our company. We move quickly and, for
                                    some, that can seem daunting. We see ambiguity as an opportunity, not a threat.
                                </div>
                            </div>
                            <div className="col-1 w-clearfix">
                                <h3 className="care-number">06</h3>
                                <h1 className="care-title">Never stay the same</h1>
                                <div className="care-text">Our team is made up of people who buy into our mission and
                                    contribute to, not just fit in with, our culture. We never want to stand still
                                    because
                                    the world around us doesn&#x27;t either. Every day brings something new.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section leadership"></div>
                <div className="section">
                    <div className="container leadership w-container">
                        <h2 className="heading dark">Founders</h2>
                        <div className="flexbox-wrapper leadership founders">
                            {members.slice(0, 2).map(this.renderEmployees)}
                        </div>
                        <h2 className="heading dark">Team</h2>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(2, 5).map(this.renderEmployees)}
                        </div>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(5, 8).map(this.renderEmployees)}
                        </div>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(8, 11).map(this.renderEmployees)}
                        </div>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(11, 14).map(this.renderEmployees)}
                        </div>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(14, 17).map(this.renderEmployees)}
                        </div>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(17, 20).map(this.renderEmployees)}
                        </div>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(20, 23).map(this.renderEmployees)}
                        </div>
                        <h2 className="heading dark">Advisors</h2>
                        <div className="flexbox-wrapper leadership">
                            {members.slice(23, 26).map(this.renderEmployees)}
                        </div>
                    </div>
                </div>
                <div className="talk-to-us">
                    <a href="#" className="talk-to-us-button" onClick={this.toggleModal}>Talk to Us</a>
                </div>
                <div className="section about-footer-image"></div>
                <Footer/>
            </div>
        )
    }
}

export default About;
