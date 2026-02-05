export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Educational Consulting</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Empowering students and professionals to achieve their educational and career goals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>Academic Planning</a></li>
              <li><a href="#services" className="transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>College Admissions</a></li>
              <li><a href="#services" className="transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>Career Counseling</a></li>
              <li><a href="#services" className="transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>Test Preparation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#process" className="transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>Our Process</a></li>
              <li><a href="#testimonials" className="transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>Testimonials</a></li>
              <li><a href="#contact" className="transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@educationalconsulting.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Education St, City, State 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: 'var(--border-light)' }}>
          <p>&copy; {new Date().getFullYear()} Educational Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
