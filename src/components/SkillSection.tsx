import { motion } from "framer-motion";

const skills = [
  {
    title: "Backend Development",
    icon: "bi bi-server",
    description:
      "I build scalable and efficient backend systems using modern technologies. Experienced in designing RESTful APIs, database management, and server-side logic.",
  },
  {
    title: "Quality Assurance",
    icon: "bi bi-shield-check",
    description:
      "I ensure software reliability through automated and manual testing. Skilled in writing test cases, identifying bugs, and improving product quality.",
  },
  {
    title: "Project Management",
    icon: "bi bi-clipboard-check",
    description:
      "I manage projects from planning to execution, ensuring timely delivery and collaboration. Experienced in Agile methodologies and team coordination.",
  },
];

export default function SkillsSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <i className={`${skill.icon} fs-1 me-3 text-primary`}></i>
                  <h3 className="fs-4 mb-0">{skill.title}</h3>
                </div>
                <p className="text-muted mb-3">{skill.description}</p>
                <div className="d-flex flex-wrap gap-2">
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}