import React from 'react'
import styles from './Header.module.scss'
import userImage from '../../../images/header/user1.svg'
import Hamburger from './Hamburger/Hamburger'
import arrowImage from '../../../images/header/Arrow2.svg'
import { useLocation } from "react-router-dom";

const Header = ({backCallback}) =>{  //пишем компонент header

    const { pathname } = useLocation()
    console.log(pathname)

    return <header className={styles.header}>
    {pathname !== '/' ? (
        <button type='button' onClick={backCallback}>
          <img src={arrowImage} alt="Auth"/>
        </button>
    )    : (
    <button type='button'>
          <img src={userImage} alt="Auth"/>
    </button>
    )}
    
    <Hamburger />

    </header> //не нужны ковычки имя класса
}

export default Header