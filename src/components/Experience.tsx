import React from 'react';
import { Briefcase, Rocket, Shield, Cloud, Database, Code } from 'lucide-react';

const experiences = [
  { company: 'VA', role: 'Lead DevSecOps Architect', period: '2022-Present', description: 'Spearheading the implementation of cutting-edge DevSecOps practices, enhancing security and efficiency across VA\'s digital infrastructure.', icon: <Shield className="text-blue-400" size={24} /> },
  { company: 'USDA', role: 'Senior DevSecOps Engineer', period: '2020-2022', description: 'Led the adoption of advanced DevSecOps methodologies, significantly improving deployment frequency and reducing security vulnerabilities.', icon: <Cloud className="text-green-400" size={24} /> },
  { company: 'FEMA', role: 'DevOps Engineer', period: '2018-2020', description: 'Implemented robust CI/CD pipelines and disaster recovery systems, crucial for FEMA\'s emergency response capabilities.', icon: <Database className="text-yellow-400" size={24} /> },
  { company: 'Department of Defense', role: 'IT Specialist', period: '2015-2018', description: 'Managed critical defense systems, ensuring high availability and security in line with strict military standards.', icon: <Shield className="text-red-400" size={24} /> },
  { company: 'NASA', role: 'Contractor', period: '2010-2015', description: 'Contributed to space exploration projects, developing software solutions for mission-critical systems.', icon: <Rocket className="text-purple-400" size={24} /> },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold text-blue-400 flex items-center">
                {exp.icon}
                <span className="ml-2">{exp.company}</span>
              </h3>
              <p className="text-gray-400">{exp.period}</p>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="flex items-center mb-4">
                  <Briefcase className="mr-3 text-blue-400" />
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;