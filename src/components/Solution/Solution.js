
import React from 'react';
import classes from './Solution.module.scss';
import bgImgSrc from '../../assets/images/wave-copy.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animation.scss';
import Icon from '../UI/Icon/Icon';
import contentImg from '../../assets/images/dashboard.png';
import contentImg1 from '../../assets/images/gis.png';
import contentImg2 from '../../assets/images/detail.png';

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

const solution = props => {

    const content = [{
        text : 'Enhancing defense and security sector by combining following features such as Face Recognition, License Plate Recognition, Crowd and Behavior Analytics, and Time Compression Analysis.'
    }, {
        text : 'Enhancing defense and security sector by combining following features such as Face Recognition, License Plate Recognition, Crowd and Behavior Analytics, and Time Compression Analysis.'
    }, {
        text : 'Enhancing defense and security sector by combining following features such as Face Recognition, License Plate Recognition, Crowd and Behavior Analytics, and Time Compression Analysis.'
    }, {
        text : 'Enhancing defense and security sector by combining following features such as Face Recognition, License Plate Recognition, Crowd and Behavior Analytics, and Time Compression Analysis.'
    }];

    const settings = {
        previousButton: <SamplePrevArrow />,
        nextButton: <SampleNextArrow />,
    }

    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={bgImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Solution" align="center" />
                    <div className={classes.Slide}>
                        <Slider {...settings} className="slider-wrapper">
                            {content.map((item, index) => (
                                <div key={index}
                                    className="slider-content">
                                    <div className="inner">
                                        <div className={classes.Box}>
                                            <img className={['img-1',classes.ImgContent1].join(' ')} src={contentImg1} alt="content" />
                                            <img className={['img-2',classes.ImgContent2].join(' ')} src={contentImg2} alt="content" />
                                            <div className={['img-2',classes.Pulse].join(' ')}></div>
                                            <div className={['bx-left',classes.Left].join(' ')}>
                                                <div className={classes.ImgWrap}>
                                                    <img className={classes.ImgContent} src={contentImg} alt="content" />
                                                </div>
                                            </div>
                                            <div className={['bx-right',classes.Right].join(' ')}>
                                                <div className={classes.Title}>
                                                    Security & <span>Defense</span>
                                                </div>
                                                <div className={classes.Desc}>
                                                    {item.text}
                                                </div>
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

export default solution;