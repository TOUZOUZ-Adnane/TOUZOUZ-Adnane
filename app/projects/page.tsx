import Link from 'next/link';
import { projects } from '../../lib/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const href = project.url || `/projects/${project.slug}`;
            const isExternal = !!project.url;

            return isExternal ? (
              <a
                key={project.slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all hover:border-cyan-500/50"
              >
                <div className="relative w-full h-48 overflow-hidden bg-white/5">
                  <img
                    src={`/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={project.slug}
                href={href}
                className="block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all hover:border-cyan-500/50"
              >
                <div className="relative w-full h-48 overflow-hidden bg-white/5">
                  <img
                    src={`/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
