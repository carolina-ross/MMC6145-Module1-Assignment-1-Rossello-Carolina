import styles from '../styles/home.module.css';
import React from 'react';
import ProjectPreview from '../components/projects'; 

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Welcome to my Portfolio Site</h1>
      <p className={styles.subText}>Here are some of my projects:</p>

<div className="projectsContainer">
<ProjectPreview
         projectName="Project 1"
         projectDescription="This is my first group project where we created a page of the last Batman movie"
         projectLink="http://127.0.0.1:5500/rob_pattinson_page.html"
       />

<ProjectPreview
         projectName="Project 2"
         projectDescription="This is my second group project. Here we created a fitness app"
         projectLink="http://127.0.0.1:5501/Workouts%20Page.html"
       />
</div>
    </main>
  )
}

