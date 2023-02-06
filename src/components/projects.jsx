import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectPreview({ projectName, projectDescription, projectLink }) {
    return (
      <>
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <a href={projectLink}>View project</a>
      </>
    )
  }
  
