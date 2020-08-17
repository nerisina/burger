import React from 'react';
import classes from './BuildControl.modal.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.remove} 
            disabled={props.disabled}>Less</button>
        <button 
            className={classes.More} 
            onClick={props.added}
            disabled={props.disabled}
            >More</button>
    </div>
)

export default buildControl;