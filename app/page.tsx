'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TOUZOUZ Adnane
          </h1>
          <div className="flex gap-8">
            {['home', 'projects', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  activeNav === item ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-6xl font-bold">Computer Vision Engineer</h1>
              <p className="text-xl text-gray-400">
                Expert in deep learning, video analysis, and image processing. Specialized in temporal dependencies, action recognition, and designing end-to-end computer vision systems with CNNs, Transformers, and temporal models for real-world applications.
              </p>
              <div className="flex gap-4 pt-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
                >
                  View My Work
                </button>
                <a
                  href="/resume.pdf"
                  download="Adnane_TOUZOUZ_CV.pdf"
                  className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative bg-transparent rounded-2xl p-1 overflow-visible flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Adnane Touzouz - Computer Vision Engineer"
                    width={400}
                    height={400}
                    className="w-auto h-auto rounded-2xl"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card Template */}
            {[
              {
                title: 'Sports Analytics - Real-Time Action Detection',
                description: 'AI-driven sports analytics using ViT and MViT for real-time action detection in futsal with predictive player performance models.',
                tags: ['ViT', 'MViT', 'RNN', 'Sports Analytics', 'PyTorch'],
                image: 'out/futsal_tmpl.png',
              },
              {
                title: 'UAV Image Processing Pipeline',
                description: 'Object detection, classification, and segmentation on high-resolution aerial imagery with optimization for large-scale UAV datasets.',
                tags: ['Object Detection', 'Segmentation', 'UAV', 'OpenCV', 'Deep Learning'],
                image: '/uav_tmpl.jpg',
              },
              {
                title: 'Temporal Action Segmentation',
                description: 'Continuous factory activity recognition addressing long-term temporal dependencies in video streams with RNNs and Transformers.',
                tags: ['LSTM', 'Transformers', 'Video Analysis', 'Action Recognition'],
                image: '/action_tmpl.png',
              },
              {
                title: 'Crowd Behavior Analysis',
                description: 'Motion pattern analysis, density estimation, and abnormal behavior detection in video sequences using deep learning.',
                tags: ['Video Analysis', 'Behavior Detection', 'Motion Analysis', 'CNN'],
                image: '/crowd_tmpl.png',
              },
              {
                title: 'Fire Prevention System',
                description: 'Thermal camera-based hotspot detection and analysis with models optimized for varying environmental conditions.',
                tags: ['Thermal Imaging', 'Detection', 'Computer Vision', 'TensorFlow'],
                image: '/fire_tmpl.png',
              },
              {
                title: 'Livestock Weight Estimation',
                description: 'Visual data processing combining object detection and regression-based approaches for automated livestock analysis.',
                tags: ['Object Detection', 'Regression', 'Agriculture AI', 'PyTorch'],
                image: 'public/catle_weight_tmpl.jpg',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all hover:border-cyan-500/50"
              >
                <div className="relative w-full h-48 overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Computer Vision Engineer',
                company: 'HARMONY TECHNOLOGY',
                period: 'June 2025 - February 2026',
                description: 'Performed object detection and segmentation on UAV images. Contributed to fire prevention systems using thermal cameras. Built crowd behavior analysis models and temporal action segmentation for factory automation.',
              },
              {
                title: 'Computer Vision Engineer',
                company: 'SPORTSCORE',
                period: 'January 2025 - May 2025',
                description: 'Developed AI-driven sports analytics using deep learning (ViT, MViT) and RNNs for real-time action detection in futsal. Built predictive models for player performance and implemented data pipelines.',
              },
              // {
              //   title: 'Computer Vision Intern',
              //   company: 'Arteka',
              //   period: 'October 2024 - December 2024',
              //   description: 'Managed cross-functional data science team for AI-driven sports analytics. Developed ML models and applied statistical analysis to player movement patterns.',
              // },
            ].map((exp, idx) => (
              <div key={idx} className="border-l-2 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-cyan-400 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Computer Vision',
                items: ['Object Detection', 'Pose Estimation', 'Action Recognition', 'Image & Video Segmentation', 'Face Recognition'],
              },
              {
                category: 'Deep Learning & Temporal Models',
                items: ['CNNs', 'RNNs (LSTM, GRU)', 'Transformers (ViT, MViT)', 'CLIP', 'Sequence Modeling'],
              },
              {
                category: 'Programming & Frameworks',
                items: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn'],
              },
              {
                category: 'Data Processing & Tools',
                items: ['NumPy', 'Pandas', 'Large-scale Video Processing', 'SQL', 'MySQL'],
              },
              {
                category: 'Deployment & MLOps',
                items: ['Docker', 'ONNX', 'Flask', 'Streamlit', 'Model Optimization', 'Inference Pipelines'],
              },
              {
                category: 'Visualization & Version Control',
                items: ['Matplotlib', 'Seaborn', 'Git', 'GitHub'],
              },
            ].map((skill, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-lg">
              Interested in collaborating or discussing computer vision projects?
            </p>
          </div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/adnane-touzouz/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:adnane.touzouz.ta@gmail.com"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500">
        <p>© 2026 TOUZOUZ Adnane. All rights reserved.</p>
      </footer>
    </div>
  );
}
