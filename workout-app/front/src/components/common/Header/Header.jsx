import React from 'react'
import styles from './Header.module.scss'
import userImage from '../../../images/header/user1.svg'
import Hamburger from './Hamburger/Hamburger'

const Header = () =>{  //пишем компонент header
    return <header className={styles.header}>

    <button type='button'>
          <img src={userImage} alt="Auth"/>
    </button>
    <Hamburger />

    </header> //не нужны ковычки имя класса
}

export default Header