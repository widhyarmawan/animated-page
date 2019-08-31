
import React from 'react';
import classes from './ReachUs.module.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import bgImgSrc from '../../assets/images/map.png';
import Button from '../UI/Button/Button';

const reachUs = props => {
    return (
        <div className={classes.Wrapper}>
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Reach Us" align="center" />
                    <div className={classes.SubTitle}>Tell us your problem by contacting us</div>
                    <div className={classes.MapWrap}>
                        <img className={classes.Img} src={bgImgSrc} alt="map" />
                        <div className={classes.Action}>
                            <Button 
                                classes={['BtnFill']}
                                clicked={props.exploreClicked}>
                                    Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default reachUs;