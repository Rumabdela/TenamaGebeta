import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import Logo from "@/lib/logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Logo />
            <div>
              <h1 className="font-heading text-2xl font-bold text-ethiopian-green">Tenamagebeta</h1>
              <p className="text-sm text-gray-600 font-medium">Ethiopian Heritage Nutrition</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-ethiopian-green font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-ethiopian-green"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('recipes')} 
              className="text-gray-700 hover:text-ethiopian-green font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-ethiopian-green"
              data-testid="nav-recipes"
            >
              Recipes
            </button>
            <button 
              onClick={() => scrollToSection('experts')} 
              className="text-gray-700 hover:text-ethiopian-green font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-ethiopian-green"
              data-testid="nav-experts"
            >
              Nutritionists
            </button>
            <button 
              onClick={() => scrollToSection('guidelines')} 
              className="text-gray-700 hover:text-ethiopian-green font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-ethiopian-green"
              data-testid="nav-guidelines"
            >
              Guidelines
            </button>
            <button 
              onClick={() => scrollToSection('consultation')} 
              className="text-gray-700 hover:text-ethiopian-green font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-ethiopian-green"
              data-testid="nav-consultation"
            >
              Consultation
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-ethiopian-green font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-ethiopian-green"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-ethiopian-cream rounded-full px-4 py-2">
            <Input 
              type="text" 
              placeholder="Search recipes, experts..." 
              className="bg-transparent border-none outline-none text-sm w-48 focus:ring-0 focus:border-none" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              data-testid="input-search"
            />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleSearch}
              className="text-ethiopian-green hover:text-ethiopian-green/80 transition-colors p-1"
              data-testid="button-search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-ethiopian-green text-2xl"
            data-testid="button-mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block text-gray-700 hover:text-ethiopian-green font-medium py-2 w-full text-left"
              data-testid="nav-mobile-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('recipes')} 
              className="block text-gray-700 hover:text-ethiopian-green font-medium py-2 w-full text-left"
              data-testid="nav-mobile-recipes"
            >
              Recipes
            </button>
            <button 
              onClick={() => scrollToSection('experts')} 
              className="block text-gray-700 hover:text-ethiopian-green font-medium py-2 w-full text-left"
              data-testid="nav-mobile-experts"
            >
              Nutritionists
            </button>
            <button 
              onClick={() => scrollToSection('guidelines')} 
              className="block text-gray-700 hover:text-ethiopian-green font-medium py-2 w-full text-left"
              data-testid="nav-mobile-guidelines"
            >
              Guidelines
            </button>
            <button 
              onClick={() => scrollToSection('consultation')} 
              className="block text-gray-700 hover:text-ethiopian-green font-medium py-2 w-full text-left"
              data-testid="nav-mobile-consultation"
            >
              Consultation
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block text-gray-700 hover:text-ethiopian-green font-medium py-2 w-full text-left"
              data-testid="nav-mobile-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
