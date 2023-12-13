import React from 'react';
import Project from '../component/Project';

export default function Portfolio (){
  const projects=[
    {
      title:"PasswordGenerator",
      description: "",
      repo: "#",
      deployed: "#",
      image:""
    },
    {
      title:"project2",
      description: "",
      repo: "#",
      deployed: "#",
      image:""

    },
    {
      title:"project3",
      description: "",
      repo: "#",
      deployed: "#",
      image:""
    },
    {
      title:"project1",
      description: "",
      repo: "#",
      deployed: "#",
      image:""
    },
    {
      title:"project6",
      description: "",
      repo: "#",
      deployed: "#",
      image:""
    },
    {
      title:"project1",
      description: "",
      repo: "#",
      deployed: "#",
      image:""
    }
    
  ]
 
  return(
    <main className=" container mx-auto px-4 "> 
      <h1>
        These are the projects that I created
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-4">
        {
          projects.map(project => (
            <Project title={project.title}  description={project.description} repo={project.repo} deployed={project.deployed} image={project.image}/>

          ))
        }

      </div>
    </main>
  )
}