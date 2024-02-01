'use client';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '@/app/components/ProjectCard';
import TabProjects from '@/app/components/TabProjects';
import React, { useState, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Portofolio Website',
    category: ['All', 'Web'],
    imgUrl: '/images/projects/1.png',
    description: 'Sebuah Project Front-End Menggunakan bahasa JavaScript dengan Framework NextJS dan Tailwind sebagai CSS engine untuk menampung Portofolio saya',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Project 2',
    category: ['All', 'IoT', 'Web'],
    imgUrl: '/images/projects/2.png',
    description: 'Project 2 description',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Project 3',
    category: ['All', 'ML', 'IoT'],
    imgUrl: '/images/projects/3.png',
    description: 'Project 3 description',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Project 4',
    category: ['All', 'Web'],
    imgUrl: '/images/projects/4.png',
    description: 'Project 4 description',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Project 5',
    category: ['All', 'ML'],
    imgUrl: '/images/projects/5.png',
    description: 'Project 5 description',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Project 6',
    category: ['All', 'IoT'],
    imgUrl: '/images/projects/6.png',
    description: 'Project 6 description',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
  },
];

function ProjectSection() {
  const [tab, setTab] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    setTab(id);
  };

  const filteredProjects = projectsData.filter((project) => project.category.includes(tab));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold text-white mt-8 mb-2">My Projects</h2>
      <div className="mb-4 md:flex flex-row justify-start">
        <TabProjects name="All" active={tab === 'All'} selectTab={() => handleTabChange('All')} />
        <TabProjects name={'Web'} active={tab === 'Web'} selectTab={() => handleTabChange('Web')} />
        <TabProjects name={'Machine Learning'} active={tab === 'ML'} selectTab={() => handleTabChange('ML')} />
        <TabProjects name={'IoT'} active={tab === 'IoT'} selectTab={() => handleTabChange('IoT')} />
      </div>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.div key={index} variants={cardVariants} initial="initial" animate={isInView ? 'animate' : 'initial'} transition={{ duration: 1, delay: index * 0.5 }}>
            <ProjectCard key={project.id} title={project.title} category={project.category} imgUrl={project.imgUrl} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
