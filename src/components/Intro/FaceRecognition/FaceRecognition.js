import React from 'react';
import classes from './FaceRecognition.module.scss';

const faceRecognition = props => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Title}>Face <span>Recognition</span></div>
            <div className={classes.Content}>
                <div className={classes.Item}>
                    <div className={classes.Label}>Total Person</div>
                    <div className={classes.Value}>81032</div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.Label}>Identified Person</div>
                    <div className={classes.Value}>65112</div>
                </div>
            </div>
        </div>
    );
}

export default faceRecognition;