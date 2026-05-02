import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../../../lib/projects';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectLandingPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Project Landing Page</p>
            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-gray-300 text-lg leading-8">{project.details}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
              >
                Back to Projects
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg">
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
