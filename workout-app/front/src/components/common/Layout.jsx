import React from 'react'
import Header from './Header/Header'

import styles from './Layout.module.scss'

const Layout = ({children, bgImage, height='350px'}) => { //children == content of app layout????
    return (
        <div className={styles.wrapper} style={{height, backgroundImage:`url(${bgImage})`}}>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Layout