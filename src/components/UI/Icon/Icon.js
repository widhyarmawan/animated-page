import React from "react";

const icon = (props) => {

    const fill = (props.fill !== undefined) ? props.fill : '#202124';
    const stroke = (props.stroke !== undefined) ? props.stroke : '#202124';
    let width = (props.width !== undefined) ? props.width : '24';
    let height = (props.height !== undefined) ? props.height : width;
    let viewBox = (props.viewBox !== undefined) ? props.viewBox : '0 0 24 24';
    let path = null;

    switch (props.name) {
        case ('ico-close'):
            path =  <g id="ico-close" stroke={stroke} strokeWidth="1" fill={fill} fillRule="evenodd">
                <path d="M18.209352,17.511852 L12.916852,12.209352 L18.209352,6.90685204 C18.3708124,6.79149346 18.4487738,6.59156967 18.4080308,6.39736084 C18.3672879,6.20315201 18.2155521,6.05141623 18.0213432,6.01067327 C17.8271344,5.96993032 17.6272106,6.04789166 17.511852,6.20935204 L12.209352,11.501852 L6.90685204,6.20935204 C6.70795822,6.0672484 6.43547699,6.08978291 6.26262995,6.26262995 C6.08978291,6.43547699 6.0672484,6.70795822 6.20935204,6.90685204 L11.501852,12.209352 L6.20935204,17.511852 C6.04789166,17.6272106 5.96993032,17.8271344 6.01067327,18.0213432 C6.05141623,18.2155521 6.20315201,18.3672879 6.39736084,18.4080308 C6.59156967,18.4487738 6.79149346,18.3708124 6.90685204,18.209352 L12.209352,12.916852 L17.511852,18.209352 C17.6272106,18.3708124 17.8271344,18.4487738 18.0213432,18.4080308 C18.2155521,18.3672879 18.3672879,18.2155521 18.4080308,18.0213432 C18.4487738,17.8271344 18.3708124,17.6272106 18.209352,17.511852 Z" id="Shape" fill={fill} fillRule="nonzero"></path>
            </g>;
            break;
        case ('ico-arrow-down'):
                width = 7;
                height = 4;
                viewBox = '0 0 7 4';
            path = <path fill={fill} fillRule="nonzero" d="M6.183 0L3.5 2.486.817 0 0 .757 3.5 4 7 .757z"/>;
            break;
        default:
            path = null;
    };

    return (
        <svg style={{display:'block'}} width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            {path}
        </svg>
    )
};

export default icon;
