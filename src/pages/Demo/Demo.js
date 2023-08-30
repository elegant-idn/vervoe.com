import React, { PureComponent } from 'react';
import MetaTags from 'react-meta-tags';
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import { jeff } from '../../assets/images';

class Demo extends PureComponent {
    state = {
        submitForm: false,
        success: false
    };

    handleResponse = ({ success }) => {
        this.setState({ submitForm: true, success });
    };

    submitForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch(`${BASE_URL}/api/public/contact/form`, {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(json => this.handleResponse(json))
    };

    smoothScroll = (id) => {
        const myEl = $(`#${id}`);
        $('html, body').animate({ scrollTop: myEl.offset().top }, 400);
    };

    render() {
        const { submitForm, success } = this.state;
        return (
            <div>
                <MetaTags>
                    <title>Demo | Vervoe</title>
                    <meta content="Want to hire great people, fast? Get a guided tour of Vervoe. Book a free demo with
                    our friendly team at a time that suits you." property="og:description" name="description"/>
                    <meta content="Demo | Vervoe" property="og:title"/>
                </MetaTags>
                <div className="header demo">
                    <NavMenu current="/demo"/>
                    <div className="container w-container">
                        <div className="single-heading demo">
                            <h1 className="heading sentence-case demo">
                                Learn more about Vervoe
                            </h1>
                            <h2 className="sub-heading center">
                                Schedule a time to speak to our friendly team.
                            </h2>
                            <a href="#" onClick={() => this.smoothScroll('form')} className="demo-arrow w-inline-block"/>
                        </div>
                    </div>
                </div>
                <div id="form" className="section light-blue">
                    <div className="container demo w-container">
                        <div className="form-wrapper">
                            <div className="w-form">
                                {!submitForm && <form onSubmit={this.submitForm}>
                                    <div className="_2-column-field" style={{ maxWidth: '100%'}}>
                                        <div className="field-item field-left">
                                            <label htmlFor="firstName" className="label">First Name*</label>
                                            <input type="text" className="text-field w-input" maxLength="256"
                                                   name="firstName"
                                                   required="true"/>
                                        </div>
                                        <div className="field-item">
                                            <label htmlFor="lastName" className="label">Last Name*</label>
                                            <input type="text" className="text-field w-input" maxLength="256"
                                                   name="lastName" required="true"/>
                                        </div>
                                    </div>
                                    <div className="_1-column-field">
                                        <label htmlFor="email" className="label">Email*</label>
                                        <input type="email" className="text-field w-input" maxLength="256" name="email"
                                               required="true"/>
                                        <label htmlFor="company" className="label">Company Name*</label>
                                        <input type="text" className="text-field w-input" maxLength="256" name="company"
                                               required="true"/>
                                        <label htmlFor="website" className="label">Company Website</label>
                                        <input type="text" className="text-field w-input" maxLength="256"
                                               name="website"/>
                                        <label htmlFor="size" className="label">How many people work at your
                                            company?</label>
                                        <select name="size" className="drop-down-list w-select">
                                            <option value="1-10">1-10</option>
                                            <option value="11-50">11-50</option>
                                            <option value="51-200">51-200</option>
                                            <option value="201-1000">201-1000</option>
                                            <option value="1001-5000">1001-5000</option>
                                            <option value="More Than 5000">More Than 5000</option>
                                        </select>
                                    </div>
                                    <input type="hidden" name="formName" value="Demo"/>
                                    <input type="submit" value="Submit" className="button large full w-button"/>
                                </form>
                                }
                                { submitForm && success &&
                                <div className="success-message w-form-done">
                                    <div>Thank you! Your submission has been received, and we&#x27;ll be in touch shortly.</div>
                                </div>
                                }
                                { submitForm && !success &&
                                <div className="error-message w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="w-container">
                        <div className="testimonial-wrapper demo">
                            <img src={jeff} height="100" className="testimonial-avatar"/>
                            <h1 className="author-name">Jeff Holcomb</h1>
                            <h4 className="author-position">CEO @ Altus Traffic Management</h4>
                            <div className="testimonial-text">&quot;So much of recruiting technology is about how hiring
                                managers should interview less people ... whereas these guys said &#x27;nope, we should give
                                every candidate a chance. We should interview everyone&#x27;. ... That&#x27;s what gets me
                                excited about Vervoe. They see the problem differently and they&#x27;ve built world class
                                tech to solve said problem.&quot;</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Demo;
