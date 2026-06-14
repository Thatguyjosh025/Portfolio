export default function Footer() {
  return (
    <footer className="bg-light py-4">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Josh Calinog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}