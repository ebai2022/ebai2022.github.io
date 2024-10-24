'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'

// Photos
import shelterPhoto from '@/public/images/shelter_photo.jpg'
import cobPhoto from '@/public/images/cob_photo.jpg'
import teamImage from '@/public/images/ethan_leading_photo.jpg'
import roofPhoto from '@/public/images/roof_photo.jpg'
import troopPhoto from '@/public/images/troop_photo.jpg'

const projectDetails = [
  {
    title: 'Project Overview',
    description: 'I spent over a year planning and building a 12\'x16\' lean-to gazebo shelter for the South Bellevue Community Center. This shelter is used by over 100 kids every week from the community center\'s Boys and Girls club and preschool programs. It is fully open to the public and also accessible from the Eastgate Park Tennis Courts.',
    image: shelterPhoto,
    alt: 'Completed Gazebo Shelter'
  },
  {
    title: 'Collaboration',
    description: 'I worked closely with the City of Bellevue (Parks and Recreation) and Puget Sound Energy (PSE) to gather the necessary resources for the project. This collaboration was crucial in ensuring we had all the materials and permissions needed to complete the gazebo.',
    image: cobPhoto,
    alt: 'Team Collaboration'
  },
  {
    title: 'Planning and Design',
    description: 'I collaborated with city planners from my troop to learn how to draw blueprints and verify my designs. This phase was critical in ensuring the gazebo would be safe, functional, and meet all city regulations.',
    image: roofPhoto,
    alt: 'Project Blueprint'
  },
  {
    title: 'Leadership',
    description: 'I led a team of 44 volunteers to build the gazebo. I assigned tasks, managed the construction schedule, and ensured that the project was completed on time and within budget.',
    image: teamImage,
    alt: 'Leading the Team'
  },
  {
    title: 'Impact',
    description: 'The gazebo is the first outdoor shelter built at the community center that people can use. It serves multiple purposes, including providing a space for outdoor games, picnics, and protection from rain. This project has significantly enhanced the community center\'s outdoor facilities.',
    image: troopPhoto,
    alt: 'Gazebo in Use'
  },
]

const timeline = [
  { phase: 'Initial planning and consultation', duration: '3 months' },
  { phase: 'Designing and blueprint creation', duration: '2 months' },
  { phase: 'Fundraising and resource gathering', duration: '4 months' },
  { phase: 'Construction phase', duration: '3 months' },
  { phase: 'Final inspections and project completion', duration: '1 month' },
]

export default function EagleProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-blue-800 to-indigo-900 text-white flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">My Eagle Scout Project</h1>
        <p className="text-lg text-center mb-12">
          Building a Gazebo Shelter for South Bellevue Community Center
        </p>

        <div className="space-y-8">
          {projectDetails.map((detail, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold mb-4">{detail.title}</h2>
                <p className="text-gray-200">{detail.description}</p>
              </div>
              <div className="md:w-1/2 h-80 relative">
                <Image
                  src={detail.image}
                  alt={detail.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-8 text-center">Project Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600"></div>
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className={`mb-8 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center justify-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-5/12"></div>
                <div className="z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
                </div>
                <div className="w-5/12 p-4 bg-white bg-opacity-20 rounded-lg shadow-md backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-1">{item.phase}</h3>
                  <p className="text-sm text-gray-300">{item.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Acknowledgements</h2>
          <p>
            I would like to express my sincere gratitude to all my fellow scouts and leaders at Troop 438, the City of Bellevue, Puget Sound Energy, and all the volunteers who contributed their time and effort to make this project a success. Your support was instrumental in creating a lasting impact on our community and helping me grow as a leader.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}