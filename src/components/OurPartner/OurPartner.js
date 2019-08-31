
import React from 'react';
import classes from './OurPartner.module.scss';
import bgImgSrc from '../../assets/images/pattern-wave-copy-9.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const ourPartner = props => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={bgImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Our Partners" align="center" />
                    <div className={classes.List}>
                        <div className={classes.SmallBox}>smallbox</div>
                        <div className={classes.LargeBox}>largebox</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ourPartner;