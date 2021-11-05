import React from 'react'
import Home from './components/pages/Home/Home'
import Layout from './components/common/Header/Layout'

const App = () => {
    return ( //это всё будет children??
    <Layout>
        <Home />    
    </Layout>
    )
}

export default App
