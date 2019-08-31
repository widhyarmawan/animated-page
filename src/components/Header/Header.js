import React, { Component } from 'react';
import logoSrc from '../../assets/images/logo.png';
import classes from './Header.module.scss';
import Dropdown from '../UI/Dropdown/Dropdown';
import { NAV_MENU } from '../Constants/Link';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const navMenu = NAV_MENU.map( (navItem, index) => {
            let item = <li key={index} className={classes.NavItem}>{navItem.label}</li>;
            if (navItem.type === 'dropdown') {
                item = <li key={index} className={[classes.NavItem, classes.Dropdown].join(' ')}>
                    <Dropdown label={navItem.label} list={navItem.subMenu}/>
                </li>;
            }
            return item;
        });

        return (
            <div className={classes.Wrapper}>
                <div className={classes.Logo}>
                    <img className={classes.Img} src={logoSrc} alt="nodeflux" />
                </div>
                <ul className={classes.Nav}>
                    {navMenu}
                </ul>
            </div>
        );
    }
}

export default Header;