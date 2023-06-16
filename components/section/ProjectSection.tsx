'use client'

import IProject from '@/lib/interface/IProject'
import React from 'react'
import ProjectCard from '../reusable/ProjectCard'

const projects: IProject[] = require('../../asset/data/projects.json')

type TProps = {
  type: IProject['type']
}

const ProjectSection: React.FC<TProps> = ({ type }) => {
  return (
    <>
      {projects.filter(project => project.type === type).length ? (
        <div className='grid grid-cols-12 gap-2'>
          {projects.filter(project => project.type === type).map((project, index) => (
            <ProjectCard
              {...project}
              key={index}
            />))}
        </div>
      ) : (
        <p className="col-span-12 w-max overflow-hidden rounded-lg p-2 pl-0 text-sm font-light">
          There&apos;s No Project For Now
        </p>
      )}
    </>
  )
}

export default ProjectSection
