import React, { Component } from 'react';
import classes from './HomeMobileContainer.module.scss';
import logoImg from '../../assets/images/logo.png';

class HomeMobileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    <img className={classes.Logo} src={logoImg} alt="logo" />
                    <div>Mobile web is coming soon...</div>
                </div>
            </div>
        );
    }
}

export default HomeMobileContainer;