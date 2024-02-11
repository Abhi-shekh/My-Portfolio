import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
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
         
        />
        <Card
          title="Web Development"
          des="I am a full Stack developer with MERN Stack. I generally use ReactJS and ExpressJS to build projects."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Video Editing"
          des="I use Adobe premiere pro to edit videos."
          icon={<SiProgress />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        /> */}
      </div>
    </section>
  );
}

export default Features