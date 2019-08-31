import React from 'react';
import classes from './SectionTitle.module.scss';

const sectionTitle = props => {
    let labelClasses = [classes.Label];
    if (props.align === 'center') {
        labelClasses = [classes.Label, classes.Center];
    }
    return (
        <div className={classes.Wrapper}>
            <div className={labelClasses.join(' ')}>
                {props.label}
                <div className={classes.Shadow}>{props.label}
                </div>
                <div className={classes.Underline}></div>
            </div>
        </div>
    );
}

export default sectionTitle;