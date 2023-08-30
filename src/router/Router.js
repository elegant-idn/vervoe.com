import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import MetaTags from 'react-meta-tags';
/* Pages */
import Home from "../pages/Home";
import Assesments from "../pages/Assesments/Assesments";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import Pricing from "../pages/Pricing/Pricing";
import Demo from "../pages/Demo/Demo";
import About from "../pages/About/About";
import Diversity from "../pages/Diversity/Diversity";
import CustomPlan from "../pages/CustomPlan/CustomPlan";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import Zapier from "../pages/Zapier/Zapier";
import Features from '../pages/Features';
import SkillTesting from '../pages/SkillTesting'
import Testimonial from '../pages/Testimonial/Testimonial';

const ExpertsWelcome = () => (
    <div className="html-embed w-embed w-iframe">
        <MetaTags>
            <title>The Vervoe Experts Community</title>
            <meta content="Get paid to help startups hire better." property="og:description" name="description" />
            <meta content="The Vervoe Experts Community" property="og:title" />
        </MetaTags>
        <iframe style={{ position: "absolute", top: 0, left: 0 }}
            src="https://landbot.io/u/H-16385-MCD4SL0ZLZZFWXWD/index.html" width="100%" height="100%"
            frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" />
    </div>
);

const Router = () => (
            <BrowserRouter>
                <Fragment>
                    <ScrollMemory />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/testimonial" component={Testimonial} />
                        <Route exact path="/assessment-library" component={Assesments} />
                        <Redirect from="/how-it-works" to="/" />
                        <Route exact path="/pricing" component={Pricing} />
                        <Route exact path="/demo" component={Demo} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/diversity-at-work" component={Diversity} />
                        <Route exact path="/custom-plan-inquiry" component={CustomPlan} />
                        <Route exact path="/privacy-policy" component={Privacy} />
                        <Route exact path="/terms-of-use" component={Terms} />
                        <Route exact path="/expertscommunitywelcome" component={ExpertsWelcome} />
                        <Route exact path="/zapier" component={Zapier} />
                        <Route exact path="/features" component={Features} />
                        <Route exact path="/skill-testing" component={SkillTesting}/>
                        <Route component={Home} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );

export default Router;
