
import React from 'react';
import classes from './Solution.module.scss';
import brainWaveImgSrc from '../../assets/images/brain-wave.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animation.scss';
import Icon from '../UI/Icon/Icon';
import contentImg from '../../assets/images/dashboard.png';

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

    const content = [
        {
            title: 'Vulputate Mollis Ultricies Fermentum Parturient',
            description:
            'Aenean eu leo quam. Pellentesque ornare sem ',
            button: 'Read More',
            image: 'https://i.imgur.com/ZXBtVw7.jpg',
            user: 'Luan Gjokaj',
            userProfile: 'https://i.imgur.com/JSW6mEk.png'
        },
        {
            title: 'Tortor Dapibus Commodo Aenean Quam',
            description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. ',
            button: 'Discover',
            image: 'https://i.imgur.com/DCdBXcq.jpg',
            user: 'Erich Behrens',
            userProfile: 'https://i.imgur.com/0Clfnu7.png'
        },
        {
            title: 'Phasellus volutpat metus',
            description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis ',
            button: 'Buy now',
            image: 'https://i.imgur.com/DvmN8Hx.jpg',
            user: 'Bruno Vizovskyy',
            userProfile: 'https://i.imgur.com/4KeKvtH.png'
        }
    ];

    const settings = {
        previousButton: <SamplePrevArrow />,
        nextButton: <SampleNextArrow />,
    }

    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={brainWaveImgSrc} alt="bg" />
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
                                            <div className={['bx-left',classes.Left].join(' ')}>
                                                <div className={classes.ImgWrap}>
                                                    <img className={classes.ImgContent} src={contentImg} alt="content" />
                                                </div>
                                            </div>
                                            <div className={['bx-right',classes.Right].join(' ')}>
                                                <div className={classes.Title}>Security & <span>Defense</span></div>
                                                <div className={classes.Desc}>
                                                    Enhancing defense and security sector by combining following features such as Face Recognition, License Plate Recognition, Crowd and Behavior Analytics, and Time Compression Analysis.
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