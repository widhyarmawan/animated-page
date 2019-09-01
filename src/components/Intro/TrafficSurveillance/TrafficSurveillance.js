import React from 'react';
import classes from './TrafficSurveillance.module.scss';

const trafficSurveillance = props => {
    const content = [{
        label : 'AB 123',
        type : 'Car',
        time : 'Today, 20:45'
    }, {
        label : 'CD 456',
        type : 'Car',
        time : 'Today, 20:45'
    }, {
        label : 'EF 789',
        type : 'Car',
        time : 'Today, 20:45'
    }];
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Title}>Traffic <span>Surveillance</span></div>
            <div className={classes.Content}>
                {content.map( (item, index) => (
                    <div key={index} className={classes.Item}>
                        <div className={classes.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="51" viewBox="0 0 45 51">
                                <defs>
                                    <filter id="a" width="126.5%" height="178.7%" x="-16.3%" y="-39.3%" filterUnits="objectBoundingBox">
                                        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
                                        <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0.478431373 0 0 0 0 0.298039216 0 0 0 0 0.643137255 0 0 0 0.3 0"/>
                                        <feMerge>
                                            <feMergeNode in="shadowMatrixOuter1"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                    <filter id="b" width="149.2%" height="149.2%" x="-24.6%" y="-24.6%" filterUnits="objectBoundingBox">
                                        <feMerge>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <path fill="#1D0B46" fill-rule="nonzero" d="M31.619 5.93c-.256-1.065-.691-1.875-1.305-2.433-.614-.557-1.51-1.064-2.686-1.52-1.177-.507-2.865-.963-5.065-1.369C20.363.203 18.355 0 16.538 0c-1.816 0-3.824.203-6.024.608-2.2.406-3.888.862-5.065 1.369-1.177.456-2.072.963-2.686 1.52-.614.558-1.023 1.368-1.228 2.433L0 18.094v16.953h2.38v1.52c0 1.014.319 1.723.958 2.129.64.405 1.292.405 1.957 0 .665-.406.998-1.115.998-2.129v-1.52H25.94v1.52c0 1.014.396 1.723 1.19 2.129.792.405 1.572.405 2.34 0 .767-.406 1.15-1.115 1.15-2.129v-1.52H33V18.094L31.619 5.93zM8.365 2.927c.205-.38.563-.57 1.075-.57h15.732v2.28H9.44c-.512 0-.87-.19-1.075-.57a1.136 1.136 0 0 1 0-1.14zM2.763 17.789l1.304-9.274c.103-.507.538-.76 1.305-.76h22.486c.768 0 1.202.253 1.305.76l1.304 9.427c.052.152.077.253.077.304 0 .354-.128.646-.384.874-.255.228-.588.342-.997.342H4.067c-.409 0-.741-.127-.997-.38-.256-.254-.384-.583-.384-.988a.67.67 0 0 1 .077-.305zM6.83 29.155a2.546 2.546 0 0 1-1.803.722c-.691 0-1.292-.24-1.804-.722-.511-.481-.767-1.064-.767-1.749 0-.684.256-1.267.767-1.748a2.546 2.546 0 0 1 1.804-.722c.69 0 1.292.24 1.803.722.512.481.768 1.064.768 1.748 0 .685-.256 1.268-.768 1.749zm23.177 0a2.546 2.546 0 0 1-1.804.722c-.69 0-1.291-.24-1.803-.722-.512-.481-.767-1.064-.767-1.749 0-.684.255-1.267.767-1.748a2.546 2.546 0 0 1 1.803-.722c.691 0 1.292.24 1.804.722.512.481.767 1.064.767 1.748 0 .685-.255 1.268-.767 1.749z" filter="url(#b)" transform="translate(6 2)"/>
                            </svg>
                        </div>
                        <div className={classes.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="37" viewBox="0 0 71 37">
                                <defs>
                                    <filter id="a" width="126.5%" height="178.7%" x="-16.3%" y="-39.3%" filterUnits="objectBoundingBox">
                                        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
                                        <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0.478431373 0 0 0 0 0.298039216 0 0 0 0 0.643137255 0 0 0 0.3 0"/>
                                        <feMerge>
                                            <feMergeNode in="shadowMatrixOuter1"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                <g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(4 2)">
                                    <rect width="60.32" height="27.04" x="1.04" y="1.04" fill="#1D0B46" stroke="#643B8E" stroke-width="2.08" opacity=".503" rx="5.2"/>
                                    <circle cx="6.24" cy="7.28" r="2.08" fill="#B5ABC7"/>
                                    <circle cx="6.24" cy="21.84" r="2.08" fill="#B5ABC7"/>
                                    <circle cx="56.16" cy="7.28" r="2.08" fill="#B5ABC7"/>
                                    <circle cx="56.16" cy="21.84" r="2.08" fill="#B5ABC7"/>
                                    <text fill="#B5ABC7" font-family="Dosis-Medium, Dosis" font-size="14.4" font-weight="400" letter-spacing=".514">
                                        <tspan x="12.284" y="20.6">AB 123</tspan>
                                    </text>
                                </g>
                            </svg>
                        </div>
                        <div className={classes.Desc}>
                            <div className={classes.Label}>{item.label}</div>
                            <div className={classes.Age}>{item.type}</div>
                            <div className={classes.Time}>{item.time} </div>
                        </div>
                    </div>  
                ))}
            </div>
        </div>
    );
}

export default trafficSurveillance;