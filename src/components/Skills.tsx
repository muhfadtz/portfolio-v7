import React from 'react';
import {
  Braces,
  Database,
  Globe,
  Cloud,
  Server,
  Code2,
  Layers,
  Cpu,
  GitBranch,
  Terminal
} from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Braces, description: 'Kotlin, React JS, Next JS, Bootstrap, Talwind' },
  { name: 'Backend', icon: Server, description: 'Laravel, Node.Js, Express' },
  { name: 'Database', icon: Database, description: 'Firebase, PostgreSQL, Mysql' },
  // { name: 'Web Dev', icon: Globe, description: 'HTML5, CSS3, JavaScript' },
  // { name: 'Cloud', icon: Cloud, description: 'AWS, GCP, Azure' },
  // { name: 'DevOps', icon: GitBranch, description: 'Docker, Kubernetes, CI/CD' },
  // { name: 'Architecture', icon: Layers, description: 'Microservices, REST, GraphQL' },
  // { name: 'System', icon: Cpu, description: 'Linux, Networking, Security' },
  { name: 'Languages', icon: Code2, description: 'PHP, TypeScript, Python, C++' },
  { name: 'Tools', icon: Terminal, description: 'Git, Github' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Learning</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="skill-card flex flex-col items-center p-6 bg-gray-50 rounded-lg group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon
                  size={40}
                  className="text-gray-700 mb-4 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;