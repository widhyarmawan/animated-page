
import React, { Component } from 'react';
import classes from './CaseStudy.module.scss';
import bgImgSrc from '../../assets/images/bg-wave-casestudy.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import More from '../UI/More/More';
import contentImg from '../../assets/images/pic.png';

class CaseStudy extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content : [{
                label : 'Gojek',
                text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.'
            }, {
                label : 'Bandung Command Center',
                text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.'
            }, {
                label : 'Transjakarta',
                text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.'
            }, {
                label : 'Electronic City',
                text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.'
            }],
            indexSelected: 1
        };
    }

    caseClickHandler = index => {
        this.setState({indexSelected: index});
    }

    render() {
        const nav = this.state.content.map((item, index) => {
            let navClasses = [classes.NavItem];
            if (index === this.state.indexSelected) {
                navClasses = [classes.NavItem, classes.Active];
            }
            return (
                <li key={index} 
                    className={navClasses.join('     ')}
                    onClick={() => this.caseClickHandler(index)}>
                    <div className={classes.Dot}></div>
                    <div className={classes.Label}>{item.label}</div>
                </li>
            );
        });

        const desc = this.state.content[this.state.indexSelected];

        return (
            <div className={classes.Wrapper}>
                <img className={classes.ImgBg} src={bgImgSrc} alt="bg" />
                <div className="container-3">
                    <div className={classes.Content}>
                        <SectionTitle label="Case Study" align="center" />
                        <div className={classes.Info}>
                            <ul className={classes.Nav}>
                                {nav}
                            </ul>
                            <div className={classes.ImgWrap}>
                                <img className={classes.ImgContent} src={contentImg} alt="content" />
                            </div>
                            <div className={classes.Text}>
                                <div className={classes.Title}>{desc.label}</div>
                                <div className={classes.Desc}>{desc.text}</div>
                                <More label={'Learn about ' + desc.label } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CaseStudy;