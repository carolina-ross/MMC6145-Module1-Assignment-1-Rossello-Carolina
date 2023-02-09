import styles from '../styles/contact.module.css';
import React from 'react';

export default function Contact() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Here you can find the links to my LinkedIn and GitHub</h1>
      <div className={styles.iconContainer}>
      <a href="https://www.linkedin.com/in/carolina-rossello-46b520241/" target="_blank">
           <img className={styles.icon} src='./src/components/linkedin.png'  alt="LinkedIn profile" />
        </a>

        <a href="https://github.com/carolina-ross" target="_blank">
        <img className={styles.icon} src="./src/components/github.png" alt="GitHub profile" />
        </a>

      </div>
    </main>
  )
}

