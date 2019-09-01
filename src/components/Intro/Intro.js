import React from 'react';
import classes from './Intro.module.scss';
import globeSrc from '../../assets/images/globe.png';
import Button from '../UI/Button/Button';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import TrafficSummary from './TrafficSummary/TrafficSummary';
import FaceDetection from './FaceDetection/FaceDetection';
import TrafficSurveillance from './TrafficSurveillance/TrafficSurveillance';
import nImg from '../../assets/images/n.png';

const intro = props => {
    return (
        <div className={classes.Wrapper}>
            <div className="container-1">
                <div className={classes.Globe}>
                    <img src={globeSrc} alt="globe" />
                    <div className={classes.N}>
                        <img src={nImg} alt="nodeflux" />
                    </div>
                    <div className={[classes.Panel, classes.Panel1].join(' ')}>
                        <FaceRecognition />
                        <div className={[classes.LeftLine].join(' ')}></div>
                    </div>
                    <div className={[classes.Panel, classes.Panel2].join(' ')}>
                        <TrafficSummary />
                        <div className={[classes.RightLine].join(' ')}></div>
                    </div>
                    <div className={[classes.Panel, classes.Panel3].join(' ')}>
                        <FaceDetection />
                        <div className={[classes.LeftLine, classes.Model1].join(' ')}></div>
                    </div>
                    <div className={[classes.Panel, classes.Panel4].join(' ')}>
                        <TrafficSurveillance />
                        <div className={[classes.RightLine, classes.Model1].join(' ')}></div>
                    </div>
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
        </div>
    );
}

export default intro;