import React from 'react'
import skills from '../../data/skills.json'
import {getImageUrl} from '../../utils'
import styles from './Skills.module.css'

export const Skills = () => {
  return (
    <section className = {styles.container} id="skills">
        <h2 className = {styles.title}>Skills</h2>
        <div className = {styles.skills} >{
            skills.map((skill, id) => {
                return(
                    <div className = {styles.skill} key={id}>
                        <div className = {styles.skillImgContainer} ><img  className = {styles.skillImg} src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                        <p>{skill.title}</p>
                    </div>
                )
            })
        }</div>
    </section>
  )
}
