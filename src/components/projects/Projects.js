import React from 'react'
import Title from '../layouts/Title'
import { TikTakToe, WeatherApp, DevDetective, RazorPay } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          // src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          // src={projectTwo}
        />
        <ProjectsCard
          title="Dev Detective App"
          des=" A webpage that fetches a description of any github account on searching. Built using HTML 5, Tailwind, API fetch and JavaScript"
          src={DevDetective}
          gitLink="https://github.com/Abhi-shekh/GitHub-Finder"
          demoLink="https://git-hub-finder-ivory.vercel.app/"
        />
        <ProjectsCard
          title="Weather APP"
          des=" A single-page website that not only determines the weather of any location but also incorporates auto-location detection, built using HTML 5, CSS and JavaScript."
          src={WeatherApp}
          gitLink="https://github.com/Abhi-shekh/weatherforecast/tree/main/WeatherApp"
          // demoLink=
        />
        <ProjectsCard
          title="RazorPay Clone"
          des=" A beautiful single-page frontend website built with HTML 5 and Tailwind CSS."
          src={RazorPay}
          gitLink="https://github.com/Abhi-shekh/RazorPay-Clone"
          // demoLink=
        />
        <ProjectsCard
          title="Tik Tak Toe"
          des=" A game in which two users can play the Tik Tak Toe together, built using HTML 5, CSS, JavaScript. "
          src={TikTakToe}
          gitLink="https://github.com/Abhi-shekh/Tic-Tac-Toe-Game"
          // demoLink=
        />
      </div>
    </section>
  );
}

export default Projects