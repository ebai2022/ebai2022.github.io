'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { MdSettings, MdSearch, MdGames, MdGroups, MdMessage, MdMap, MdFlight, MdSmartToy } from 'react-icons/md'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'

interface Project {
  icon: React.ReactNode;
  title: string;
  description: string[];
  tools: string[];
  githubLink?: string;
}

const projects: Project[] = [
  {
    icon: <MdSettings className="text-4xl text-purple-400" />,
    title: 'xk Operating System',
    description: [
      'Developed a Unix-like operating system from scratch that supports multi-threading, virtual memory, and file systems. Implemented a shell that supports multiple commands, piping, and redirections.',
    ],
    tools: ['C', 'C++', 'Unix/Linux'],
  },
  {
    icon: <MdSearch className="text-4xl text-purple-400" />,
    title: 'Webserver Search Engine',
    description: [
      'Built a complete webserver using C and C++ that serves a webpage interface, accepts client search requests, finds relevant documents and webpages in its index, then serves a response over the internet.',
    ],
    tools: ['C', 'C++', 'HTTP', 'TCP/IP', 'POSIX', 'Unix/Linux', 'DNS protocols'],
  },
  {
    icon: <MdGames className="text-4xl text-purple-400" />,
    title: 'Java Game Engine',
    description: [
      'Created a game engine that supports a customized version of the Pac-Man video game that contains original maps, music, and dynamic user modifications.',
    ],
    tools: ['Java', 'Javafx'],
    githubLink: 'https://github.com/hcp-uw/java-game-engine-pacman'
  },
  {
    icon: <MdGroups className="text-4xl text-purple-400" />,
    title: 'Fred Hutch Social Network',
    description: [
      'Built a back-end application to track research co-authorship between scientists on the infectious disease team and visualized their mutual efforts before and throughout COVID-19 using SOCNETV.',
    ],
    tools: ['Python', 'SocNetV', 'JSON', 'CSV'],
    githubLink: 'https://github.com/ebai2022/fred_hutch_publication_map'
  },
  {
    icon: <MdMessage className="text-4xl text-purple-400" />,
    title: 'uMessage',
    description: [
      'Created a chat application that utilizes multiple implementations of different data structures to efficiently drive word suggestion, spelling correction, and auto-completion.',
    ],
    tools: ['Java', 'HTML', 'CSS'],
    githubLink: 'https://github.com/ebai2022/uMessage'
  },
  {
    icon: <MdMap className="text-4xl text-purple-400" />,
    title: 'UW Campus Map',
    description: [
      'Developed a full stack web application that allows users to find the shortest walk-able path from one building to another on campus and receive directional instructions.',
    ],
    tools: ['Java', 'Typescript', 'React', 'JSON', 'GSON', 'HTML'],
    githubLink: 'https://github.com/ebai2022/UWCampusMap'
  },
  {
    icon: <MdFlight className="text-4xl text-purple-400" />,
    title: 'Flight App',
    description: [
      'Designed a database for the flight booking system using SQL Azure server. Implemented flight booking application that allows customers to perform task such as create username, login, search for itinerary, cancel reservation, and pay.',
    ],
    tools: ['Java', 'SQL', 'Azure'],
    githubLink: 'https://github.com/ebai2022/FlightApp'
  },
  {
    icon: <MdSmartToy className="text-4xl text-purple-400" />,
    title: 'Operation Thanos',
    description: [
      'Built a Chess AI program that is able to play at a 1300-1400 ELO rating and features a take-back feature, a blunder warning, and a start from FEN position feature.',
    ],
    tools: ['Javascript', 'Lichess API'],
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-indigo-900 text-white flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {project.icon}
                <h2 className="text-2xl font-semibold ml-4">{project.title}</h2>
              </div>
              <p className="text-sm text-purple-200 mb-2">{project.tools.join(', ')}</p>
              {project.description.map((desc, idx) => (
                <p key={idx} className="mb-2">{desc}</p>
              ))}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}