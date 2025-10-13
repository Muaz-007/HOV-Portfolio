function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Marketing Director",
      rating: 5,
      review: "Working with this developer was an absolute pleasure! They delivered a stunning WordPress website that exceeded our expectations. Their attention to detail and communication throughout the project was exceptional.",
      avatar: "👩‍💼",
      project: "Corporate Website Redesign"
    },
    {
      id: 2,
      name: "Mike Chen",
      company: "Dynasty Mattress",
      role: "CEO",
      rating: 5,
      review: "The logo design and website they created perfectly captured our brand identity. Professional, creative, and delivered ahead of schedule. Highly recommended for anyone looking for quality web development and design work.",
      avatar: "👨‍💼",
      project: "Brand Identity & Website"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "SowFin",
      role: "Product Manager",
      rating: 5,
      review: "Outstanding React development skills! They built a complex financial dashboard that's both beautiful and highly functional. Their problem-solving abilities and technical expertise are top-notch.",
      avatar: "👩‍🎨",
      project: "Financial Dashboard App"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Safety Culture",
      role: "Operations Manager",
      rating: 5,
      review: "From graphic design to full-stack development, this developer delivered exceptional work. They understood our vision perfectly and brought it to life with modern, responsive designs that work flawlessly across all devices.",
      avatar: "👨‍🔧",
      project: "Safety Management Platform"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "Utility & Joy",
      role: "Founder",
      rating: 5,
      review: "The e-commerce site they built on Shopify has transformed our business. Beautiful design, smooth functionality, and great SEO implementation. Our sales have increased by 40% since launch!",
      avatar: "👩‍💻",
      project: "E-commerce Store"
    },
    {
      id: 6,
      name: "Alex Kumar",
      company: "Expert Thermal",
      role: "CTO",
      rating: 5,
      review: "Professional, skilled, and reliable. They handled our complex thermal design website with expertise and delivered a solution that perfectly showcases our technical products while being user-friendly.",
      avatar: "👨‍🔬",
      project: "Technical Product Website"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div id="reviews" className="py-16 px-4">
      <div className="text-center mb-12">
        <p className="font-semibold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">
          Client Testimonials
        </p>
        <h2 className="text-4xl font-extrabold text-white mt-2">
          What My Clients Say
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Don't just take my word for it - hear from the businesses and individuals I've worked with.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 transition-all duration-500 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] group"
          >
            {/* Rating */}
            <StarRating rating={review.rating} />
            
            {/* Review Text */}
            <p className="text-gray-300 mt-4 leading-relaxed italic">
              "{review.review}"
            </p>
            
            {/* Client Info */}
            <div className="flex items-center mt-6 pt-4 border-t border-gray-600">
              <div className="text-2xl mr-4">{review.avatar}</div>
              <div className="flex-1">
                <h4 className="text-white font-semibold">{review.name}</h4>
                <p className="text-green-400 text-sm">{review.role}</p>
                <p className="text-gray-400 text-sm">{review.company}</p>
                <p className="text-gray-500 text-xs mt-1">{review.project}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-400">50+</div>
            <div className="text-gray-400 text-sm mt-2">Projects Completed</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-400">40+</div>
            <div className="text-gray-400 text-sm mt-2">Happy Clients</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-gray-400 text-sm mt-2">Client Satisfaction</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-400">2+</div>
            <div className="text-gray-400 text-sm mt-2">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;