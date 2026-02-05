export default function Process() {
  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We start with a comprehensive consultation to understand your goals, challenges, and aspirations.",
    },
    {
      step: "2",
      title: "Customized Plan",
      description: "Based on your unique situation, we develop a personalized roadmap to achieve your objectives.",
    },
    {
      step: "3",
      title: "Ongoing Support",
      description: "We provide continuous guidance and support throughout your educational journey.",
    },
    {
      step: "4",
      title: "Achieve Success",
      description: "Together, we work towards and celebrate your academic and career achievements.",
    },
  ];

  return (
    <section id="process" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-playwrite-india), cursive' }}>
            Our Process
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            A structured approach designed to guide you every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-l-4"
              style={{ backgroundColor: 'var(--bg-primary)', borderLeftColor: 'var(--primary)' }}
            >
              <div className="text-3xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-tertiary)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
