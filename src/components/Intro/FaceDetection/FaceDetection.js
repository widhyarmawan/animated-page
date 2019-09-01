import React from 'react';
import classes from './FaceDetection.module.scss';

const faceDetection = props => {
    const content = [{
        label : 'Male',
        age : 'Age 17-20',
        time : 'Today, 20:45'
    }, {
        label : 'Male',
        age : 'Age 17-20',
        time : 'Today, 20:45'
    }, {
        label : 'Male',
        age : 'Age 17-20',
        time : 'Today, 20:45'
    }];

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Title}>Face <span>Detection</span></div>
            <div className={classes.Content}>
                {content.map( (item, index) => (
                    <div key={index} className={classes.Item}>
                        <div className={classes.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 -6 61 60">
                                <defs>
                                    <filter id="a" width="149.2%" height="149.2%" x="0" y="0" filterUnits="objectBoundingBox">
                                        <feMerge>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <g fill="#1D0B46" fillRule="nonzero" filter="url(#a)" transform="translate(0 -7)">
                                    <path d="M30.51 34.435c6.04 0 10.937-5.67 10.937-12.663 0-9.7-4.897-12.664-10.937-12.664-6.04 0-10.937 2.965-10.937 12.664 0 6.994 4.896 12.663 10.937 12.663zM54.662 53.075l-5.518-12.297a2.752 2.752 0 0 0-1.248-1.313l-8.563-4.41a.557.557 0 0 0-.588.049c-2.422 1.812-5.27 2.77-8.235 2.77-2.966 0-5.814-.958-8.236-2.77a.558.558 0 0 0-.587-.05l-8.564 4.41c-.552.285-.995.751-1.247 1.314L6.358 53.075c-.38.847-2.303 6.817-1.792 7.595.512.777 3.376 1.241 4.313 1.241H52.14c.938 0 3.802-.464 4.313-1.241.511-.778-1.41-6.748-1.791-7.595z"/>
                                </g>
                            </svg>
                        </div>
                        <div className={classes.Label}>{item.label}</div>
                        <div className={classes.Age}>{item.age}</div>
                        <div className={classes.Time}>{item.time} </div>
                    </div>  
                ))}
            </div>
        </div>
    );
}

export default faceDetection;