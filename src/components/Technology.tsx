import React from 'react';
import { Database, Server, Smartphone, Cloud, Cpu, GitBranch } from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    icon: Smartphone,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Modern, responsive user interface'
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Express.js', 'RESTful APIs'],
    description: 'Scalable server architecture'
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['MongoDB', 'Redis Cache', 'Data Analytics'],
    description: 'Secure and efficient data storage'
  },
  {
    category: 'AI/ML',
    icon: Cpu,
    technologies: ['TensorFlow', 'Python', 'Anomaly Detection'],
    description: 'Intelligent compliance monitoring'
  },
  {
    category: 'Blockchain',
    icon: GitBranch,
    technologies: ['Hyperledger', 'Smart Contracts', 'Audit Trails'],
    description: 'Immutable compliance records'
  },
  {
    category: 'Cloud',
    icon: Cloud,
    technologies: ['AWS/Azure', 'Auto-scaling', 'Security'],
    description: 'Enterprise-grade infrastructure'
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Built with Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our MERN stack architecture combined with AI/ML and blockchain ensures 
            enterprise-grade performance at small business prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{tech.category}</h3>
              </div>
              
              <p className="text-gray-400 mb-4">{tech.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((technology, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Architecture Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200">99.9%</div>
                <div className="text-blue-100">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">&lt;100ms</div>
                <div className="text-blue-100">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">256-bit</div>
                <div className="text-blue-100">Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}