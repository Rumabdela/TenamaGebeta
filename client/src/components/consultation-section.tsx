import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { User, ClipboardList, Heart, Smartphone, Shield, Check } from "lucide-react";

export default function ConsultationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      healthGoals: "",
      preferredTime: "",
      additionalInfo: ""
    }
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      const response = await apiRequest('POST', '/api/consultations', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/consultations'] });
      toast({
        title: "Consultation Booked!",
        description: "Your consultation request has been submitted successfully. We'll contact you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      console.error('Consultation submission error:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error submitting your consultation request. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: InsertConsultation) => {
    setIsSubmitting(true);
    consultationMutation.mutate(data);
  };

  const benefits = [
    {
      icon: <User className="text-ethiopian-yellow text-xl" />,
      title: "Expert Nutritionist Guidance",
      description: "Work directly with our certified nutritionists who specialize in Ethiopian traditional foods and modern health science."
    },
    {
      icon: <ClipboardList className="text-ethiopian-yellow text-xl" />,
      title: "Personalized Meal Plans",
      description: "Receive customized meal plans featuring traditional Ethiopian recipes adapted to your health goals and dietary needs."
    },
    {
      icon: <Heart className="text-ethiopian-yellow text-xl" />,
      title: "Health Condition Management",
      description: "Specialized support for diabetes, hypertension, weight management, and other conditions using traditional foods."
    },
    {
      icon: <Smartphone className="text-ethiopian-yellow text-xl" />,
      title: "Telegram Consultations",
      description: "Convenient consultations via Telegram with follow-up support and recipe sharing throughout your journey."
    }
  ];

  const packages = [
    {
      name: "Single Session",
      price: "2,500 ETB",
      features: [
        "60-minute consultation",
        "Basic meal plan",
        "Recipe recommendations"
      ],
      popular: false
    },
    {
      name: "Monthly Package", 
      price: "6,500 ETB",
      features: [
        "3 consultation sessions",
        "Detailed meal planning",
        "Progress tracking",
        "Telegram support"
      ],
      popular: true
    },
    {
      name: "Transformation Program",
      price: "16,000 ETB", 
      features: [
        "3-month program",
        "Weekly check-ins",
        "Custom recipe development",
        "Health monitoring"
      ],
      popular: false
    }
  ];

  return (
    <section id="consultation" className="py-20 bg-gradient-to-br from-ethiopian-green to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Personalized Nutrition Consultations
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get expert guidance tailored to your health goals using traditional Ethiopian nutrition wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Consultation Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start" data-testid={`benefit-${index}`}>
                <div className="bg-ethiopian-yellow/20 p-3 rounded-full mr-4 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="opacity-90">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <Card className="text-gray-800">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-ethiopian-green mb-6 text-center">
                Book Your Consultation
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-consultation">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">First Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="focus:ring-2 focus:ring-ethiopian-green" 
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="focus:ring-2 focus:ring-ethiopian-green" 
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            {...field} 
                            className="focus:ring-2 focus:ring-ethiopian-green" 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            {...field} 
                            className="focus:ring-2 focus:ring-ethiopian-green" 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="healthGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Health Goals</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-2 focus:ring-ethiopian-green" data-testid="select-health-goals">
                              <SelectValue placeholder="Select your primary goal" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="weight-management">Weight Management</SelectItem>
                            <SelectItem value="diabetes-control">Diabetes Control</SelectItem>
                            <SelectItem value="heart-health">Heart Health</SelectItem>
                            <SelectItem value="digestive-health">Digestive Health</SelectItem>
                            <SelectItem value="general-wellness">General Wellness</SelectItem>
                            <SelectItem value="traditional-diet">Traditional Diet Education</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Preferred Consultation Time</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-2 focus:ring-ethiopian-green" data-testid="select-preferred-time">
                              <SelectValue placeholder="Select preferred time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            placeholder="Please share any specific health conditions, dietary restrictions, or questions..."
                            className="focus:ring-2 focus:ring-ethiopian-green resize-none" 
                            data-testid="textarea-additional-info"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-ethiopian-green text-white hover:bg-green-700 py-4 px-6 rounded-lg font-semibold text-lg transition-colors h-auto"
                    data-testid="button-submit-consultation"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Book My Consultation
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    <Shield className="inline mr-1 h-4 w-4" />
                    Your information is secure and will only be used for consultation purposes
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Info */}
        <div className="mt-16 bg-black/20 rounded-xl p-8">
          <h3 className="font-heading text-2xl font-bold text-center mb-8">Consultation Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`text-center ${pkg.popular ? 'bg-ethiopian-yellow/20 rounded-lg p-6' : ''}`}
                data-testid={`package-${index}`}
              >
                {pkg.popular && (
                  <div className="bg-ethiopian-yellow text-ethiopian-green text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                    POPULAR
                  </div>
                )}
                <h4 className="text-xl font-semibold mb-2">{pkg.name}</h4>
                <p className="text-3xl font-bold text-ethiopian-yellow mb-4">{pkg.price}</p>
                <ul className="space-y-2 text-sm opacity-90">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
