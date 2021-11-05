import React, { Children } from 'react'
import Header from './Header'

import styles from './Layout.module.scss'

const Layout = ({children}) => { //children == content of app layout????
    return (
        <div className={styles.wrapper}>
            <Header />
            {children} 
        </div>
    )
}

export default Layout
