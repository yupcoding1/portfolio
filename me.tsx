import React from 'react';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = ['about', 'education', 'projects', 'experience', 'skills']

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24 pb-12">
        <section className="mb-20 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mohammed Huzefa Abbasi
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Electronics and Telecommunications Student
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="mailto:mdhuzefabbasi@gmail.com" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
          </motion.div>
        </section>

        {activeSection === 'about' && (
          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Electronics and Telecommunications student with a focus on AI and Machine Learning. 
              My expertise spans across various programming languages and frameworks, allowing me to tackle complex 
              problems and create innovative solutions. I'm particularly interested in image processing, natural 
              language processing, and developing efficient AI models.
            </p>
          </motion.section>
        )}

        {activeSection === 'education' && (
          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Pune Institute of Computer Technology</h3>
              <p className="text-gray-400 mb-2">Electronics and Telecommunications, Honours in AI-ML</p>
              <p className="text-gray-400 mb-2">GPA: 9.24</p>
              <p className="text-gray-400">Dec. 2022 – June 2026</p>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Image Entity Extraction Project",
                  description: "Built a multi-pipeline model to process 250K+ training and 150K+ test images for entity extraction.",
                  tech: "Python, TensorFlow, VGG16, BERT, OCR, VLMs",
                  link: "#"
                },
                {
                  title: "Automatic Email Replier",
                  description: "Developed an automatic email replier using Langchain, llama and huggingface. Categorizes emails and uses RAG for replying.",
                  tech: "Python, Langchain, NLP, RAG, Langgraph, Groq, huggingface",
                  link: "#"
                },
                {
                  title: "Potato Disease Detection",
                  description: "Created a potato disease detection system using CNNs and Tensors. Implemented using FastAPI.",
                  tech: "Python, FastAPI, Tensorflow, CNN, Scikit-Learn",
                  link: "#"
                },
                {
                  title: "PASC Website",
                  description: "Contributed to the main award-winning website and other club websites including PASC blogs and event websites.",
                  tech: "HTML, JavaScript, React.js, Next.js, Tailwind CSS, node, Postgres",
                  link: "#"
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-gray-400 mb-4">Tech: {project.tech}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {activeSection === 'experience' && (
          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">PICT MUN</h3>
                <p className="text-gray-400 mb-2">Chief Strategy Officer | March 2024 - Present</p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Leading a team of 10 heads and over 50 juniors, overseeing operations and ensuring successful outcomes.</li>
                  <li>Managing to hold an annual conference with 7 UN Committees and 1 Indian Committee</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">PICT ACM</h3>
                <p className="text-gray-400 mb-2">Active Member | 2022 - Present</p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Actively contributed to the organization and execution of the Pulzion Event.</li>
                  <li>Contributed in the Technical, Marketing, Publicity, Social Media and Design teams</li>
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'skills' && (
          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Languages</h3>
                <p className="text-gray-300">Python, C/C++, SQL, JavaScript, HTML/CSS, Java, PHP, Flutter</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Frameworks</h3>
                <p className="text-gray-300">React, Next.js, TypeScript, Node.js, Express.Js, Tailwind CSS, Docker, Postgres, SCRUM, FastAPI</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Developer Tools</h3>
                <p className="text-gray-300">VS Code, Google Collab, Postman, Git, GitHub, Pycharm, Figma, Multisim, Unity</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Libraries</h3>
                <p className="text-gray-300">Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, Tensorflow, Pytorch, OpenCV, YOLO, NLTK(Basic), Tensorfow-Lite</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Concepts</h3>
                <p className="text-gray-300">Neural Networks, Regression, Deep Learning, Computer Vision, NLP, GANs, VLMs, LLMs, Vision Transformer, DSA, OOPS, Algorithms, DBMS, CN, OS</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Others</h3>
                <p className="text-gray-300">Arduino, ESP 32, Embedded C, Prompt Engineering</p>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="bg-gray-900 py-6 text-center">
        <p className="text-gray-400">&copy; 2024 Mohammed Huzefa Abbasi. All rights reserved.</p>
      </footer>

      <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <ChevronDown className="transform rotate-180" />
        </button>
      </motion.div>
    </div>
  )
}