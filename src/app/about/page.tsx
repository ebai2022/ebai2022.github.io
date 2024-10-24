'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import badmintonPhoto from '@/public/images/badminton_photo.jpg'
import skiPhoto from '@/public/images/ski_photo.jpg'
import uwLogo from '@/public/images/uw_logo.jpg'
import amazonLogo from '@/public/images/amazon_logo.png'
import centificLogo from '@/public/images/centific_logo.png'
import com2Logo from '@/public/images/com2_logo.png'
import scoutLogo from '@/public/images/scout_logo.png'
import psiaLogo from '@/public/images/psia_logo.png'
import epflLogo from '@/public/images/epfl_logo.png'
import rcmLogo from '@/public/images/rcm_logo.png'
import pianoPhoto from '@/public/images/piano_photo.png'
import japanPhoto from '@/public/images/japan_photo.jpg'

type TabId = 'overview' | 'sports' | 'hobbies'

interface Tab {
  id: TabId
  label: string
}

interface TimelineItem {
  year: string
  title: string
  description: React.ReactNode
  image: StaticImageData
  alt: string
}

interface ItemContent {
  title: string
  description: React.ReactNode
  image: StaticImageData
  alt: string
}

type Items = {
  [K in Exclude<TabId, 'overview'>]: ItemContent[]
}

const tabs: Tab[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'sports', label: 'Sports' },
  { id: 'hobbies', label: 'Hobbies' },
]

const timelineItems: TimelineItem[] = [
  {
    year: '2024',
    title: 'Study Abroad at EPFL',
    description: 'Studying abroad at École Polytechnique Fédérale de Lausanne (EPFL) in Switzerland for a semester. Excited to explore a new culture and learn from a different perspective!',
    image: epflLogo,
    alt: 'EPFL Logo'
  },
  {
    year: '2024',
    title: 'Snack Overflow Director',
    description: <>Serving as Snack Overflow Director for COM<sup>2</sup>! Making computer science students at UW happier every day😊</>,
    image: com2Logo,
    alt: 'COM2 Logo'
  },
  {
    year: '2023',
    title: 'Amazon SDE Internship',
    description: 'Interned at Amazon in San Diego as a software engineer in Buyer Risk Prevention.',
    image: amazonLogo,
    alt: 'Amazon Logo'
  },
  {
    year: '2022',
    title: 'Centific SWE Internship',
    description: 'Interned at Centific as a software engineer in Digital Engineering Services.',
    image: centificLogo,
    alt: 'Centific Logo'
  },
  {
    year: '2022',
    title: 'Computer Science Degree',
    description: "Started my Bachelor's degree in Computer Science at the University of Washington.",
    image: uwLogo,
    alt: 'University of Washington'
  },
  {
    year: '2021',
    title: 'Eagle Scout',
    description: 'Achieved the rank of Eagle Scout with Troop 438, Bellevue WA.',
    image: scoutLogo,
    alt: 'Eagle Photo'
  },
  {
    year: '2018',
    title: 'RCM Level 10 Piano Certification',
    description: 'Completed the Royal Conservatory of Music (RCM) Level 10 Piano Certification with First Class Honors.',
    image: rcmLogo,
    alt: 'RCM Photo'
  },
  {
    year: '2018',
    title: 'PSIA Alpine 1 Certification',
    description: 'Became one of the youngest skiers in the pacific northwest to obtain Alpine 1 certification from the Professional Ski Instructors of America (PSIA).',
    image: psiaLogo,
    alt: 'PSIA Photo'
  },
].sort((a, b) => parseInt(b.year) - parseInt(a.year))

const items: Items = {
  sports: [
    {
      title: "Badminton",
      description: "I've been playing competitive badminton since 13 years old. I play for the University of Washington and also for EPFL in Switzerland. I compete on the national and collegiate level in the USA, where I was formerly ranked in the top 50 in U19.",
      image: badmintonPhoto,
      alt: "Badminton Photo"
    },
    {
      title: "Ski & Snowboard",
      description: (
        <>
          I love the snow and everything related to it! I have been skiing since 4 years old and started picking up snowboarding last year thanks to my coach
          <a href="https://www.instagram.com/leemms_/" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-100 transition-colors"> ❤️</a>.
          {"I'm"} certified by the Professional Ski Instructors of America, have taught at the Summit at Snoqualmie, and have raced for Team Alpental Snoqualmie. Always looking for new places to explore!
        </>
      ),
      image: skiPhoto,
      alt: "Whistler Photo"
    },
  ],
  hobbies: [
    {
      title: "Piano",
      description: "I am a classically trained pianist that has been playing since I was 4 years old. I completed the Royal Conservatory of Music (RCM) Level 10 Piano Certification with First Class Honors after 10 years of playing piano, and I have been playing for fun ever since. My favorite artist is Liszt and my favorite pieces that I have played are Claire de Lune, Schumann-Liszt Widmung, and Beethoven Sonata No.1 in F minor.",
      image: pianoPhoto,
      alt: "Piano Photo"
    },
    {
      title: "Photography",
      description: "I believe that a picture is worth a thousand words, so why not take a thousand pictures? I love documenting everywhere I go and everything I do through the use of photos. Looking to get myself a camera in the future and work on my photography skills!",
      image: japanPhoto,
      alt: "Photo Photo"
    },
  ],
}

export default function About() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-indigo-900 text-white flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <div className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeTab === tab.id ? 'bg-purple-500 text-white' : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' ? (
              <div className="space-y-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
                  <p className="text-lg mb-4">
                    {"I'm"} a computer science student studying at the University of Washington. I chose computer science because I love building, problem solving, and working across multiple fields.
                    I spent last summer interning at Amazon in San Diego as a software engineer and at Centific the year prior. My work has primarily involved backend work like building databases and machine learning models, but I am also experienced in full stack development. I believe in a well-rounded life with many interests, which you can explore in the other sections!
                  </p>
                </div>
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 absolute border-opacity-20 border-white h-full border left-1/2"></div>
                  {timelineItems.map((item, index) => (
                    <div 
                      className={`mb-8 flex justify-between items-center w-full ${
                        index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                      }`}
                      key={index}
                    >
                      <div className="order-1 w-5/12"></div>
                      <div className="z-20 flex items-center justify-center order-1 bg-purple-500 shadow-xl w-10 h-10 rounded-full">
                        <h1 className="mx-auto font-semibold text-sm text-white">{item.year}</h1>
                      </div>
                      <motion.div 
                        className="order-1 bg-white bg-opacity-10 rounded-lg shadow-xl w-5/12 px-6 py-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                        <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{item.description}</p>
                        <div className="mt-4 h-32 relative">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="rounded-lg object-contain"
                          />
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}