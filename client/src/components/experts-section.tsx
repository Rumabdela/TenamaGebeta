import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Video } from "lucide-react";
import { type Expert } from "@shared/schema";

export default function ExpertsSection() {
  const { data: experts, isLoading, error } = useQuery<Expert[]>({
    queryKey: ['/api/experts'],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleConsultExpert = () => {
    scrollToSection('consultation');
  };

  const handleViewCookingClasses = () => {
    // TODO: Implement cooking classes view
    console.log('Viewing cooking classes');
  };

  if (isLoading) {
    return (
      <section id="experts" className="py-20 bg-ethiopian-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
              Meet Our Nutrition Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading our expert team...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experts" className="py-20 bg-ethiopian-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
              Meet Our Nutrition Experts
            </h2>
            <p className="text-xl text-red-600 max-w-3xl mx-auto">
              Failed to load expert profiles. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experts" className="py-20 bg-ethiopian-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
            Meet Our Nutrition Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team combines deep knowledge of traditional Ethiopian culinary practices with modern nutritional science
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {experts?.map((expert, index) => (
            <Card 
              key={expert.id} 
              className={`card-hover overflow-hidden shadow-lg flex flex-col md:flex-row ${
                index === 1 ? 'md:flex-row-reverse' : ''
              } ${index === 2 ? 'lg:col-span-2' : ''}`}
              data-testid={`card-expert-${expert.id}`}
            >
              <div 
                className={`${index === 2 ? 'md:w-2/5' : 'md:w-2/5'} h-64 md:h-auto bg-cover bg-center`}
                style={{ backgroundImage: `url('${expert.imageUrl}')` }}
              />
              <CardContent className={`${index === 2 ? 'md:w-3/5' : 'md:w-3/5'} p-8`}>
                <h3 className="font-heading text-2xl font-bold text-ethiopian-green mb-2" data-testid={`text-expert-name-${expert.id}`}>
                  {expert.name}
                </h3>
                <p className="text-ethiopian-red font-semibold mb-4" data-testid={`text-expert-title-${expert.id}`}>
                  {expert.title}
                </p>
                <p className="text-gray-600 mb-6" data-testid={`text-expert-bio-${expert.id}`}>
                  {expert.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {expert.specialties.map((specialty, specIndex) => (
                    <Badge 
                      key={specIndex} 
                      className="bg-ethiopian-green/10 text-ethiopian-green hover:bg-ethiopian-green/20"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    onClick={handleConsultExpert}
                    className="bg-ethiopian-green text-white hover:bg-green-700 transition-colors font-semibold rounded-full"
                    data-testid={`button-consult-expert-${expert.id}`}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                  {expert.id === "3" && (
                    <Button 
                      onClick={handleViewCookingClasses}
                      variant="outline"
                      className="bg-ethiopian-yellow text-ethiopian-green border-ethiopian-yellow hover:bg-yellow-400 transition-colors font-semibold rounded-full"
                      data-testid="button-cooking-classes"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Cooking Classes
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
