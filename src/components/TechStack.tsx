import { motion } from "framer-motion";

const techStack = [
  { name: "HTML5", image: "/icons/html-5.png" },
  { name: "CSS3", image: "/icons/css-3.png" },
  { name: "JavaScript", image: "/icons/js.png" },
  { name: "Bootstrap", image: "/icons/bootstrap.png" },
  { name: "PHP", image: "/icons/php.png" },
  { name: "Github", image: "/icons/github.png" },
  { name: "Laravel", image: "/icons/Laravel.png" },
];

export default function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>
        <div className="row justify-content-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="tech-icon mb-2"
                  style={{ width: "48px", height: "48px", objectFit: "contain" }}
                />
                <span className="fw-medium">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}