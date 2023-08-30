import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { logoDark, logoLight } from "../../assets/images";
import Modal from "../Modal/Modal";

class NavMenu extends PureComponent {
    links = [
        {
            path: '/features',
            label: 'Features',
        },
        {
            path: '/pricing',
            label: 'Pricing',
        },
        {
            path: '/skill-testing',
            label: 'Predict Performance'
        }
    ];


    state = {
        modal: false
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    componentDidMount() {
        this.header = document.getElementById('nav-menu');
        this.sticky = this.header.offsetTop;
        window.addEventListener('scroll', this.stickyHeader);
    }

    stickyHeader = () => {
        const container = document.getElementById('nav-menu');
        const {current} = this.props

        if (window.pageYOffset >= this.sticky + 90) {
            container.classList.add('fixed-header--show');
        } else {
            if (current === '/') {
                this.hideOnTop(container)
                return
            }

            container.classList.remove('fixed-header--show');
        }
    };

    hideOnTop = (container) =>
        container.classList.contains('fixed-header--show') &&
        !window.pageYOffset && container.classList.remove('fixed-header--show')

    isPricingOrHIW = (current) => current === '/pricing' || current === '/how-it-works';

    determineClass = (current, dark) => dark === 'white' && this.isPricingOrHIW(current) ? 'dark w--active-nav' : 'w--current';

    renderNavLinks = (dark) => {
        const { current } = this.props;
        return this.links.map(link => {
            const addClass = this.determineClass(current, dark);
            const additionalClass = current === link.path ? `${dark} ${addClass}` : dark;
            return (
                <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link w-nav-link ${additionalClass}`}>
                    {link.label}
                </Link>
            )
        });
    };

    toggleMenu = (id, navId) => {
        const button = document.getElementById(id);
        button.classList.toggle('w--open');
        const navMenu = document.getElementById(navId);

        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'block';
        } else {
            navMenu.style.display = 'none';
        }

    };
    checkAndToogleMenu = () => {
        const {current} = this.props

        if(current === '/') {
            const container = document.getElementById('nav-menu');
            const navMenu = document.getElementById('nav-dark')
            container.classList.add('fixed-header--show');
            navMenu.style.display = 'block'
        } else {
            this.toggleMenu('light-menu', 'nav-light')
        }

    }
    renderWhiteMenu = () => (
        <nav role="navigation" className="nav-menu w-nav-menu">
            <Link to="/" className="nav-link white home w-nav-link">Home</Link>
            {this.renderNavLinks("white")}
            <button onClick={this.toggleModal} className="nav-link white w-nav-link">Request Demo</button>
            <a href="https://app.vervoe.com/login" className="nav-link white login w-nav-link">Login</a>
            <a href="https://app.vervoe.com/registration" className="cta menu w-button">Try free</a>
        </nav>
    );

    renderDarkMenu = (id) => (
        <nav id={id || ''} role="navigation" className="nav-menu light-background w-nav-menu">
            <Link to="/" className="nav-link dark home w-nav-link">Home</Link>
            {this.renderNavLinks("dark")}
            <button onClick={this.toggleModal} className="nav-link dark w-nav-link">Request Demo</button>
            <a href="https://app.vervoe.com/login" className="nav-link dark login w-nav-link">Login</a>
            <a href="https://app.vervoe.com/registration" className="cta menu light-background w-button">Try free</a>
        </nav>
    )

    render() {
        const { dark } = this.props;
        const { modal } = this.props
        return (
            <div>
                <Modal show={ modal } toggleModal={ this.toggleModal } />
                <div data-collapse="medium" data-animation="default" data-duration="400" className="navigation w-nav">
                    <div className="container bottom-line w-container home-container" data-ix="slide-in-scroll-navigation-on-scroll">
                        <div id="light-menu" className={`menu-button w-nav-button ${dark && 'scroll-navigation-dark'}`}>
                            <div className="w-icon-nav-menu" onClick={this.checkAndToogleMenu}></div>
                        </div>
                        <div className="logo-wrapper">
                            <Link to="/" className="logo w-nav-brand">
                                <img src={dark ? logoDark : logoLight} width="120" />
                            </Link>
                        </div>
                        {dark ? this.renderDarkMenu() : this.renderWhiteMenu()}
                    </div>
                </div>
                <div id="nav-menu" className="scroll-navigation w-nav fixed-header--hide">
                    <div className="container scroll-nav w-container home-container">
                        <a href="https://app.vervoe.com/registration" className="light-background w-button try-free-mobile">Try free</a>
                        <div id="dark-menu" className="menu-button scroll-navigation-dark w-nav-button">
                            <div className="w-icon-nav-menu" onClick={() => this.toggleMenu('dark-menu', 'nav-dark')} />
                        </div>
                        <div className="logo-wrapper">
                            <Link to="/" className="logo w-nav-brand">
                                <img src={logoDark} width="65" />
                            </Link>
                        </div>
                        {this.renderDarkMenu('nav-dark')}
                    </div>
                </div>
                <div id="nav-light" className="w-nav-overlay">
                    {this.renderWhiteMenu()}
                </div>
            </div>
        );
    };
}

export default NavMenu;
