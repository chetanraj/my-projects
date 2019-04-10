import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './App.css';

function openProject(url) {
  console.log('url :: ', url);
}

const Projects = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Projects {
        site {
          siteMetadata {
            projects {
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div className="cards">
        {data.site.siteMetadata.projects.map(project => {
          return (
            <div className="card-container">
              <div className="frame" />
              <div onClick={() => openProject(project.url)} className="card">
                {project.name}
              </div>
            </div>
          );
        })}
      </div>
    )}
  />
);

export default Projects;
