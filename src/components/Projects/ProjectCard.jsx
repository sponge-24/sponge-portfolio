import React from "react";
import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'

export const ProjectCard = ({project: {title, imageSrc, description, skills, source}}) => {
  return (
    <div className={styles.container}>
      {/* <img src={getImageUrl(imageSrc)} alt={title} className={styles.image}/> */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li key={id} className={styles.skill}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <img className={styles.linkImg} src={getImageUrl("projects/github.png")} alt="" />
        <a target="_blank" className={styles.link} href={source}>Source Code</a>
      </div>
    </div>
  );
};
