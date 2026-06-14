import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const projectDetails = {
  "1": {
    title: "Violation Monitoring System",
    description:
      "A web-based system for recording, tracking, and managing violations. Features include user authentication, violation categorization, reporting dashboards, role-based access for administrators and staff, and an email notifier that automatically alerts users or admins about recorded violations and updates.",
    images: [
      "/images/discipline.jpg",
      "/images/Records.jpg",
      "/images/Analytics.jpg",
      "/images/Reports.jpg",
    ],
    techStack: ["HTML", "CSS", "JS", "Bootstrap", "jQuery", "Laravel", "MySQL"],
    qaNotes: "Tested for CRUD operations and endpoint validation. Manual QA for role-based workflows and email notifications.",
  },
  "2": {
    title: "Inventory Management System",
    description:
      "A system designed to manage product stocks, monitor inventory levels, and generate reports.",
    images: ["/images/task-app-1.jpg", "/images/task-app-2.jpg"],
    techStack: ["HTML", "CSS", "JS", "Bootstrap", "PHP", "MySQL"],
    qaNotes: "Functional testing for CRUD operations and inventory reports.",
  },
};

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails[id as keyof typeof projectDetails];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <h2>Project not found.</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="container py-5"
      style={{ marginTop: "100px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="lead mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.description}
          </motion.p>

          {/* QA Notes (if available) */}
          {project.qaNotes && (
            <motion.div
              className="alert alert-info mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h5><i className="bi bi-check-circle me-2"></i>QA Highlights</h5>
              <p className="mb-0">{project.qaNotes}</p>
            </motion.div>
          )}

          {/* Tech Stack */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="mb-3">Tech Stack</h4>
            <div className="d-flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="badge bg-secondary fs-6 p-2">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Images */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h4 className="mb-3">Project Screenshots</h4>
            <div className="row">
              {project.images.map((image, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <motion.img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="img-fluid rounded shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="d-flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom btn-outline-dark"
            >
              <i className="bi bi-github me-2"></i> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}