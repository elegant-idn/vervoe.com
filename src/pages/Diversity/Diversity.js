import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";

const Diversity = () => {
    return (
        <div>
            <MetaTags>
                <title>Our Commitment to Diversity | Vervoe</title>
                <meta content="Companies with a diverse workforce perform better. Vervoe removes bias by interviewing everyone, automatically, to help you build a better company."
                      property="og:description" name="description"/>
                <meta content="Our Commitment to Diversity | Vervoe" property="og:title"/>
            </MetaTags>
            <div className="header diversity-at-work">
                <NavMenu/>
                <div className="container w-container">
                    <div className="single-heading diversity">
                        <h1 className="heading center diversity">DIVERSE COMPANIES<br/>PERFORM BETTER</h1>
                    </div>
                </div>
            </div>
            <div className="section light-blue quote">
                <div className="container diversity w-container">
                    <div className="quote-wrapper">
                        <div className="quote-icon">“</div>
                        <div className="quote-text">Vervoe removes bias by interviewing everyone, automatically, to help
                            you build a better company.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section diversity">
                <div className="container diversity w-container">
                    <div className="our-story-wrapper _1">
                        <h2 className="heading dark diversity">DIVERSITY DRIVES PERFORMANCE</h2>
                        <div className="heading small-dark">Companies with a diverse workforce perform better. Why?
                        </div>
                        <div className="paragraph diversity-at-work">Because they bring people with <strong
                            className="bold-blue-text">different backgrounds, varying personalities, and different
                            levels of experience to foster creativity</strong> and offer a range of viewpoints and
                            ideas.
                        </div>
                        <div className="paragraph diversity-at-work">The proofs are countless. Here are a few
                            examples:
                        </div>
                    </div>
                </div>
            </div>
            <div className="section colors">
                <div className="flexbox-wrapper colors">
                    <div className="color-box _1">
                        <div className="paragraph light-text">Firms with more female executives are more profitable - as
                            demonstrated in this <a
                                href="https://piie.com/publications/working-papers/gender-diversity-profitable-evidence-global-survey"
                                target="_blank" className="link light">study</a> from the PIIE
                        </div>
                    </div>
                    <div className="color-box _2">
                        <div className="paragraph light-text">According to <a
                            href="https://www.mckinsey.com/business-functions/organization/our-insights/why-diversity-matters"
                            target="_blank" className="link light">McKinsey</a>, racial and ethnic diversity improves
                            financial performance even more than gender diversity alone.
                        </div>
                    </div>
                    <div className="color-box _3">
                        <div className="paragraph light-text">Diverse companies are in a better position to win top
                            talent and improve customer satisfaction, employee satisfaction, and decision making - that
                            same <a
                                href="https://www.mckinsey.com/business-functions/organization/our-insights/why-diversity-matters"
                                target="_blank" className="link light">study</a> shows
                        </div>
                    </div>
                </div>
            </div>
            <div className="section diversity">
                <div className="container diversity w-container">
                    <div className="our-story-wrapper _1">
                        <h2 className="heading dark diversity">HOW DO YOU ACHIEVE DIVERSITY IN THE WORKPLACE?</h2>
                        <div className="paragraph diversity-at-work">Achieving diversity means <strong
                            className="bold-blue-text">striving for the right balance of diverse attributes</strong> in
                            your team, while <strong className="bold-blue-text">removing unconscious bias in the hiring
                                process.</strong></div>
                        <div className="paragraph diversity-at-work"><strong className="bold-blue-text">Consider the
                            multiple facets of diversity.</strong><br/>Beyond gender equality or a good racial, ethnic,
                            or age mix, diversity in the workplace could take many forms: employees’ origin, education,
                            experience, personality, religion, sexual orientation, physical ability, family status,
                            lifestyle, skills, etc.</div>
                        <div className="paragraph diversity-at-work"><strong className="bold-blue-text">Be aware of and
                            eliminate any unconscious bias when hiring.</strong><br/>Bias can be found in the wording of
                            the job description itself, in where the candidates are being sourced, or in the simple act
                            of relying too much on employee referrals - which tend to bring a similar type of
                            candidates.</div>
                        <div className="paragraph diversity-at-work">Want to know how Vervoe can help you achieve
                            diversity? See our commitment below.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section image-background">
                <h1 className="heading center diversity _2">OUR COMMITMENT TO DIVERSITY</h1>
            </div>
            <div className="section diversity">
                <div className="container diversity w-container">
                    <div className="flexbox-wrapper number-texts _1">
                        <div className="number-1">
                            <div className="big-number _1">1</div>
                        </div>
                        <div className="number-text _1">
                            <div className="paragraph number-description"><strong className="bold-blue-text">It is
                                written in our mission and it is how our team and partners behave every
                                day.</strong> “We are reinventing the recruiting experience to make it effective, fair,
                                and enjoyable.”
                            </div>
                        </div>
                    </div>
                    <div className="flexbox-wrapper number-texts _2">
                        <div className="number-text _2">
                            <div className="paragraph number-description">We believe that <strong
                                className="bold-blue-text">hiring should be based on merit</strong>, not resumes. By
                                assessing everyone with standardized questions and tasks, our platform makes
                                employers <strong className="bold-blue-text">look forward into a candidate’s
                                    potential</strong> - what he or she can do - <strong className="bold-blue-text">and
                                    not backwards</strong> - what country, school, or company they come from.
                            </div>
                        </div>
                        <div className="number-1">
                            <div className="big-number _2">2</div>
                        </div>
                    </div>
                    <div className="flexbox-wrapper number-texts _3">
                        <div className="number-1">
                            <div className="big-number _3">3</div>
                        </div>
                        <div className="number-text _1">
                            <div className="paragraph number-description">By helping employers craft unbiased job
                                descriptions; by allowing them to source candidates from multiple job boards - including
                                diversity-focused sites; and by providing them with online interviews and simulations to
                                form fair opinions of candidates based on how they respond and regardless of their
                                background or experience, <strong className="bold-blue-text">Vervoe promotes diversity
                                    at each and every step of the hiring process.</strong></div>
                        </div>
                    </div>
                    <h3 className="heading bottom">That’s diversity at work. Want to learn more?
                        <Link to="how-it-works" target="_blank" className="link"> See here.</Link>
                    </h3>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Diversity;
