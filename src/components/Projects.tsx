import React, { useState } from 'react';
import { ExternalLink, Github as GitHub, ChevronLeft, ChevronRight, X, Link } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  demo: string;
  websiteUrl: string;
  documentationUrl: string;
  tags: string[];
  features: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    deployment: string[];
  };
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const projects: Project[] = [
  {
    title: 'Mobile App AC Service-OnJasa',
    description: 'This application is to create a practical solution in ordering AC services through features such as user authentication, two user perspectives (technician and customer), service ordering, order tracking, and direct communication integration.',
    longDescription: `A comprehensive e-commerce solution featuring:
      • User authentication and authorization
      • Two User Perspectives
      • Service Booking
      • Order management system
      • Integrated Direct Communication
      • Responsive design for all devices`,
    image: '25.jpg',
    github: 'https://github.com/muhfadtz/Mobile-OnJasa',
    demo: '#',
    websiteUrl: '#',
    documentationUrl: '#',
    tags: ['Kotlin', 'OpenStreetMap', 'PaymentGateway', 'Firebase', 'Retrofit'],
    features: [
      'User authentication',
      'Product management',
      'Payment processing',
      'Order tracking',
    ],
    technologies: {
      frontend: ['Kotlin', 'Material-UI'],
      backend: ['Firebase', 'Retrofit', 'OpenStreetMap', 'PaymentGateway'],
      deployment: ['Anroid Studio', 'Firebase']
    }
  },
  {
    title: 'Web Application Laptop Recomendation-Quell',
    description: 'is an interactive platform that helps users find the right laptop for their needs through a recommendation system based on specific criteria. The application is designed to make it easier to find the ideal laptop, whether for work, gaming, study, or everyday use',
    longDescription: `An intelligent task management system that leverages AI to help users be more productive:
      • User authentication and authorization
      • Two User Perspectives
      • Automated categorization
      • ChatBot integration
      • Compare Laptops
      • Responsive design for all devices`,
    image: '26.png',
    github: 'https://github.com/muhfadtz/web-quell',
    demo: '#',
    websiteUrl: '#',
    documentationUrl: '#',
    tags: ['Python', 'Laravel', 'Machine Learning', 'NLP', 'Mysql', 'Bootstrap'],
    features: [
      'Authentication and authorization',
      'ChatBot integration',
      'Compare Laptops',
      'Automated categorization',
      'Manual Search'
    ],
    technologies: {
      frontend: ['Laravel Blade', 'Bootsrap', 'Material-UI'],
      backend: ['Python', 'Laravel', 'Mysql', 'Machine Learning'],
      deployment: ['-']
    }
  },
  {
    title: 'Web Application Social Media-Phrase',
    description: 'a social media platform designed specifically for sharing text with a focus on simplicity and efficiency. The app allows users to post, interact, and share ideas in written form, without the distraction of visual elements such as images or videos.',
    longDescription: `A minimalist social media platform focused on text-based interactions, designed for simplicity and efficiency. Users can post, engage, and share ideas through written content without the distraction of images or videos. The platform fosters meaningful discussions and seamless communication in a clutter-free environment`,
    image: '27.png',
    github: 'https://github.com/muhfadtz/phrase-sosmed',
    demo: '#',
    websiteUrl: '#',
    documentationUrl: '#',
    tags: ['PHP', 'Mysql', 'Bootstrap', 'Javascript'],
    features: [
      'User authentication and authorization',
      'Text-based posts',
      'Likes and comments',
      'Private and public posts',
      'Customizable user profiles',
      'Search and discovery features',
      'Minimalist and distraction-free design'
    ],
    technologies: {
      frontend: ['HTML5', 'CSS3', 'Boostrap', 'Material-UI'],
      backend: ['PHP', 'Mysql', 'Javascript'],
      deployment: ['Cloud Hosting']
    }
  },
  {
    title: 'Machine Learning-Summarizer',
    description: 'Summarizer is a model for summarizing long text into points that can be retrieved easily. This was created with machine learning.',
    longDescription: `Machine Learning model for summaruzing long text into key points. The model also performs sentiment analysis to determine the overall tone of the text.`,
    image: '28.png',
    github: 'https://github.com/muhfadtz/ML-Summarizer',
    demo: '#',
    websiteUrl: '#',
    documentationUrl: '#',
    tags: ['Machine Learning', 'Python', 'NLP',],
    features: [
      'Summarizing long text',
      'Sentiment analysis',
      'etc.',
    ],
    technologies: {
      frontend: ['HTML5', 'CSS3', 'Bootstrap', 'Material-UI'],
      backend: ['Flask', 'Python', 'Machine Learning'],
      deployment: ['-']
    }
  },
];

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={handleModalClick}>
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Overview</h4>
              <p className="text-gray-600 whitespace-pre-line">{project.longDescription}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">Technology Stack</h4>
              <div className="space-y-4">
                {Object.entries(project.technologies).map(([category, techs]) => (
                  <div key={category}>
                    <h5 className="text-lg font-medium capitalize mb-2">{category}:</h5>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <GitHub size={20} className="mr-2" /> View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <ExternalLink size={20} className="mr-2" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  const handleCardClick = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="https://muhfadtz.github.io/portfolio-v5/projects.html" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        </a>
        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={(e) => handleCardClick(e, project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <button
                    onClick={(e) => handleCardClick(e, project)}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group flex items-center"
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200 group flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link size={16} className="mr-1" />
                    <span className="border-b border-transparent group-hover:border-gray-800">Visit Site</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 mx-2 bg-gray-900 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 mx-2 bg-gray-900 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors duration-200"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;