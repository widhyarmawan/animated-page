import React from 'react';
import classes from './TrafficSummary.module.scss';

const trafficSummary = props => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Title}>Traffic <span>Surveilance</span></div>
            <div className={classes.Content}>
                <div className={classes.Item}>
                    <div className={classes.Label}>Total Vehicle</div>
                    <div className={classes.Value}>5122</div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.Label}>Total Lisence Plate</div>
                    <div className={classes.Value}>4232</div>
                </div>
            </div>
        </div>
    );
}

export default trafficSummary;