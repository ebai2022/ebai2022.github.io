'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import profilePhoto from '@/public/images/profile_photo.jpg'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

const MotionButton = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.button),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-indigo-900 text-white flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between flex-grow">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold mb-4">
            {"Welcome! I'm"}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Ethan Bai
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'Athlete',
              2000,
              'Musician',
              2000,
              'Teacher',
              2000,
              'Traveller',
              2000,
              'Eagle Scout',
              2000
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-2xl mb-6"
          />
          <p className="text-lg mb-8">Passionate about building customer-centric products for a better world.</p>
          <a href="/projects">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
            >
              Explore My Work
            </MotionButton>
          </a>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src={profilePhoto}
              alt="Ethan Bai"
              layout="fill"
              className="rounded-full shadow-2xl object-cover border-4 border-purple-500"
            />
          </div>
        </MotionDiv>
      </main>
      <Footer />
    </div>
  )
}