import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../assets/property.jpg';
import driveImg from '../assets/drive.jpg';
import beachesImg from '../assets/beaches.jpg';
import bestEatsImg from '../assets/bestEats.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cumque
        non animi labore incidunt ipsum officia culpa beatae necessitatibus!
        Nisi praesentium iusto pariatur impedit minus quisquam inventore
        laboriosam sed perferendis.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={driveImg} title='Drive App' />
        <ProjectItem img={propertyImg} title='Property App' />
        <ProjectItem img={beachesImg} title='Beaches App' />
        <ProjectItem img={bestEatsImg} title='BestEats App' />
      </div>
    </div>
  );
};

export default Projects;
