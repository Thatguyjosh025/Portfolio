// src/pages/Home.tsx
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillSection";
import TechStack from "../components/TechStack";

const projects = [
  {
    id: "1",
    title: "Violation Monitoring System",
    description: "A system designed to track, record, and manage violations with automated reporting and analytics.",
    imageUrl: "/images/Central.jpg",
  },
  // {
  //   id: "2",
  //   title: "Inventory Management System",
  //   description: "A platform for monitoring stock levels, managing product entries, and generating inventory reports.",
  //   imageUrl: "/images/task-app-thumbnail.jpg",
  // },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Josh Calinog</h1>
            <p className="lead fw-bold">Backend Developer, QA Manual Tester & Project Manager</p>
            <p className="col-md-8 mx-auto">
              I specialize in building backend systems, ensuring software quality through testing, and managing projects from start to finish.
            </p>
            <motion.a
              href="#skills"
              className="btn btn-custom btn-primary btn-lg mt-3"
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Skills
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <div className="row">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}