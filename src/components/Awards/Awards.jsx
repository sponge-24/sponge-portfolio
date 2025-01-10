import React from 'react'
import awards from '../../data/awards.json'
import styles from './Awards.module.css'

export const Awards = () => {
  return (
    <section id="awards" className={styles.container}>
        <h2 className={styles.title}>Awards</h2>
        <ul className={styles.awards}>
            {
                awards.map((award, id) => {
                    return(
                        <li className={styles.award} key={id}>{award.description}</li>
                    )
                })
            }
        </ul>
    </section>
  )
}
