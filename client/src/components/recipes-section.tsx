import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { type Recipe } from "@shared/schema";

export default function RecipesSection() {
  const { data: recipes, isLoading, error } = useQuery<Recipe[]>({
    queryKey: ['/api/recipes'],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewRecipe = (recipeId: string) => {
    // TODO: Implement recipe detail view
    console.log('Viewing recipe:', recipeId);
  };

  if (isLoading) {
    return (
      <section id="recipes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
              Traditional Ethiopian Recipes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loading delicious traditional recipes...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="recipes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
              Traditional Ethiopian Recipes
            </h2>
            <p className="text-xl text-red-600 max-w-3xl mx-auto">
              Failed to load recipes. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
            Traditional Ethiopian Recipes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Authentic recipes passed down through generations, now backed by modern nutritional science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes?.map((recipe) => (
            <Card key={recipe.id} className="card-hover overflow-hidden shadow-lg" data-testid={`card-recipe-${recipe.id}`}>
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${recipe.imageUrl}')` }}
              />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-2xl font-semibold text-ethiopian-green">
                    {recipe.name}
                  </CardTitle>
                  <Badge className="bg-ethiopian-yellow/20 text-ethiopian-green hover:bg-ethiopian-yellow/30">
                    {recipe.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button 
                    onClick={() => handleViewRecipe(recipe.id)}
                    className="bg-ethiopian-green text-white hover:bg-green-700 transition-colors font-medium rounded-full"
                    data-testid={`button-view-recipe-${recipe.id}`}
                  >
                    View Recipe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    <span data-testid={`text-prep-time-${recipe.id}`}>{recipe.prepTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => scrollToSection('consultation')}
            className="bg-ethiopian-yellow text-ethiopian-green hover:bg-yellow-400 px-8 py-4 rounded-full font-semibold text-lg transition-colors h-auto"
            data-testid="button-personalized-plans"
          >
            Get Personalized Recipe Plans
          </Button>
        </div>
      </div>
    </section>
  );
}
