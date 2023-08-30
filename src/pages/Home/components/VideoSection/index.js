import React, { PureComponent } from 'react';
import Video from '../../../../components/Video';
import NavMenu from '../../../../components/NavMenu/NavMenu';
import HeadingHomeButtonWrapper from '../HeadingHomeButtonWrapper'
import videoSrc from './videoSources'

const initialState = {
    email: '',
    errorMessage: '',
    spinner: false,
    submitForm: false,
    success: false,
    visible: false
};

const emailError = 'Please enter a valid E-mail';

class VideoSection extends PureComponent {
    state = {
        ...initialState
    };

    handleResponse = ({ success, errorMessage }) => {
        const message = errorMessage || 'Unexpected error has occurred, please try again later!';
        this.setState({ errorMessage: message, submitForm: true, success, spinner: false });
    };

    closeMessage = (visible) => this.setState({ ...initialState, visible });

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    testDriveMail = (e) => {
        e.preventDefault();
        const { email } = this.state;
        if (!this.validateEmail(email)) {
            this.setState({ errorMessage: emailError, submitForm: true });
            return;
        }

        this.setState({ spinner: true });
        const data = new FormData();
        data.append('email', email);
        data.append('opportunity_slug', 'tester-3');
        data.append('company_slug', 'testp');
        fetch(`${BASE_URL}/api/send_demo_magic_link`, {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(json => this.handleResponse(json));
    };

    handleChange = (e) => this.setState({ email: e.target.value });

    render() {
        const { email, errorMessage, spinner, submitForm, success } = this.state
        return (
            <header className="header">
                <NavMenu current='/'/>
                <div className="container w-container home-container home-header-container">
                    <div className="heading-wrapper">
                        <h1 className="heading bold">Uncover hidden talent, fast.</h1>
                        <h3 className="sub-heading video-section">
                            Use AI-powered skill testing to hire the best people.<br/>
                            Candidates showcase their talent in real-world scenarios, and AI recommends the top performers.
                        </h3>
                        <HeadingHomeButtonWrapper/>
                    </div>
                </div>
                <Video source={videoSrc}/>
                { submitForm &&
                <div
                    className="modal-wrapper"
                    onClick={() => this.closeMessage(false)}>
                    <div
                        className="contact-us-wrapper instructions-message"
                        onClick={ (e) => e.stopPropagation() }
                    >
                        {!success && <div className="form-wrapper popup-form">
                            <div className="form-wrapper__p">
                                <h3 className="header-home__email-heading">
                                    Enter your email to put yourself in your candidate’s shoes
                                </h3>
                                <div className="header-home__email">
                                    <label
                                        htmlFor="email-text"
                                        className="header-home__email-label"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email-text"
                                        className="header-home__email-field"
                                        placeholder="john@smith.com"
                                        value={email}
                                        onChange={this.handleChange}
                                    />

                                    {
                                        errorMessage &&
                                        <p
                                            id="email-text"
                                            className="header-home__email-error"
                                        >
                                            Please enter a valid E-mail
                                        </p>
                                    }
                                    { success &&
                                    <div>
                                        We’ve sent an email to <span style={{fontWeight: '400'}}>{email}</span> with
                                        an invitation to try out a candidate experience. Remember, what you see from
                                        here
                                        will be from your candidates’ perspective. Please head over to your email and
                                        take it for a ride.
                                    </div>
                                    }
                                </div>
                                <a
                                    href="#"
                                    onClick = {this.testDriveMail}
                                    className="w-button instructions-button">
                                    {!spinner && 'Take it for a spin'}
                                    {spinner && 'Sending...'}
                                    {spinner && <div className="loader" />}
                                </a>
                            </div>
                        </div>}
                        {
                            success &&
                            <div className="success-email-send">
                                <div className="success-email-send__svg" />
                                <p className="success-email-send__text">
                                    Email sent successfully!
                                </p>
                                <p className="success-email-send__text">
                                    Check your inbox
                                </p>
                                <a
                                    href="#"
                                    onClick={() => this.closeMessage(false)}
                                    className="cta light-background w-button success-email-button">
                                    Got it
                                </a>
                            </div>
                        }
                    </div>
                </div>
                }
            </header>
        );
    }
}

export default VideoSection;


