import './styles/style.css';
import image from './assets/manBg.svg';
import Modal from "./components/UI/modal/Modal";
import SendButton from "./components/UI/button/SendButton";
import {useState} from "react";

function App() {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="App">
            <main>
                <div className="content">
                    <h1 className="title">Нет подходящей вакансии?</h1>
                    <p className="text">Если вы не нашли в списке подходящей вакансии, то можете отправить
                        нам
                        своё
                        резюме.<br/>Мы рассмотрим его в ближайшее время.</p>
                    <p className="after__text">Заявить о себе можно несколькими способами: </p>
                    <ul>
                        <li>воспользоваться кнопками «Откликнуться на вакансию» и «Отправить резюме»,<br/>расположенными на
                            этой
                            странице
                        </li>
                        <li>прислать резюме в электронном виде на почту <span className="link">test@test.ru</span></li>
                        <li>прислать резюме в бумажном виде по адресу г. Архангельск</li>
                    </ul>
                    <SendButton onClick={() => setModalActive(true)} style={{width: "250px", height: "57px"}}>Отправить
                        резюме</SendButton>
                </div>
                <img className="bg__img" src={image} alt=""/>
                <hr/>
            </main>
            {
                modalActive && (
                    <Modal active={modalActive} setActive={setModalActive}/>
                )
            }
        </div>
    );
}

export default App;
