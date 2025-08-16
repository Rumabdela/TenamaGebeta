import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, Utensils } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-pattern">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Preserving Ethiopia's{" "}
          <span className="text-ethiopian-yellow">Nutritional Heritage</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover the health secrets of traditional Ethiopian foods and learn how our ancestors nourished both body and soul with ancient wisdom and modern science.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('recipes')}
            className="bg-ethiopian-green hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 btn-pulse h-auto"
            data-testid="button-explore-recipes"
          >
            <Utensils className="mr-2 h-5 w-5" />
            Explore Traditional Recipes
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('consultation')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ethiopian-green px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 h-auto"
            data-testid="button-book-consultation"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('recipes')} 
          className="text-white text-2xl hover:text-ethiopian-yellow transition-colors"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
