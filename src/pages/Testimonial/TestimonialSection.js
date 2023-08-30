
import React, { Component } from 'react';
import TestimoTag from './TestimoTag';

class TestimonialSection extends Component {

    state = {
        viewAll: this.props.viewAll
    };

    render() {
        const { viewAll } = this.state;
        const { title, talks } = this.props;
        return (
            <div className="testimo-features">
                <div className="testimo-top-title-section">
                    <div className="container w-container testimo-container">
                        <h2 className="top-title testimo">{title}</h2>
                    </div>
                </div>
                <div className="container w-container tag-container">
                    <div className="testimo-tablet-only">
                        <div className="tag-container">
                            {
                                talks.map(talk =>
                                    <TestimoTag talk={talk} column={0} viewAll={viewAll} key={talk.id} />
                                )
                            }
                        </div>
                    </div>
                    <div className="tag-column testimo-desktop-only">
                        <div className="tag-container" style={{ justifyContent: "flex-end" }}>
                            {
                                talks.map(talk => <TestimoTag talk={talk} column={1} viewAll={viewAll} key={talk.id} />)
                            }
                        </div>
                    </div>
                    <div className="tag-column testimo-desktop-only">
                        <div className="tag-container" style={{ justifyContent: "flex-start" }}>
                            {
                                talks.map(talk => <TestimoTag talk={talk} column={2} viewAll={viewAll} key={talk.id} />)
                            }
                        </div>
                    </div>
                </div>
                {(!viewAll) &&
                    <div className="section centered-cta">
                        <div className="container center btn w-container testimo-container">
                            <div className="testimonial-btn try-button seemore-button"
                                onClick={() => this.setState({ viewAll: 1 })}>
                                See more...
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '40px' }} className="desktop-only"></div>
                    </div>
                }
            </div>
        );
    };
}

export default TestimonialSection;