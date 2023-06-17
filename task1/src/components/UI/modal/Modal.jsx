import React from 'react';
import cl from "./Modal.module.css"
import crossImage from './Cross.svg';
import SendButton from "../button/SendButton";
import InfoInput from "../input/InfoInput";
import FileSendButton from "../button/FileSendButton";

const Modal = ({setActive}) => {

    return (
        <div className={cl.modal} onClick={() => setActive(false)}>
            <img src={crossImage} alt="Close cross" className={cl.closeCross} onClick={() => setActive(false)}/>
            <div className={cl.content} onClick={e => e.stopPropagation()}>
                <h1 className={cl.modalH1}>Отправить резюме</h1>
                <InfoInput className={cl.modalInput} placeholder="Ваше ФИО"/>
                <InfoInput className={cl.modalInput} placeholder="Ваш телефон"/>
                <InfoInput className={cl.modalInput} placeholder="Ваш e-mail"/>
                <FileSendButton className={cl.modalInputFile} type="button">Прикрепить файл</FileSendButton>
                <SendButton className={cl.modalButton}>Отправить</SendButton>
            </div>
        </div>
    );
};

export default Modal;
