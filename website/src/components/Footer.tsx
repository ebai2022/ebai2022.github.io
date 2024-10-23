import { FaGithub, FaLinkedin, FaYoutube, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="p-5">
      <div className="flex justify-center space-x-6">
        <motion.a 
          whileHover={{ y: -3 }} 
          href="https://github.com/ebai2022" 
          className="text-2xl" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          whileHover={{ y: -3 }} 
          href="https://www.linkedin.com/in/ethan-bai/" 
          className="text-2xl" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          whileHover={{ y: -3 }} 
          href="mailto:ethanbai360@gmail.com" 
          className="text-2xl"
        >
          <FaEnvelope />  {/* Icon representing your email */}
        </motion.a>
        <motion.a 
          whileHover={{ y: -3 }} 
          href="https://github.com/ebai2022/Resume/blob/main/Bai_Ethan_Resume.pdf" 
          className="text-2xl" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaFileAlt />  {/* Icon representing your resume */}
        </motion.a>
        <motion.a 
          whileHover={{ y: -3 }} 
          href="https://www.youtube.com/channel/UCAdthy_I9VzqPqE1I5Fk7fw" 
          className="text-2xl" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </motion.a>
      </div>
    </footer>
  )
}
