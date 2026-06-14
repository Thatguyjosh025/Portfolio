import { useParams } from "react-router-dom";

const projectDetails = {
  "1": {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform built with React and Node.js. Features include product listings, cart functionality, and user authentication.",
    images: [
      "/images/ecommerce-1.jpg",
      "/images/ecommerce-2.jpg",
      "/images/ecommerce-3.jpg",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
    githubLink: "https://github.com/joshcalinog/ecommerce",
    liveLink: "https://ecommerce-josh.vercel.app",
  },
  "2": {
    title: "Task Management App",
    description:
      "A productivity app for managing tasks with drag-and-drop functionality. Built with React and Firebase.",
    images: ["/images/task-app-1.jpg", "/images/task-app-2.jpg"],
    techStack: ["React", "Firebase", "TypeScript", "Bootstrap"],
    githubLink: "https://github.com/joshcalinog/task-app",
    liveLink: "https://task-app-josh.vercel.app",
  },
};

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <h2>Project not found.</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="mb-4">{project.title}</h1>
          <p className="lead mb-5">{project.description}</p>

          {/* Tech Stack Section */}
          <div className="mb-5">
            <h4 className="mb-3">Tech Stack</h4>
            <div className="d-flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="badge bg-secondary fs-6 p-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Images */}
          <div className="mb-5">
            <h4 className="mb-3">Project Screenshots</h4>
            <div className="row">
              {project.images.map((image, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="d-flex gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <i className="bi bi-github me-2"></i> GitHub
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="bi bi-box-arrow-up-right me-2"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}