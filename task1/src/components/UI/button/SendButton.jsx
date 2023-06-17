import React from 'react';
import cl from "./SendButton.module.css"

const SendButton = ({children, className, ...props}) => {
    return (
        <button className={`${cl.sendButton} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default SendButton;