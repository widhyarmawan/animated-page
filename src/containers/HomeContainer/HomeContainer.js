import React, { Component } from 'react';
import classes from './HomeContainer.module.scss';
import scrollToComponent from 'react-scroll-to-component';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
import Solution from '../../components/Solution/Solution';
import OurProduct from '../../components/OurProduct/OurProduct';
import CaseStudy from '../../components/CaseStudy/CaseStudy';
import OurClient from '../../components/OurClient/OurClient';
import OurPartner from '../../components/OurPartner/OurPartner';
import ReachUs from '../../components/ReachUs/ReachUs';
import Footer from '../../components/Footer/Footer';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clientHeight : 620
        }
    }

    componentDidMount() {
        const height = window.innerHeight;
        this.setState({clientHeight: height});
    }

    exploreClickHandler = () => {
        const configScroll = { 
            offset: 0, 
            align: 'top', 
            duration: 2000
        };
        scrollToComponent( this.Second, configScroll);
    }

    render() {
        return (
            <div className={classes.Wrapper}>
                <div className="">
                    <div className={[classes.Header, 'container-1'].join(' ')} >
                        <Header />
                    </div>
                    <div className={classes.Section} style={{height: (this.state.clientHeight - 80) +'px'}}>
                        <Intro exploreClicked={this.exploreClickHandler}/>
                    </div>
                    <div className={classes.Section} ref={(section) => { this.Second = section; }} style={{height: this.state.clientHeight+'px'}}>
                        <WhatWeDo />
                    </div>
                    <div className={classes.Section} style={{height: this.state.clientHeight+'px'}}>
                        <Solution />
                    </div>
                    <div className={classes.Section} style={{height: this.state.clientHeight+'px'}}>
                        <OurProduct />
                    </div>
                    <div className={classes.Section} style={{height: this.state.clientHeight+'px'}}>
                        <CaseStudy />
                    </div>
                    <div className={classes.Section} style={{height: this.state.clientHeight+'px'}}>
                        <OurClient />
                    </div>
                    <div className={classes.Section} style={{height: this.state.clientHeight+'px'}}>
                        <OurPartner />
                    </div>
                    <div className={classes.Section} style={{height: this.state.clientHeight+'px'}}>
                        <ReachUs />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}


export default HomeContainer;