import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: "1",
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform built with React and Node.js.",
    imageUrl: "/images/ecommerce-thumbnail.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag-and-drop functionality.",
    imageUrl: "/images/task-app-thumbnail.jpg",
    techStack: ["React", "Firebase", "TypeScript"],
  },
];

// tech 
const myTechStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "MySQL",
  "Bootstrap",
  "Laravel",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section (Home + About) */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Josh Calinog</h1>
          <p className="lead mb-4">Full-Stack Developer</p>
          <p className="col-md-8 mx-auto">
            I specialize in building modern web applications with React, Node.js, and MongoDB.
            Passionate about creating clean, efficient, and user-friendly experiences.
          </p>
        </div>
      </section>

        {/* Projects Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">My Projects</h2>
          <div className="row">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Tech Stack</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {myTechStack.map((tech, index) => (
                  <span
                    key={index}
                    className="badge bg-dark fs-5 p-3 text-white"
                    style={{ fontSize: "1rem" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}