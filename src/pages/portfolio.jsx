import React from 'react';
import Project from '../component/Project';
import passGen from '../assets/passwordpic.png';
import weather from '../assets/WeatherAPI.png';
import express from '../assets/Express.png';
import game from '../assets/HigherLowerGame.png';
import music from '../assets/MusicRater.png';
import workday from '../assets/WorkDay.png';
import wot from '../assets/wot.png';
import pwa from '../assets/PWA.png';
import svg from '../assets/OOP.png';
import object from '../assets/13-orm-homework-demo-01.gif';
import sql from '../assets/SQL.png';
import sna from '../assets/18-nosql-homework-demo-01.gif';

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
      description: ` An employee with a busy schedule
      who wants to add important events to a daily planner
      so that they can manage my time effectively`,
      repo: "https://github.com/samiyeahsan/scheduler-html.git",
      deployed: "https://samiyeahsan.github.io/scheduler-html/",
      image:workday
    },
    {
      title:"Employee DATABASE",
      description: `A business owner
      who wants to be able to view and manage the departments, roles, and employees in my company
      SO THAT I can organize and plan my business`,
      repo: "https://github.com/samiyeahsan/employee_data.git",
      deployed: "https://watch.screencastify.com/v/q5oFLtash8yFjcovRL1V",
      image:sql
    },
    {
      title:"Object-Relational Mapping (ORM)",
      description: `functional Express.js API
      WHEN user add my database name, MySQL username, and MySQL password to an environment variable file
      THEN able to connect to a database using Sequelize
      WHEN user enter schema and seed commands
      THEN a development database is created and is seeded with test data
      WHEN user enter the command to invoke the application
      THEN server is started and the Sequelize models are synced to the MySQL database
      WHEN user open API GET routes in Insomnia for categories, products, or tags
      THEN the data for each of these routes is displayed in a formatted JSON
      WHEN user test API POST, PUT, and DELETE routes in Insomnia
      THEN user is able to successfully create, update, and delete data in my database`,
      repo: "https://github.com/samiyeahsan/Object-Relational.git",
      deployed: "https://samiyeahsan.github.io/Object-Relational/",
      image:object
    },
    {
      title:"SVG-LogoMaker",
      description: `I did created 3 js file and one of them is shape.js that included class and subclasses to descibe shape, test color and color of the text. second one is index.js that will prompt question from user and base on that will creat logo.svg third file is shape.test.js to test my shape.js using jest to make usre verything works . I did run the test and created logo.svg file everything work fine. I did create a video to show all of the steps I did as well.`,
      repo: "https://github.com/samiyeahsan/SVG-LogoMaker.git",
      deployed: "https://app.screencastify.com/v2/watch/wXoEhyZops2NGHO30IaZ",
      image:svg
    },
    {
      title:"Social Network API",
      description: `I build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I did use Express.js for routing, a MongoDB database, and the Mongoose ODM.`,
      repo: "https://github.com/samiyeahsan/social_networking.git",
      deployed: "https://samiyeahsan.github.io/social_networking/",
      image:sna
    },
    {
      title:"Text-Editer",
      description: `User WANT to create notes or code snippets with or without an internet connection
      SO THAT user can reliably retrieve them for later use`,
      repo: "https://github.com/samiyeahsan/PWA-textEditer",
      deployed: "https://pwa-sa-2dca439467e4.herokuapp.com/",
      image:pwa
    },
    {
      title:"Warlord of Ravagea",
      description: ` Warlords of Ravagea is a tactical grid based card game inspired by Magic the Gathering and Triple Triad: Originally a Mini Game within Final Fantasy VIII.

      This game was created as a group project in an edX Full Stack Development Bootcamp. It showcases a variety of technology such as React, JavaScript, Mongoose and Bootstrap. It also showcases a fair amount of case specific items such as Drag and Drop done with only useState, Context data, session storage, password encryption and stripping, and interaction for users to create a deck of cards, get some booster packs, and adjust as they see fit. This project was done in a 1 week time crunch from concept to creation and showcases the desire to think outside the box while pushing further down coding rabbit hole.`,
      repo: "https://github.com/kylatae/tcg",
      deployed: "https://warlordsofravegea-c36fa2705fc4.herokuapp.com/",
      image:wot
    },
    
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