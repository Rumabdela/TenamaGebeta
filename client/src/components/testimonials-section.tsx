import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Meron Tadesse",
      location: "Addis Ababa, Ethiopia",
      condition: "Type 2 Diabetes Management",
      quote: "Following traditional Ethiopian nutrition with Tenamagebeta's guidance helped me manage my diabetes naturally. My blood sugar is now stable, and I feel connected to my heritage through food.",
      rating: 5,
      result: "HbA1c reduced from 8.2% to 6.1% in 6 months"
    },
    {
      name: "Dr. Samuel Bekele",
      location: "Toronto, Canada (Ethiopian Diaspora)",
      condition: "Weight Management & Cultural Connection",
      quote: "As a doctor in the diaspora, I wanted my family to maintain our food traditions while staying healthy. Tenamagebeta showed us how injera and traditional stews can be part of a modern healthy lifestyle.",
      rating: 5,
      result: "Lost 15kg while maintaining cultural food practices"
    },
    {
      name: "Hanna Girma",
      location: "Bahir Dar, Ethiopia",
      condition: "Heart Health & Hypertension",
      quote: "The berbere spices and traditional recipes helped lower my blood pressure naturally. I learned that our ancestors' food wisdom is scientifically proven medicine.",
      rating: 5,
      result: "Blood pressure normalized without medication increase"
    },
    {
      name: "Jerusalem Restaurant",
      location: "Washington DC, USA",
      condition: "Restaurant Menu Optimization",
      quote: "Tenamagebeta helped us create healthier versions of traditional dishes that our customers love. Our 'healthy Ethiopian' menu is now our most popular offering.",
      rating: 5,
      result: "30% increase in customer satisfaction and repeat visits"
    }
  ];

  const achievements = [
    {
      number: "2,500+",
      label: "Lives Transformed",
      description: "People who improved their health through traditional Ethiopian nutrition"
    },
    {
      number: "89%",
      label: "Success Rate",
      description: "Clients who achieved their health goals within 6 months"
    },
    {
      number: "50+",
      label: "Restaurants Partnered",
      description: "Ethiopian restaurants now serving healthier traditional meals"
    },
    {
      number: "15+",
      label: "Research Studies",
      description: "Published studies validating traditional Ethiopian nutrition benefits"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-ethiopian-yellow fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how traditional Ethiopian nutrition has transformed lives across Ethiopia and the diaspora
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center" data-testid={`achievement-${index}`}>
              <div className="bg-ethiopian-cream rounded-lg p-6">
                <p className="text-3xl font-bold text-ethiopian-green mb-2">{achievement.number}</p>
                <p className="font-semibold text-gray-800 mb-1">{achievement.label}</p>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover shadow-lg" data-testid={`testimonial-${index}`}>
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <Quote className="text-ethiopian-green mr-3 mt-1 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-ethiopian-green">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-sm text-gray-500 mt-1">{testimonial.condition}</p>
                    </div>
                  </div>
                  <div className="mt-3 bg-ethiopian-yellow/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-ethiopian-green">✓ Result: {testimonial.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-ethiopian-green to-green-700 rounded-xl p-8 text-white text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Join Our Success Stories</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Whether you're managing a health condition, connecting with your heritage, or simply wanting to eat better, traditional Ethiopian nutrition can transform your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('consultation');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-ethiopian-yellow text-ethiopian-green hover:bg-yellow-400 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              data-testid="button-start-journey"
            >
              Start Your Health Journey
            </button>
            <button 
              onClick={() => {
                window.open('https://t.me/TenamaGebeta', '_blank');
              }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ethiopian-green px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              data-testid="button-join-community"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}