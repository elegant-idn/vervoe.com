import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Footer from "../../components/Footer/Footer";
import NavMenu from "../../components/NavMenu/NavMenu";

class CustomPlan extends Component {
    smoothScroll = (id) => {
        const myEl = $(`#${id}`);
        $('html, body').animate({ scrollTop: myEl.offset().top }, 400);
    };

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

    render() {
        const { submitForm, success } = this.state;
        return (
            <div>
                <MetaTags>
                    <title>Custom Plan Inquiry | Vervoe</title>
                    <meta content="Need more job opportunities? Let&#x27;s talk about how we can help."
                          property="og:description" name="description"/>
                    <meta content="Custom Plan Inquiry | Vervoe" property="og:title"/>
                </MetaTags>
                <div className="header demo">
                    <NavMenu/>
                    <div className="container w-container">
                        <div className="single-heading demo">
                            <h1 className="heading sentence-case demo">Need More Active Jobs?</h1>
                            <h2 className="sub-heading center">No Problem! We can customize your plan.</h2>
                            <a href="#" onClick={() => this.smoothScroll('form')} className="demo-arrow w-inline-block"/>

                        </div>
                    </div>
                </div>
                <div id="form" className="section light-blue">
                    <div className="container demo w-container">
                        <div className="form-wrapper">
                            <div className="w-form">
                                <p className="_2-column-field paragraph" style={{ maxWidth: '100%'}}>Let us know the details on your request and how we
                                    can help customize a plan that will fit your business. Just fill out the form and a
                                    Vervoe rep will be in touch to discuss the details of your request.</p>
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
                                        <label htmlFor="details" className="label">Details of inquiry</label>
                                        <textarea name="details" maxLength="5000" className="w-input"/>
                                    </div>
                                    <input type="hidden" name="formName" value="CustomPlan"/>
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
                <Footer/>
            </div>
        );
    }
}

export default CustomPlan;
