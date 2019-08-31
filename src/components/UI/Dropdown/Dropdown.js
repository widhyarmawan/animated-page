import React, { Component } from 'react';
import classes from './Dropdown.module.scss';
import Icon from '../../UI/Icon/Icon';
import onClickOutside from "react-onclickoutside";
import CSSTransition from 'react-transition-group/CSSTransition';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { showList: false };
    }

    showListHandler = () => {
        this.setState({showList: true});
    }
    
    handleClickOutside = (evt) => {
        this.setState({showList: false});
    }

    render() {
        let iconClasses = [classes.Icon];
        if (this.state.showList) {
            iconClasses.push(classes.IsActive);
        }

        let subMenu = null;
        if (this.props.list) {
            subMenu = this.props.list.map( (item, index) => {
                return <li key={index} className={classes.Item} onClick={()=>this.handleClickOutside()}>{item.label}</li>;
            });
        }

        return (
            <div className={classes.Wrapper}>
                <div className={classes.Label} onClick={this.showListHandler}>
                    {this.props.label}
                    <div className={iconClasses.join(' ')}>
                        <Icon name="ico-arrow-down" fill="#f7f1ff" stroke="none" />
                    </div>
                </div>
                <CSSTransition
                    in={this.state.showList}
                    mountOnEnter
                    unmountOnExit
                    timeout={270}
                    classNames={{
                        enterActive: classes.Open,
                        exitActive: classes.Close
                    }}>
                        <ul className={classes.List}>
                            {subMenu}
                        </ul>
                    </CSSTransition>
            </div>
        );
    }
}

export default onClickOutside(Dropdown);