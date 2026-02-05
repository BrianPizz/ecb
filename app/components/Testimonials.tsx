export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "College Student",
      content: "The guidance I received was invaluable. I got accepted into my dream school thanks to their expert advice and support throughout the application process.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Graduate Student",
      content: "Their personalized approach helped me navigate the complex graduate school application process. I couldn't have done it without them.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      content: "As a parent, I was overwhelmed by the college application process. The consultants made everything clear and helped my daughter succeed.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-playwrite-india), cursive' }}>
            Testimonials          
            </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            Don't just take our word for it - hear from those who've achieved success with our help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: 'var(--accent)' }}>★</span>
                ))}
              </div>
              <p className="mb-4 italic" style={{ color: 'var(--text-secondary)' }}>
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4" style={{ borderColor: 'var(--border-light)' }}>
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
