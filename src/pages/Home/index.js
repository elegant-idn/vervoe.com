// node modules
import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

// local components
import VideoSection from './components/VideoSection';
import Footer from '../../components/Footer/Footer';
import LogoBar from '../../components/LogoBar'
import Charts from './components/Charts'
import Icons from './components/Icons'
import Features from './components/Features'
import FeaturedInHeader from './components/FeaturedInHeader'
import RequestButton from './components/RequestButton'
import Modal from "../../components/Modal/Modal";

class Home extends Component {
    state = {
        modal: false
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    render() {

        const { state: { modal }, toggleModal } = this

        return (
            <div>
                <MetaTags>
                    <title>Vervoe: AI-powered skill testing</title>
                    <meta content="Vervoe is an intelligent hiring platform that uncovers hidden talent through Talent Trials designed by leading industry experts. Vervoe uses machine learning to automatically rank candidates based on how they perform in real-world scenarios."
                          property="og:description" name="description"/>
                    <meta content="Vervoe: AI-powered skill testing" property="og:title"/>
                </MetaTags>

                <VideoSection />
                <Modal show={modal} toggleModal={toggleModal}/>
                <div className="logobar">
                    <div className="text gray lb">
                        Over 4,000 companies trust Vervoe to uncover hidden talent.
                    </div>
                    <LogoBar/>
                </div>
                <div className="home-main-text-section w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
                    <div className="home-text-line" />
                    <p className="home-main-text">
                        Vervoe&#x27;s advanced interviewing platform lets employers test the technical and personal skills of hundreds of candidates simultaneously, using simulations written by experts.
                    </p>
                </div>
                <Features/>
                <Icons/>
                <div className="diagonal-light-blue diagonal-line-2"></div>
                <RequestButton onClick={toggleModal}/>
                <Charts/>
                <FeaturedInHeader/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
