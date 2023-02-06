import styles from '../styles/home.module.css';
import React from 'react';
import ProjectPreview from '../components/projects'; 

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Welcome to my Portfolio Site</h1>
      <p>Here are some of my projects:</p>
<ul>
<li>
<ProjectPreview 
         projectName="Project 1"
         projectDescription="This is a description of Project 1"
         projectLink="#"
       />
</li>
<li>
<ProjectPreview 
         projectName="Project 2"
         projectDescription="This is a description of Project 2"
         projectLink="#"
       />
</li>
</ul>
    </main>
  )
}

