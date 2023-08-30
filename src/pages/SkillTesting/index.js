// node modules
import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

// local components
import VideoSection from './components/VideoSection';
import Footer from '../../components/Footer/Footer';
import TryFreeBtn from './components/TryFreeBtn'
import HomeSectionOne from './components/HomeSectionOne'
import HomeSectionTwo from './components/HomeSectionTwo'
import HomeSectionThree from './components/HomeSectionThree'
import HomeSectionFour from './components/HomeSectionFour'
import HomeSectionFive from './components/HomeSectionFive'
import LogoTags from '../../components/LogoBar'
import Modal from "../../components/Modal/Modal";
import {
    akqa,
    allegis,
    australiapost,
    kforce,
    naspers
} from "../../assets/images";


class SkillTesting extends Component {
    state = {
        modal: false
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    render() {
        const { modal } = this.state;
        return (
            <div>
                <MetaTags>
                    <title>Use Skill Testing for Your Next Hire | Vervoe</title>
                    <meta content="Don’t rely on resumes. See how people do the job before they get the job. See them in action in real-world job scenarios."
                          property="og:description" name="description" />
                    <meta content="Use Skill Testing for Your Next Hire | Vervoe" property="og:title" />
                </MetaTags>
                <VideoSection/>
                <Modal
                    show={modal}
                    toggleModal={this.toggleModal}
                />
                <div className="home-main-text-section w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
                    <div className="home-text-line" />
                    <p className="home-main-text">
                        Vervoe&#x27;s advanced interviewing platform lets employers test the technical and personal skills of hundreds of candidates simultaneously, using simulations written by experts.
                    </p>
                </div>

                <HomeSectionOne />
                <div className="tryfree-container">
                    <TryFreeBtn />
                </div>

                <HomeSectionTwo />
                <HomeSectionThree />

                <div className="tryfree-container no-bottom">
                    <TryFreeBtn />
                </div>
                <HomeSectionFour />

                <HomeSectionFive />
                <div className="logobar">
                    <div className="logobar-wrapper">
                        <LogoTags
                            images={[akqa, allegis, australiapost, kforce, naspers]}
                        />
                    </div>
                    <div
                        style={{ width: '100%', height: '100px' }}
                        className="desktop-only"
                    >
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SkillTesting;
