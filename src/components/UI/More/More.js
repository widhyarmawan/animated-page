import React from 'react';
import classes from './More.module.scss';

const more = props => {
    return (
        <div className={classes.Wrapper}>
            {props.label}
            <div className={classes.Icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12">
                    <g fill="#BC8CFB" fill-rule="nonzero">
                        <path d="M.606 4.8h13.788c.335 0 .606.358.606.8 0 .442-.271.8-.606.8H.606C.27 6.4 0 6.042 0 5.6c0-.442.271-.8.606-.8z"/>
                        <path d="M13.723 5.623L9.627 1.074a.721.721 0 0 1 0-.89.466.466 0 0 1 .742 0l4.477 4.635c.205.246.205 1.123 0 1.369-.136.163-1.629 2.04-4.477 5.628A.483.483 0 0 1 10 12a.483.483 0 0 1-.372-.184.721.721 0 0 1 0-.89l4.096-5.303z"/>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default more;