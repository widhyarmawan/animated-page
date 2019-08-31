
import React from 'react';
import classes from './OurPartner.module.scss';
import bgImgSrc from '../../assets/images/pattern-wave-copy-9.png';
import invidiaImg from '../../assets/images/nvidia.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Button from '../UI/Button/Button';
import partnerImg1 from '../../assets/images/partners/nvidia-logo-horizontal.png';
import partnerImg2 from '../../assets/images/partners/telkom-indonesia.png';
import partnerImg3 from '../../assets/images/partners/cropped-640-px-binus-university-logo.png';
import partnerImg4 from '../../assets/images/partners/bitmap-copy.png';

const ourPartner = props => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={bgImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Our Partners" align="center" />
                    <div className={classes.Info}>
                        <div className={classes.Left}>
                            <img className={classes.ImgContent} src={invidiaImg} alt="nvidia" />
                            <div className={classes.Text}>
                                <div className={classes.Title}>NVIDIA Metropolis Partner</div>
                                <div className={classes.SubTitle}>Nodeflux builds GPU-accellerated deep learning applications and is an NVIDIA technology partner</div>
                                <Button 
                                    classes={['BtnOutline', 'BtnSmall']}
                                    clicked={props.exploreClicked}>
                                        Explore More
                                </Button>
                            </div>
                        </div>
                        <div className={classes.Right}>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg1} alt="partner" />
                            </div>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg2} alt="partner" />
                            </div>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg3} alt="partner" />
                            </div>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg4} alt="partner" />
                            </div>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg1} alt="partner" />
                            </div>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg2} alt="partner" />
                            </div>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg3} alt="partner" />
                            </div>
                            <div className={classes.Item}>
                                <img className={classes.ImgParner} src={partnerImg4} alt="partner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ourPartner;