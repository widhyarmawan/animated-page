
import React from 'react';
import classes from './ReachUs.module.scss';
import brainWaveImgSrc from '../../assets/images/brain-wave.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const reachUs = props => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={brainWaveImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Reach Us" align="center" />
                    <div className={classes.List}>
                        <div className={classes.SmallBox}>smallbox</div>
                        <div className={classes.LargeBox}>largebox</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default reachUs;