import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Education.module.css'

export const Education = () => {
  return (
    <section className={styles.mainContainer}>
        <section id='education' className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
            <ul className={styles.educationItems}>
                <li className={styles.educationItem}>
                    <img className={styles.educationItemImg} src={getImageUrl("education/educationSNU.JPG")} alt="Shiv Nadar University Chennai" />
                    <div className={styles.educationItemText}>
                        <h3>Shiv Nadar University Chennai</h3>
                        <p>B.Tech Computer Science and engineering <br />Grade : 9.25</p>
                    </div>
                </li>
                <li  className={styles.educationItem}>
                    <img className={styles.educationItemImg} src={getImageUrl("education/educationCBSE.JPG")} alt="Central Board of Secondary Education" />
                    <div className={styles.educationItemText}>
                        <h3>Central Board of Secondary Education</h3>
                        <p>High School <br /> Grade : 91.4 %</p>
                    </div>
                </li>
            </ul>
        </div>
        </section>
        <section id='experience' className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <ul className={styles.educationItems}>
                <li className={styles.educationItem}>
                    <img className={styles.educationItemImg} src={getImageUrl("experience/experiencePotential.JPG")} alt="Shiv Nadar University Chennai" />
                    <div className={styles.educationItemText}>
                        <h3>SNUC Potential - Core Member</h3>
                        <p>Conducted workshops and seminars on Robotics, Embedded Systems, and IoT</p>
                    </div>
                </li>
                <li  className={styles.educationItem}>
                    <img className={styles.educationItemImg} src={getImageUrl("experience/experienceInvente.JPG")} alt="Central Board of Secondary Education" />
                    <div className={styles.educationItemText}>
                        <h3>Invente SSNCE - Organizer</h3>
                        <p>Organized the event HardWired Ideathon </p>
                    </div>
                </li>
            </ul>
        </div>
        </section>
    </section>
  )
}
