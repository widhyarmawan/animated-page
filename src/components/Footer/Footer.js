
import React from 'react';
import classes from './Footer.module.scss';
import logoWhiteSrc from '../../assets/images/logo-white.png';

const footer = props => {
    return (
        <div className={classes.Wrapper}>
            <div className="container-1">
                <div className={classes.Link}>
                    <div className={classes.Box}><img className={classes.Img} src={logoWhiteSrc} alt="nodeflux" /></div>
                    <div className={classes.Box}>
                        <div className={classes.Title}>Company</div>
                        <div className={classes.List}>
                            <li>About</li>
                            <li>Career</li>
                            <li>Blog's</li>
                        </div>
                    </div>
                    <div className={classes.Box}>
                        <div className={classes.Title}>Nodeflux Cloud</div>
                        <div className={classes.List}>
                            <li>Security & Defense</li>
                            <li>Smart City</li>
                            <li>Retail</li>
                        </div>
                    </div>
                    <div className={classes.Box}>
                        <div className={classes.Title}>Product</div>
                        <div className={classes.List}>
                            <li>Nodeflux Grid</li>
                            <li>Nodeflux Cloud</li>
                        </div>
                    </div>
                    <div className={classes.Box}>
                        <div className={classes.Title}>Location</div>
                        <div className={classes.List}>
                            <li className={classes.Contact}>Jl. Kemang Timur No.24, RT.7/RW.4, Bangka, Mampang Prpt., Jakarta Selatan,  12730</li>
                            <li className={classes.Contact}>(021) 22718184</li>
                            <li className={classes.Contact}>hello@nodeflux.io</li>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.CopyRight}>
                <div className={['container-1', classes.Content].join(' ')}>
                    <div>© 2019 All right reserved - nodeflux.io</div>
                    <div className={classes.SocMed}>
                        <div className={[classes.Item, classes.Ig].join(' ')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                                <g fill="#FFF" fillRule="nonzero">
                                    <path d="M18.72 0H7.136C3.201 0 0 3.201 0 7.135v11.586c0 3.935 3.2 7.136 7.135 7.136h11.586c3.935 0 7.136-3.202 7.136-7.136V7.135C25.857 3.201 22.656 0 18.72 0zm4.843 18.721a4.847 4.847 0 0 1-4.842 4.841H7.135a4.847 4.847 0 0 1-4.84-4.84V7.134a4.847 4.847 0 0 1 4.84-4.84h11.586a4.847 4.847 0 0 1 4.841 4.84v11.586z"/>
                                    <path d="M12.928 6.266a6.67 6.67 0 0 0-6.662 6.663 6.67 6.67 0 0 0 6.662 6.662 6.67 6.67 0 0 0 6.663-6.662 6.67 6.67 0 0 0-6.663-6.663zm0 11.03a4.373 4.373 0 0 1-4.368-4.368 4.373 4.373 0 0 1 4.368-4.368 4.373 4.373 0 0 1 4.369 4.368 4.373 4.373 0 0 1-4.369 4.369zM19.87 4.32c-.442 0-.876.18-1.188.493a1.69 1.69 0 0 0-.494 1.19c0 .442.18.876.494 1.19.312.312.746.492 1.188.492.444 0 .877-.18 1.19-.492.314-.314.493-.748.493-1.19a1.69 1.69 0 0 0-.493-1.19 1.69 1.69 0 0 0-1.19-.492z"/>
                                </g>
                            </svg>
                        </div>
                        <div className={[classes.Item, classes.Yt].join(' ')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28">
                                <g fill="#FFF" fillRule="nonzero" stroke="#FFF">
                                    <path d="M28.239 1.351H7.76C4.033 1.351 1 4.433 1 8.22v11.56c0 3.787 3.033 6.868 6.761 6.868H28.24c3.728 0 6.761-3.081 6.761-6.868V8.22c0-3.787-3.033-6.869-6.761-6.869zm5.373 18.43c0 3.012-2.41 5.462-5.373 5.462H7.76c-2.963 0-5.373-2.45-5.373-5.463V8.22c0-3.012 2.41-5.463 5.373-5.463H28.24c2.963 0 5.373 2.45 5.373 5.463v11.56z"/>
                                    <path d="M24.148 13.746l-9.614-5.703a.688.688 0 0 0-.695-.003.704.704 0 0 0-.35.61v11.404c0 .251.134.485.35.61a.69.69 0 0 0 .695-.004l9.614-5.7a.705.705 0 0 0 .343-.607c0-.25-.13-.482-.343-.607zm-9.27 5.082V9.875l7.546 4.477-7.546 4.476z"/>
                                </g>
                            </svg>
                        </div>
                        <div className={[classes.Item, classes.Fb].join(' ')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="27" viewBox="0 0 13 27">
                                <path fill="#FFF" fillRule="evenodd" d="M11.85 13.635H8.307v12.981H2.938V13.635H.385V9.073h2.553V6.12C2.938 4.01 3.941.704 8.354.704l3.977.016V5.15H9.446c-.474 0-1.14.236-1.14 1.243v2.685h4.013l-.47 4.558z"/>
                            </svg>
                        </div>
                        <div className={[classes.Item, classes.Li].join(' ')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25">
                                <path fill="#FFF" fillRule="nonzero" d="M25.686 15.005v9.403h-5.365v-8.773c0-2.202-.775-3.707-2.718-3.707-1.482 0-2.363 1.013-2.752 1.994-.141.35-.178.837-.178 1.328v9.158H9.307s.072-14.859 0-16.397h5.367v2.324c-.011.018-.026.036-.036.054h.036v-.054c.713-1.115 1.984-2.709 4.836-2.709 3.53 0 6.176 2.344 6.176 7.38zM3.694.108C1.858.108.657 1.332.657 2.94c0 1.575 1.167 2.834 2.966 2.834h.035c1.872 0 3.035-1.26 3.035-2.834-.035-1.608-1.163-2.832-3-2.832zm-2.718 24.3H6.34V8.011H.976v16.397z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;