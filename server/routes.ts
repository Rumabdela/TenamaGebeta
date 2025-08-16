import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema, insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Recipe routes
  app.get("/api/recipes", async (req, res) => {
    try {
      const recipes = await storage.getRecipes();
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recipes" });
    }
  });

  app.get("/api/recipes/:id", async (req, res) => {
    try {
      const recipe = await storage.getRecipe(req.params.id);
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }
      res.json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recipe" });
    }
  });

  // Expert routes
  app.get("/api/experts", async (req, res) => {
    try {
      const experts = await storage.getExperts();
      res.json(experts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch experts" });
    }
  });

  app.get("/api/experts/:id", async (req, res) => {
    try {
      const expert = await storage.getExpert(req.params.id);
      if (!expert) {
        return res.status(404).json({ message: "Expert not found" });
      }
      res.json(expert);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch expert" });
    }
  });

  // Consultation routes
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.status(201).json({ message: "Consultation request submitted successfully", consultation });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid data provided", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to submit consultation request" });
    }
  });

  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consultations" });
    }
  });

  // Contact routes
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ message: "Message sent successfully", contact });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid data provided", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Newsletter routes
  app.post("/api/newsletters", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(validatedData);
      res.status(201).json({ message: "Successfully subscribed to newsletter", newsletter });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ message: "Invalid email address", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  app.get("/api/newsletters", async (req, res) => {
    try {
      const newsletters = await storage.getNewsletters();
      res.json(newsletters);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch newsletter subscriptions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
