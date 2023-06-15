import IProject from '@/lib/interface/IProject'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

type Props = IProject

const ProjectCard: React.FC<Props> = ({ name, desc, image }) => {
  return (
    <Card className="col-span-12 lg:col-span-3">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <AspectRatio ratio={16 / 9} className="relative bg-black dark:bg-white">
            <Image src={image} alt={name} fill className='p-1'/>
          </AspectRatio>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
