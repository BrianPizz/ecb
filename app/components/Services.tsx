export default function Services() {
  const services = [
    {
      title: "Academic Planning",
      description: "Comprehensive academic planning to help you navigate your educational path and achieve your goals.",
      icon: "📚",
    },
    {
      title: "College Admissions",
      description: "Expert guidance through the college application process, from selection to acceptance.",
      icon: "🎓",
    },
    {
      title: "Career Counseling",
      description: "Personalized career counseling to align your education with your professional aspirations.",
      icon: "💼",
    },
    {
      title: "Test Preparation",
      description: "Strategic test preparation support to maximize your performance on standardized exams.",
      icon: "✍️",
    },
  ];

  const whoWeHelp = [
    "High School Students",
    "College Applicants",
    "Graduate School Candidates",
    "Career Changers",
    "International Students",
  ];

  return (
    <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-playwrite-india), cursive' }}>
            Our Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            Comprehensive educational consulting services tailored to your unique needs and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg hover:shadow-lg transition-shadow"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--text-tertiary)' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-playwrite-india), cursive' }}>
            Who We Help
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {whoWeHelp.map((group, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {group}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
