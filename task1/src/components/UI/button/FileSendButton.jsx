import React, {useState} from 'react';
import cl from './FileSendButton.module.css'
import vectorImage from "./Vector.svg"

const FileSendButton = ({children, className, ...props}) => {
    const [fileName, setFileName] = useState(null);
    const handleChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
    };

    const buttonText = fileName ? `${fileName}` : children;

    return (
        <div>
            <label className={`${cl.fileSend} ${className}`} {...props}>
                <input type="file" onChange={handleChange}/>
                <span>
          {buttonText} {!fileName && (<img className={cl.vectorImg} src={vectorImage} alt="File icon" />)}
        </span>
            </label>
        </div>
    );
};

export default FileSendButton;