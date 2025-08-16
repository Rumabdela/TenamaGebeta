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
import { insertContactSchema, insertNewsletterSchema, type InsertContact, type InsertNewsletter } from "@shared/schema";
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Twitter, Youtube, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactForm = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contacts', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully. We'll get back to you soon.",
      });
      contactForm.reset();
      setIsSubmittingContact(false);
    },
    onError: (error: any) => {
      console.error('Contact submission error:', error);
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
      setIsSubmittingContact(false);
    }
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest('POST', '/api/newsletters', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/newsletters'] });
      toast({
        title: "Subscribed!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setNewsletterEmail("");
      setIsSubmittingNewsletter(false);
    },
    onError: (error: any) => {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to our newsletter. Please try again.",
        variant: "destructive"
      });
      setIsSubmittingNewsletter(false);
    }
  });

  const onSubmitContact = (data: InsertContact) => {
    setIsSubmittingContact(true);
    contactMutation.mutate(data);
  };

  const onSubmitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubmittingNewsletter(true);
      newsletterMutation.mutate({ email: newsletterEmail.trim() });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-ethiopian-green" />,
      label: "Address",
      value: "Bole Road, Addis Ababa, Ethiopia"
    },
    {
      icon: <Phone className="text-ethiopian-green" />,
      label: "Phone", 
      value: "+251 9XX XXX XXX"
    },
    {
      icon: <Mail className="text-ethiopian-green" />,
      label: "Email",
      value: "hello@tenamagebeta.et"
    },
    {
      icon: <MessageSquare className="text-ethiopian-green" />,
      label: "Telegram Support",
      value: "https://t.me/TenamaGebeta"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageSquare, href: "https://t.me/TenamaGebeta", label: "Telegram" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Ethiopian nutrition or need support? We're here to help you on your health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-ethiopian-green mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center" data-testid={`contact-info-${index}`}>
                    <div className="bg-ethiopian-green/10 p-3 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{info.label}</p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="bg-ethiopian-green hover:bg-green-700 text-white p-3 rounded-full transition-colors"
                    aria-label={social.label}
                    data-testid={`social-link-${index}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-ethiopian-cream">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">Subscribe to Our Newsletter</h4>
                <p className="text-gray-600 mb-4">Get the latest recipes, health tips, and cultural insights delivered to your inbox.</p>
                <form onSubmit={onSubmitNewsletter} className="flex gap-3" data-testid="form-newsletter">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 focus:ring-2 focus:ring-ethiopian-green" 
                    data-testid="input-newsletter-email"
                    required
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmittingNewsletter}
                    className="bg-ethiopian-green text-white hover:bg-green-700 transition-colors font-semibold px-6"
                    data-testid="button-subscribe-newsletter"
                  >
                    {isSubmittingNewsletter ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-ethiopian-cream">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-ethiopian-green mb-6">Send Us a Message</h3>
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-6" data-testid="form-contact">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={contactForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">First Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="focus:ring-2 focus:ring-ethiopian-green" 
                              data-testid="input-contact-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="focus:ring-2 focus:ring-ethiopian-green" 
                              data-testid="input-contact-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            {...field} 
                            className="focus:ring-2 focus:ring-ethiopian-green" 
                            data-testid="input-contact-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={contactForm.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Subject</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-2 focus:ring-ethiopian-green" data-testid="select-contact-subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="consultation">Consultation Question</SelectItem>
                            <SelectItem value="recipes">Recipe Request</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={contactForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={6}
                            placeholder="Tell us how we can help you..."
                            className="focus:ring-2 focus:ring-ethiopian-green resize-none" 
                            data-testid="textarea-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmittingContact}
                    className="w-full bg-ethiopian-green text-white hover:bg-green-700 py-4 px-6 rounded-lg font-semibold text-lg transition-colors h-auto"
                    data-testid="button-submit-contact"
                  >
                    {isSubmittingContact ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
