import React from 'react';
import classes from './WhatWeDo.module.scss';
import brainWaveImgSrc from '../../assets/images/brain-wave.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animation.scss';
import Icon from '../UI/Icon/Icon';
import contentImg from '../../assets/images/illustration-fr.png';
import More from '../UI/More/More';

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      	<div
			className={[classes.Arrow, classes.PrevArrow].join(' ')}
			onClick={onClick}>
                <Icon name="ico-arrow-left" fill="#e0c8ff" stroke="none"/>
      	</div>
    );
}
  
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      	<div
			className={[classes.Arrow, classes.NextArrow].join(' ')}
			onClick={onClick}>
                <Icon name="ico-arrow-right" fill="#e0c8ff" stroke="none"/>
      	</div>
    );
}

const whatWeDo = props => {
    const content = [{
        text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.'
    }, {
        text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.'
    }, {
        text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.'
    }, {
        text : 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.'
    }];

    const settings = {
        previousButton: <SamplePrevArrow />,
        nextButton: <SampleNextArrow />,
    }
    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={brainWaveImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="What We Do" />
                    {/* <div className={classes.List}>
                        <div className={classes.SmallBox}>smallbox</div>
                        <div className={classes.LargeBox}>largebox</div>
                    </div> */}
                    <div className={classes.Slide}>
                        <Slider {...settings} className="slider-wrapper">
                            {content.map((item, index) => (
                                <div key={index}
                                    className="slider-content">
                                    <div className="inner">
                                        <div className={classes.Box}>
                                            <div className={['bx-left',classes.Left].join(' ')}>
                                                <div className={classes.SmallBox}>
                                                    <img src={contentImg} className={classes.ContentImg} alt="fr" />
                                                </div>
                                            </div>
                                            <div className={['bx-right',classes.Right].join(' ')}>
                                                <div className={classes.Title}>
                                                    Face <span>Recognition</span>
                                                </div>
                                                <div className={classes.Desc}>
                                                    {item.text}
                                                </div>
                                                <More label="Learn mores"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whatWeDo;