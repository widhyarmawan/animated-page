import React from 'react';
import classes from './Button.module.scss';

const button = (props) => {
    let btnClasses = [classes.Button];
    if (props.classes && props.classes.length > 0) {
        props.classes.forEach(val => {
            btnClasses.push(classes[val]);
        });
    }

    return (
        <button
            className={btnClasses.join(' ')}
            onClick={props.clicked}
            disabled={props.disabled}>{props.children}</button>
    );
}

export default button;