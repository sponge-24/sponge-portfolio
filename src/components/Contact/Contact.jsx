import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact'>
        <div className={styles.container}>
            <p className={styles.footer}>Developed and maintained by Sponge-24</p>
            <div className={styles.ImgContainer}>
                <a href="mailto:sudharsanankannan2408@gmail.com" target="_blank"><img className={styles.image} src={getImageUrl('contact/emailIcon.png')} alt="email"/></a>
                <a href="https://github.com/sponge-24" target="_blank"><img className={styles.image} src={getImageUrl('contact/githubIcon.png')} alt="=github" /></a>
                <a href="https://www.linkedin.com/in/sudharsanan24/" target="_blank"><img className={styles.image} src={getImageUrl('contact/linkedinIcon.png')} alt="linkedin" /></a>
            </div>
        </div>
    </footer>
  )
}
