import React from 'react';
import style from "./edit-profile-info.module.scss";

const EditProfileInfo = () => {
    return (
        <div>
            <h3>Учётные данные</h3>
            <div className={style.container}>
                <p className={style.title}>Имя</p>
                <input type='text' className={style.text} value='Paфиль' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Фамилия</p>
                <input type='text' className={style.text} value='Касимов' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Отчество</p>
                <input type='text' className={style.text} value='Рамилевич' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Электронная почта</p>
                <input type='email' className={style.text} value='mail@mail.ru' />
            </div>
            <h3>Адрес</h3>
            <div className={style.container}>
                <p className={style.title}>Страна</p>
                <input type='text' className={style.text} value='Рэссэй' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Город</p>
                <input type='text' className={style.text} value='Казань' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Район</p>
                <input type='text' className={style.text} value='Атнинский' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Улица</p>
                <input type='text' className={style.text} value='Советская' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Дом</p>
                <input type='number' className={style.text} value='26' />
            </div>
            <div className={style.container}>
                <p className={style.title}>Почтовый индекс</p>
                <input type='number' className={style.text} value='2634545' />
            </div>
            <button>Сохранить</button>
        </div>
    );
};

export default EditProfileInfo;