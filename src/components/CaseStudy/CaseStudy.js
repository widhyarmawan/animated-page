
import React from 'react';
import classes from './CaseStudy.module.scss';
import bgImgSrc from '../../assets/images/bg-wave-casestudy.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const caseStudy = props => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={bgImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Case Study" align="center" />
                    <div className={classes.List}>
                        <div className={classes.SmallBox}>smallbox</div>
                        <div className={classes.LargeBox}>largebox</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default caseStudy;