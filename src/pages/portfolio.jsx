import React from 'react';
import Project from '../component/Project';
import passGen from '../assets/passwordpic.png';
import weather from '../assets/WeatherAPI.png';
import express from '../assets/Express.png';
import game from '../assets/HigherLowerGame.png';
import music from '../assets/MusicRater.png';
import workday from '../assets/WorkDay.png';

export default function Portfolio (){
  const projects=[
    {
      title:"PasswordGenerator",
      description: `I did create varibale for charactors that can be choose for each password.
      .There are some propmt that will ask user some qustion about lenght of the password and what character user wants to have in this password.
      .There is an alert that will tell user to password lenght should be between 8 charactor to 128.
      .I have 4 different varibale ( number, special, upper, lower).
      .every time user says yes to adding character it will add the value to an aarray and at the end it can create the final password.`,
      repo: "https://github.com/samiyeahsan/passwordgenerator-html.git",
      deployed: "https://samiyeahsan.github.io/passwordgenerator-html/",
      image:passGen
    },
    {
      title:"WeatherAPI",
      description: `A traveler
      who wants to see the weather outlook for multiple cities
      SO THAT he/she can plan a trip accordingly`,
      repo: "https://github.com/samiyeahsan/weather-API.git",
      deployed: "https://samiyeahsan.github.io/weather-API/",
      image:weather

    },
    {
      title:"Express",
      description: `A small business owner
      who WANT to be able to write and save notes
      SO THAT he/she can organize my thoughts and keep track of tasks I need to complete`,
      repo: "https://github.com/samiyeahsan/notes.git",
      deployed: "https://samiyeahsan.github.io/notes/",
      image:express
    },
    {
      title:"HigherLowerGame",
      description: `We created a game for a user to guess which two randomly generated NFL players have the higher salary. The game will end after 3 incorrect guesses, see how high of a score you can get! `,
      repo: "https://github.com/bpavlis/group-project-1.git",
      deployed: "https://bpavlis.github.io/group-project-1/",
      image:game
    },
    {
      title:"MusicRater",
      description: `This is a database that users can rate some songs base on genre. 
      This data pulled from API.`,
      repo: "https://github.com/VernPG/music_rater.git",
      deployed: "https://emotisong-music-rater-cd144b6f7aad.herokuapp.com/",
      image:music
    },
    {
      title:"WorkDayScheduler",
      description: ` AN employee with a busy schedule
      who wants to add important events to a daily planner
      SO THAT they can manage my time effectively`,
      repo: "https://github.com/samiyeahsan/scheduler-html.git",
      deployed: "https://samiyeahsan.github.io/scheduler-html/",
      image:workday
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