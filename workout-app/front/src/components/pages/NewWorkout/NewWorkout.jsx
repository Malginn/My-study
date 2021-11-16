import React from 'react'
import Layout from '../../common/Layout'
import bgImage from '../../../images/bg-auth.png'
import { useNavigate } from 'react-router-dom' 
import styles from './NewWorkout.module.scss'
import Field from '../../ui/Field/Field'
import Button from '../../ui/button/Button'

const NewWorkout = () => {
    const navigate = useNavigate()
    const [name, setName] = React.useState()

    const handleSubmit = () =>{
        console.log('submit')
    }

    return (
        <>
        <Layout bgImage={bgImage} backCallback={() => navigate(-1)} />
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit} >
                    <Field
                        onSubmit={handleSubmit}
                        placeholder='Enter name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {/* //react select */}
                    <Button text='Create' callback={() =>{}} />
                </form>
            </div>
        </>
    )
}

export default NewWorkout
