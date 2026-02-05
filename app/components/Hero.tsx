export default function Hero() {
  return (
    <section 
      id="home" 
      className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for text readability */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: 'rgba(254, 252, 232, 0.7)',
          backdropFilter: 'blur(1px)'
        }}
      />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          Empowering Your Educational Journey
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Expert guidance to help you achieve your academic and career goals through personalized consulting services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg text-lg font-semibold transition-colors hover-primary"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--text-white)' }}
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-8 py-3 rounded-lg text-lg font-semibold border-2 transition-colors hover-primary-light"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--primary)', borderColor: 'var(--primary)' }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
