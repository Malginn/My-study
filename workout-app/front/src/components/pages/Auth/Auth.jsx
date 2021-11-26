import React from 'react'
import Layout from '../../common/Layout'
import bgImage from '../../../images/bg-auth.png'
import { useNavigate } from 'react-router-dom' 
import Field from '../../ui/Field/Field'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'
import Alert from '../../ui/Alert/Alert'

const Auth = () => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('') //('')  ---по дефолту пустые строки
    const [password, setPassword] = React.useState('')
    const [type, setType] = React.useState('auth')  //auth, reg

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(type === 'auth'){
            console.log('auth')
        }else{
            console.log('reg')
        }
    }

    return (
        <>
        <Layout bgImage={bgImage} backCallback={() => navigate(-1)} heading='Auth || Register' />
            <div className='wrapper-inner-page'>
            {true && <Alert text='You have been successfully'/>}
                <form onSubmit={handleSubmit}>
                    <Field
                        placeholder='Enter email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <Field
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <div className={styles.wrapperButtons}>
                        <Button text='Sign up' callback={() => setType('auth')} />
                        <Button text='Sign in' callback={() => setType('reg')} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Auth
