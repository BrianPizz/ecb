export default function CallToAction() {
  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Ready to Start Your Educational Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Let's work together to achieve your academic and career goals. Get in touch today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg text-lg font-semibold transition-colors hover-primary"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--text-white)' }}
          >
            Schedule a Consultation
          </a>
          <a
            href="tel:+1234567890"
            className="px-8 py-3 rounded-lg text-lg font-semibold border-2 transition-colors hover-primary-light"
            style={{ backgroundColor: 'transparent', color: 'var(--primary)', borderColor: 'var(--primary)' }}
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
