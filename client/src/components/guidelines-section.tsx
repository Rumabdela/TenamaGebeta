import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Apple, Droplet, Ban, Carrot, Wine, Box } from "lucide-react";

export default function GuidelinesSection() {
  const handleDownloadGuidelines = () => {
    // TODO: Implement PDF download
    console.log('Downloading guidelines PDF');
  };

  const guidelines = [
    {
      icon: <Leaf className="text-ethiopian-green text-xl" />,
      title: "Diversify Your Diet",
      description: "Choose at least 4 food groups per meal and 6 food groups per day. Focus on variety: cereals (injera), legumes (shiro), vegetables, animal-source foods, fruits, fats/oils and water.",
      benefit: "Traditional Ethiopian meals naturally follow this principle"
    },
    {
      icon: <Leaf className="text-ethiopian-green text-xl" />,
      title: "Eat Legumes Daily",
      description: "80–120g daily of beans, lentils, chickpeas provide protein and lower risk of chronic diseases. Soak and prepare properly to remove anti-nutrients.",
      benefit: "Shiro, misir wot, and other legume dishes"
    },
    {
      icon: <Apple className="text-ethiopian-green text-xl" />,
      title: "Fruits & Vegetables",
      description: "100–200g daily including different colors (orange, dark green, red) for vitamins and antioxidants. Prefer fresh, seasonal produce.",
      benefit: "Include gomen, carrots, tomatoes, and seasonal fruits"
    },
    {
      icon: <Leaf className="text-ethiopian-green text-xl" />,
      title: "Nuts & Oilseeds",
      description: "10–20g daily of groundnuts, sesame, and other seeds supply healthy fats and micronutrients. Use as snacks or add to meals.",
      benefit: "Traditional roasted barley and nuts for snacking"
    },
    {
      icon: <Apple className="text-ethiopian-green text-xl" />,
      title: "Animal-Source Foods",
      description: "Modest portions of eggs, meat (≈60g), and dairy (300–400g) across the week to improve nutrient intake and protein quality.",
      benefit: "Traditional doro wot, kitfo, and dairy products"
    },
    {
      icon: <Droplet className="text-ethiopian-green text-xl" />,
      title: "Water & Activity",
      description: "8–10 large glasses of clean water daily and ≥30 minutes of physical activity. Essential for optimal health and metabolism.",
      benefit: "Traditional active lifestyle supports these goals"
    }
  ];

  const limitations = [
    {
      icon: <Ban className="text-3xl mb-3 text-ethiopian-yellow" />,
      title: "Limit Fats",
      amount: "15–20g per day"
    },
    {
      icon: <Box className="text-3xl mb-3 text-ethiopian-yellow" />,
      title: "Limit Sugar",
      amount: "< 30g per day"
    },
    {
      icon: <Carrot className="text-3xl mb-3 text-ethiopian-yellow" />,
      title: "Limit Salt",
      amount: "< 5g per day"
    },
    {
      icon: <Wine className="text-3xl mb-3 text-ethiopian-yellow" />,
      title: "Limit Alcohol",
      amount: "≤ 2 glasses/week"
    }
  ];

  return (
    <section id="guidelines" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
            Ethiopian Food-Based Dietary Guidelines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Evidence-based nutrition recommendations rooted in Ethiopian cultural heritage
          </p>
          <p className="text-sm text-gray-500 italic">Source: Ethiopia Food-Based Dietary Guidelines Booklet (March 2022)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidelines.map((guideline, index) => (
            <Card key={index} className="card-hover border-l-4 border-ethiopian-green bg-gradient-to-br from-ethiopian-cream to-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-ethiopian-green/10 p-3 rounded-full mr-4">
                    {guideline.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ethiopian-green">{guideline.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{guideline.description}</p>
                <div className="bg-ethiopian-yellow/20 p-3 rounded-lg">
                  <p className="text-sm font-medium text-ethiopian-green">✓ {guideline.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Guidelines Summary */}
        <div className="mt-12 bg-gradient-to-r from-ethiopian-green to-green-700 text-white rounded-xl p-8">
          <h3 className="font-heading text-2xl font-bold mb-6 text-center">Additional Health Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {limitations.map((limitation, index) => (
              <div key={index} className="text-center" data-testid={`limitation-${index}`}>
                {limitation.icon}
                <h4 className="font-semibold mb-2">{limitation.title}</h4>
                <p className="text-sm opacity-90">{limitation.amount}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleDownloadGuidelines}
            className="bg-ethiopian-yellow text-ethiopian-green hover:bg-yellow-400 px-8 py-4 rounded-full font-semibold text-lg transition-colors h-auto"
            data-testid="button-download-guidelines"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Guidelines (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
