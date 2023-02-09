import React from 'react';
import styles from '../styles/projects.css';

export default function ProjectPreview({ projectName, projectDescription, projectLink }) {
    return (
      <>
      
      <div className="projectPreview">
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <a href={projectLink}>View project</a>
        </div>
        
      </>
    )
  }
  
