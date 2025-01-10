import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'am Sudharsanan K</h1>
            <p className={styles.description}>I focus on fixing flaws in low-level systems and building secure, efficient designs with precision and security.</p>
            <a  href="/resume.pdf" download='resume.pdf' className={styles.contactBtn}>Get My Resume</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg}/>
    </section>
  )
}
