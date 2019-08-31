import React from 'react';
import classes from './Intro.module.scss';
import globeSrc from '../../assets/images/globe.png';
import Button from '../UI/Button/Button';

const intro = props => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Globe}>
                <img src={globeSrc} alt="globe" />
            </div>
            <div className={classes.Desc}>
                Extending Vision Beyond Imagination
            </div>
            <div className={classes.Action}>
                <Button 
                    classes={['BtnOutline']}
                    clicked={props.exploreClicked}>
                        Explore More
                </Button>
            </div>
        </div>
    );
}

export default intro;