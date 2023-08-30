import React from 'react';
import MetaTags from 'react-meta-tags';
import Footer from "../../components/Footer/Footer";
import NavMenu from "../../components/NavMenu/NavMenu";

const Zapier = () => {
    return (
        <div>
            <MetaTags>
                <title>Zapier Integration | Vervoe</title>
                <meta content="Hire great people. Connect Vervoe to 1,000s of apps through Zapier to automate your workflow."
                      property="og:description" name="description"/>
                <meta content="Zapier Integration | Vervoe" property="og:title"/>
            </MetaTags>
            <div className="header demo">
                <NavMenu/>
                <div className="container w-container">
                    <div className="single-heading demo">
                        <h1 className="heading sentence-case demo">Zapier Integration</h1>
                        <h2 className="sub-heading center">Automate your workflow.</h2>
                        <a href="#form" className="demo-arrow w-inline-block"/>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container-3 w-container">
                    <div className="section-title">Connect Vervoe to hundreds of other apps with Zapier</div>
                    <div className="paragraph"><a href="https://zapier.com/zapbook/Vervoe/" target="_blank"
                                                  className="paragraph text-link" rel="nofollow">Zapier</a> lets you connect Vervoe to
                        1,000+ other web services. Automated connections called Zaps, set up in minutes with no coding,
                        can automate your day-to-day tasks and build workflows between apps that otherwise wouldn&#x27;t
                        be possible.Each Zap has one app as the <strong>Trigger</strong>, where your information comes
                        from and which causes one or more <strong>Actions</strong> in other apps, where your data gets
                        sent automatically.
                    </div>
                    <div className="section-title">Getting Started with Zapier</div>
                    <div className="paragraph">Sign up for a free <a href="https://zapier.com/zapbook/Vervoe"
                                                                     target="_blank" rel="nofollow"
                                                                     className="paragraph text-link">Zapier</a> account,
                        from there you can jump right in. To help you hit the ground running, here are some popular
                        pre-made Zaps.
                    </div>
                    <div className="embed-zapier w-embed w-script">
                        <script src="https://zapier.com/zapbook/embed/widget.js?services=Vervoe&container=true&limit=5,"/>
                    </div>
                    <div className="section-title">How do I connect Vervoe to Zapier?</div>
                    <ol className="paragraph">
                        <li>Log in to your <a href="https://zapier.com/sign-up" target="_blank" rel="nofollow"
                                              className="paragraph text-link">Zapier account</a> or create a new
                            account.
                        </li>
                        <li>Navigate to &quot;Connected Accounts&quot; from the top menu bar.</li>
                        <li>Now click on &quot;Connect new account&quot; and search for &quot;Vervoe&quot;.</li>
                        <li>Use your credentials to connect your Vervoe account to Zapier.</li>
                        <li>Once that&#x27;s done you can start creating an automation! Use a pre-made Zap or create
                            your own with the Zap Editor. Creating a Zap requires no coding knowledge and you&#x27;ll be
                            walked step-by-step through the setup.
                        </li>
                        <li>Need inspiration? See everything that&#x27;s possible with <a
                            href="https://zapier.com/zapbook/Vervoe" target="_blank" className="paragraph text-link">Vervoe
                            and Zapier</a>.
                        </li>
                    </ol>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Zapier;
