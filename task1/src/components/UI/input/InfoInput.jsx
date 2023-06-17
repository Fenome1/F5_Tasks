import React from 'react';
import cl from "./InfoInput.module.css"

const InfoInput = ({className, ...props}) => {
    return (
        <input className={`${cl.infoInput} ${className}`} {...props} />
    );
};

export default InfoInput;