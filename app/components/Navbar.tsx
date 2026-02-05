export default function Navbar() {
  return (
    <nav className="w-full border-b" style={{ borderColor: 'var(--border-light)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Educational Consulting</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>
                Home
              </a>
              <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>
                Services
              </a>
              <a href="#process" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>
                Process
              </a>
              <a href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover-text-primary" style={{ color: 'var(--text-secondary)' }}>
                Testimonials
              </a>
              <a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover-primary" style={{ backgroundColor: 'var(--primary)', color: 'var(--text-white)' }}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
