import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from '../../components/Footer/Footer';
import TestimonialSection from './TestimonialSection';
import TestimonialEndSection from './TestimonialEndSection';

import { talks_1, talks_2, talks_3 } from './talks.js';

import {
    homeHomeHeroDesktop,
    homeHomeHeroMobile,
    allegis, australiapost, naspers, akqa, kforce
} from "../../assets/images";
import Modal from "../../components/Modal/Modal";


class Testimonial extends Component {
    state = {
        modal: false
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    render() {
        const { modal } = this.state;
        return (
            <div>
                <MetaTags>
                    <title>Read Job Candidate Success Stories | Vervoe</title>
                    <meta content="Vervoe helps job candidates showcase their talent everyday. 
                                    Read their testimonials and find out how you can nail 
                                    your next job interview with our real world skill tests."
                        property="og:description" name="description" />
                    <meta content="Read Job Candidate Success Stories | Vervoe" property="og:title" />
                </MetaTags>
                <div className="header-testimo">
                    <NavMenu />
                    <div className="testimo-desktop-only">
                        <div >
                            <img src={homeHomeHeroDesktop} className="testimo-bg-hero" />
                        </div>
                    </div>
                    <div className="testimo-tablet-only">
                        <div >
                            <img src={homeHomeHeroMobile} className="testimo-bg-hero" />
                        </div>
                    </div>
                    <div className="heading-testimo">
                        Vervoe helps thousands of candidates showcase their talent
                    </div>
                </div>
                <Modal show={modal} toggleModal={this.toggleModal} />
                <div className="home-main-text-section w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
                    <div className="home-text-line" />
                    <p className="home-main-text">Vervoe&#x27;s advanced interviewing platform lets employers
                                         test the technical and personal skills of hundreds of candidates simultaneously, 
                                         using simulations written by experts.</p>
                </div>

                <TestimonialSection title="They get an equal opportunity" talks={talks_1} viewAll={0} />

                <div style={{ width: '100%', height: '40px' }} className="testimo-desktop-only"></div>
                <TestimonialSection title="They save time" talks={talks_2} viewAll={0} />

                <div style={{ width: '100%', height: '40px' }} className="testimo-desktop-only"></div>
                <TestimonialSection title="They love the experience" talks={talks_3} viewAll={1} />
                <div style={{ width: '100%', height: '90px' }} className="testimo-desktop-only"></div>

                <TestimonialEndSection />
                <Footer />
            </div>
        );
    }
}

export default Testimonial;
