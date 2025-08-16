import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Shield, TrendingUp, Users, Award } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Leaf className="text-ethiopian-yellow text-2xl" />,
      title: "Ancient Wisdom Meets Modern Science",
      description: "Ethiopian traditional foods like teff and berbere have been scientifically proven to provide superior nutrition and health benefits.",
      feature: "5000+ years of food heritage"
    },
    {
      icon: <Heart className="text-ethiopian-yellow text-2xl" />,
      title: "Naturally Heart-Healthy",
      description: "Traditional Ethiopian cuisine is naturally low in saturated fats, high in fiber, and rich in heart-protective spices and ingredients.",
      feature: "Cardiovascular protection"
    },
    {
      icon: <Shield className="text-ethiopian-yellow text-2xl" />,
      title: "Built-in Disease Prevention",
      description: "Fermented foods like injera provide probiotics, while spices like berbere offer powerful antioxidants and anti-inflammatory compounds.",
      feature: "Natural immunity boost"
    },
    {
      icon: <TrendingUp className="text-ethiopian-yellow text-2xl" />,
      title: "Sustainable Weight Management",
      description: "High-fiber grains, legumes, and vegetables create lasting satiety and stable blood sugar levels for natural weight control.",
      feature: "Long-term wellness"
    },
    {
      icon: <Users className="text-ethiopian-yellow text-2xl" />,
      title: "Community & Cultural Connection",
      description: "Food is medicine and community. Ethiopian dining traditions promote mindful eating and strong social bonds.",
      feature: "Holistic health approach"
    },
    {
      icon: <Award className="text-ethiopian-yellow text-2xl" />,
      title: "Globally Recognized Superfoods",
      description: "Teff is now recognized worldwide as a superfood, and injera is studied for its unique probiotic properties.",
      feature: "International acclaim"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ethiopian-green to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Why Choose Ethiopian Traditional Nutrition?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the unique advantages that make Ethiopian cuisine one of the world's healthiest and most sustainable food traditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 card-hover" data-testid={`benefit-card-${index}`}>
              <CardContent className="p-8 text-center">
                <div className="bg-ethiopian-yellow/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="opacity-90 mb-4 leading-relaxed">{benefit.description}</p>
                <Badge className="bg-ethiopian-yellow/20 text-ethiopian-yellow border-ethiopian-yellow/30 hover:bg-ethiopian-yellow/30">
                  {benefit.feature}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-black/20 rounded-xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">Ready to Transform Your Health?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands who have discovered the power of Ethiopian traditional nutrition for better health, sustainable weight management, and cultural connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold text-ethiopian-yellow">2000+</p>
              <p className="text-sm opacity-90">Success Stories</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold text-ethiopian-yellow">95%</p>
              <p className="text-sm opacity-90">Satisfaction Rate</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-2xl font-bold text-ethiopian-yellow">15+</p>
              <p className="text-sm opacity-90">Expert Nutritionists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}