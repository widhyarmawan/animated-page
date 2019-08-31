
import React from 'react';
import classes from './OurClient.module.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

import client1 from '../../assets/images/clients/polri-logo@2x.png';
import client2 from '../../assets/images/clients/gojek.png';
import client3 from '../../assets/images/clients/jkt-smart-city.png';
import client4 from '../../assets/images/clients/electronic-city-copy.png';
import client5 from '../../assets/images/clients/tj.png';
import client6 from '../../assets/images/clients/digital-service.png';
import client7 from '../../assets/images/clients/qlue-logo-update-1.png';
import client8 from '../../assets/images/clients/bin-2-x.png';
import client10 from '../../assets/images/clients/jasa-marga-logo-svg-copy.png';
import client9 from '../../assets/images/clients/pins.png';

const ourClient = props => {
    return (
        <div className={classes.Wrapper}>
            <div className="container-2">
                <div className={classes.Content}>
                    <SectionTitle label="Our Clients" align="center" />
                    <div className={classes.List}>
                        <li className={classes.Row}>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client1} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client2} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client3} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client4} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client5} alt="client" />
                            </div>
                        </li>
                        <li className={classes.Row}>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client6} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client7} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client8} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client9} alt="client" />
                            </div>
                            <div className={classes.Client}>
                                <img className={classes.Img} src={client10} alt="client" />
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ourClient;