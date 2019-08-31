
import React from 'react';
import classes from './OurProduct.module.scss';
import bgImgSrc from '../../assets/images/illustration-face.png';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import fireImg from '../../assets/images/fire.png';
import ivaImg from '../../assets/images/iva.png';
import More from '../UI/More/More';

const ourProduct = props => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.ImgBg} src={bgImgSrc} alt="bg" />
            <div className="container-3">
                <div className={classes.Content}>
                    <SectionTitle label="Our Product" />
                    <div className={classes.List}>
                        <li className={classes.Box}>
                            <div className={classes.Title}>Nodeflux <span>Grid</span></div>
                            <img className={classes.Img} src={ivaImg} alt="nodeflux grid" />
                            <div className={classes.Desc}>
                                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
                            </div>
                            <More label="Learn more" />
                        </li>
                        <li className={classes.Box}>
                            <div className={classes.Title}>Nodeflux <span>Cloud</span></div>
                            <img className={classes.Img} src={fireImg} alt="nodeflux grid" />
                            <div className={classes.Desc}>
                                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
                            </div>
                            <More label="Learn more" />
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ourProduct;