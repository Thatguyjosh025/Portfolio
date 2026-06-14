import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={project.imageUrl}
          className="card-img-top"
          alt={project.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
        </div>
        <div className="card-footer bg-white">
          <Link
            to={`/project/${project.id}`}
            className="btn btn-dark w-100"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}