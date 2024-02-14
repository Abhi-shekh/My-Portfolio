import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaInternetExplorer, FaWordpressSimple, FaReact, FaLaptop, } from "react-icons/fa";
import { SiProgress, SiCplusplus, SiAntdesign, SiWeb3Dotjs, SiGoogle } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title  des={"What I Do"} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Programming"
          des="I use C++ as a programmming language to solve problems on Data Structures and algorithms. I have solved 100+ questions on leetcode platfrom"
          icon={<SiCplusplus />}
        />
        <Card
          title="Web Development"
          des="I am a full Stack developer with MERN Stack. I generally use ReactJS and ExpressJS to build projects."
          icon={<FaReact />}
        />
        <Card
          title="Video Editing"
          des="I use Adobe premiere pro to edit videos."
          icon={<FaLaptop />}
        />
      </div>
    </section>
  );
}

export default Features