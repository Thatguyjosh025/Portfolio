import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
      className="col-md-6 col-lg-4 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="card project-card h-100">
        <img
          src={project.imageUrl}
          className="card-img-top"
          alt={project.title}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{project.title}</h5>
          <p className="card-text text-muted">{project.description}</p>
        </div>
        <div className="card-footer bg-white border-top-0">
          <Link
            to={`/project/${project.id}`}
            className="btn btn-custom btn-dark w-100"
          >
            View Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
}