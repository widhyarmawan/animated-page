
import React from 'react';
import classes from './CaseStudy.module.scss';
import bgImgSrc from '../../assets/images/bg-wave-casestudy.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import More from '../UI/More/More';
import contentImg from '../../assets/images/pic.png';

const caseStudy = props => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={bgImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Case Study" align="center" />
                    <div className={classes.Info}>
                        <ul className={classes.Nav}>
                            <li className={[classes.NavItem, classes.Active].join('     ')}>
                                    <div className={classes.Dot}></div>
                                    <div className={classes.Label}>Gojek</div>
                            </li>
                            <li className={classes.NavItem}>
                                <div className={classes.Dot}></div>
                                <div className={classes.Label}>Bandung Command Center</div>
                            </li>
                            <li className={classes.NavItem}>
                                <div className={classes.Dot}></div>
                                <div className={classes.Label}>Transjakarta</div>
                            </li>
                            <li className={classes.NavItem}>
                                <div className={classes.Dot}></div>
                                <div className={classes.Label}>Electronic City</div>
                            </li>
                        </ul>
                        <div className={classes.ImgWrap}>
                            <img className={classes.ImgContent} src={contentImg} alt="content" />
                        </div>
                        <div className={classes.Text}>
                            <div className={classes.Title}>Gojek</div>
                            <div className={classes.Desc}>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.</div>
                            <More label="Learn about Gojek" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default caseStudy;