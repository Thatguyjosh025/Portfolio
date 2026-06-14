export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Josh Calinog.
        </p>
        <div className="mt-2">
          <a href="https://github.com/joshcalinog" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a href="https://linkedin.com/in/joshcalinog" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}