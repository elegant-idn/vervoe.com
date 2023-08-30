import React, { PureComponent } from 'react';

class Modal extends PureComponent {
    state = {
        submitForm: false,
        success: false
    };

    handleResponse = ({ success }) => {
        this.setState({ submitForm: true, success });
        setTimeout(() => {
            this.props.toggleModal();
            this.setState({ submitForm: false, success: false });
        }, 3500)
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
        const { show, toggleModal } = this.props;
        const { submitForm, success } = this.state;

        if (!show) {
            return null;
        }
        return (
            <div className="modal-wrapper">
                <div className="contact-us-wrapper">
                    <div className="form-wrapper popup-form">
                        <div className="w-form">
                            {!submitForm && <form onSubmit={this.submitForm}>
                                <div className="_2-column-field justify-end" style={{ maxWidth: '100%'}}>
                                    <a
                                        href="#"
                                        className="text label close-modal"
                                        data-ix="new-interaction-3"
                                        onClick={toggleModal}
                                    >
                                        X
                                    </a>
                                </div>
                                <div className="_1-column-field">
                                    <h3 className="section-title home popup-title">Our friendly team will be in touch
                                        shortly</h3>
                                </div>
                                <div className="_2-column-field" style={{ maxWidth: '100%'}}>
                                    <div className="field-item field-left">
                                        <label htmlFor="firstName" className="label">First Name*</label>
                                        <input type="text" className="text-field w-input" maxLength="256"
                                               name="firstName" required="true"/>
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
                                    <input type="text" className="text-field w-input" maxLength="256" name="website"
                                           id="Company-Website-CS"/>
                                    <label htmlFor="size" className="label">How many people work at your
                                        company?</label>
                                    <select id="Employees" name="size" data-name="Employees"
                                            className="drop-down-list w-select">
                                        <option value="1-10">1-10</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51-200">51-200</option>
                                        <option value="201-1000">201-1000</option>
                                        <option value="1001-5000">1001-5000</option>
                                        <option value="More Than 5000">More Than 5000</option>
                                    </select>
                                </div>
                                <input type="hidden" name="formName" value="Contact-Sales"/>
                                <button className="button large full w-button">
                                    Submit
                                </button>
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
        );
    };
}

export default Modal;
