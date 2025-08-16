import Logo from "@/lib/logo";
import { Facebook, Instagram, Twitter, Youtube, MessageSquare } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { name: "Home", section: "home" },
    { name: "Traditional Recipes", section: "recipes" },
    { name: "Nutrition Experts", section: "experts" },
    { name: "Dietary Guidelines", section: "guidelines" },
    { name: "Book Consultation", section: "consultation" },
    { name: "Contact Us", section: "contact" }
  ];

  const services = [
    "Nutrition Consultations",
    "Meal Planning",
    "Recipe Development", 
    "Health Coaching",
    "Cultural Food Education",
    "Community Workshops"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageSquare, href: "https://t.me/TenamaGebeta", label: "Telegram" }
  ];

  const roadmapItems = [
    {
      period: "0-6 Months",
      description: "Launch V1 website with recipes, expert tips, and consultation booking via Telegram"
    },
    {
      period: "6-12 Months", 
      description: "Deploy meal-plan feature, pilot healthy catering service, launch school nutrition workshops"
    },
    {
      period: "12-18 Months",
      description: "Scale paid services, extend to diaspora, launch ed-tech app with courses"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Logo className="h-10 w-10" />
              <div>
                <h3 className="font-heading text-2xl font-bold text-ethiopian-yellow">Tenamagebeta</h3>
                <p className="text-gray-400">Ethiopian Heritage Nutrition</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Preserving and promoting Ethiopia's nutritional heritage through traditional recipes, modern science, and expert guidance. Join us in discovering the health secrets of our ancestors.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="bg-gray-800 hover:bg-ethiopian-green text-white p-3 rounded-full transition-colors"
                  aria-label={social.label}
                  data-testid={`footer-social-${index}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-ethiopian-yellow mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                    data-testid={`footer-link-${link.section}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg text-ethiopian-yellow mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="font-heading text-xl font-bold text-ethiopian-yellow mb-4 text-center">Our Roadmap</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {roadmapItems.map((item, index) => (
              <div key={index} className="text-center" data-testid={`roadmap-item-${index}`}>
                <div className="bg-ethiopian-green/20 p-4 rounded-lg">
                  <h5 className="font-semibold text-ethiopian-yellow mb-2">{item.period}</h5>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Tenamagebeta. All rights reserved. Part of the "My Food is Ethiopian" campaign.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
