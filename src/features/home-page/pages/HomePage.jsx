import DustyCS from '../../../assets/projects/DustyChar.png'

import { setCategoryOnLocalStorage } from '../../../utils/helper'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import ProjectCards from '../components/projects card/ProjectCards'

import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";

// const data = [
//   {
//     title: "Project 2",
//     images: ["https://via.placeholder.com/150"],
//     description: "This is a description for Project 1.",
//     links: [
//       { label: "GitHub", url: "https://github.com" },
//       { label: "Live Demo", url: "https://example.com" }
//     ],  
//     tags: ["tag1", "tag2"]
//   }
// ]

export default function HomePage() {
  return (
    <div className='h-full'>
        <div className='w-[95vw] m-auto mt-1'>
            <h1 className='text-6xl px-4 font-extrabold mb-4'>Projects</h1>
            <div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full md:w-1/2 h-96 bg-gray-200 rounded-lg overflow-hidden'>
                        <img src={DustyCS} alt="DustyCS" className='w-full h-[100%] object-cover object-center' />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center'>
                        <h2 className='text-4xl font-bold mb-4'>DustyCS Projects</h2>
                        <p className='text-lg mb-4'>A collection of my programming projects, including web applications, scripts, and tools. Explore my work and see what I've been building!</p>
                    </div>

                </div>  
                {/* <div className='mt-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50'>
                    <ProjectCards {...data[0]}/> */}
                {/* </div> */}
                <div className='mt-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50'>
                    {projects.map((project) => (
                        <Link key={project.slug} to={`/${project.slug}`} onClick={() => setCategoryOnLocalStorage('All')}>
                            <ProjectCards {...project} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
