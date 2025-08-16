import { type Recipe, type Expert, type Consultation, type Contact, type Newsletter, type InsertRecipe, type InsertExpert, type InsertConsultation, type InsertContact, type InsertNewsletter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Recipes
  getRecipes(): Promise<Recipe[]>;
  getRecipe(id: string): Promise<Recipe | undefined>;
  createRecipe(recipe: InsertRecipe): Promise<Recipe>;

  // Experts
  getExperts(): Promise<Expert[]>;
  getExpert(id: string): Promise<Expert | undefined>;
  createExpert(expert: InsertExpert): Promise<Expert>;

  // Consultations
  getConsultations(): Promise<Consultation[]>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;

  // Newsletter
  getNewsletters(): Promise<Newsletter[]>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private recipes: Map<string, Recipe>;
  private experts: Map<string, Expert>;
  private consultations: Map<string, Consultation>;
  private contacts: Map<string, Contact>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.recipes = new Map();
    this.experts = new Map();
    this.consultations = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample recipes
    const sampleRecipes: Recipe[] = [
      {
        id: "1",
        name: "Injera",
        description: "Traditional fermented flatbread made from teff flour — rich in iron, calcium, and probiotics for digestive health.",
        imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        prepTime: "3 days",
        category: "Gluten-Free",
        tags: ["High Fiber", "Probiotic", "Iron Rich"],
        nutritionalBenefits: "Rich in iron, calcium, probiotics, and complex carbohydrates. Supports digestive health and provides sustained energy.",
        ingredients: [
          { item: "Teff flour", amount: "4 cups" },
          { item: "Water", amount: "5 cups" },
          { item: "Salt", amount: "1 tsp" }
        ],
        instructions: [
          "Mix teff flour with water in a large bowl",
          "Cover and let ferment for 3 days at room temperature",
          "Add salt and mix well",
          "Cook on a clay pan (mitad) or non-stick skillet"
        ],
        createdAt: new Date()
      },
      {
        id: "2", 
        name: "Doro Wot",
        description: "Spicy chicken stew with berbere spice blend — packed with antioxidants, protein, and traditional healing spices.",
        imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        prepTime: "2 hours",
        category: "Spicy",
        tags: ["High Protein", "Antioxidants", "Traditional"],
        nutritionalBenefits: "High in protein, antioxidants from berbere spices, and essential amino acids. Supports immune system and heart health.",
        ingredients: [
          { item: "Chicken", amount: "1 whole chicken, cut into pieces" },
          { item: "Berbere spice", amount: "3 tbsp" },
          { item: "Red onions", amount: "4 large, chopped" },
          { item: "Hard-boiled eggs", amount: "6" },
          { item: "Garlic", amount: "6 cloves" },
          { item: "Ginger", amount: "2 inch piece" }
        ],
        instructions: [
          "Sauté onions until golden brown",
          "Add berbere spice and cook for 5 minutes",
          "Add chicken pieces and brown on all sides",
          "Add water and simmer for 1.5 hours",
          "Add hard-boiled eggs in the last 15 minutes"
        ],
        createdAt: new Date()
      },
      {
        id: "3",
        name: "Shiro",
        description: "Chickpea stew packed with plant protein and fiber — perfect for vegetarian diets and digestive health.",
        imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        prepTime: "45 mins",
        category: "Plant-Based",
        tags: ["Plant Protein", "High Fiber", "Affordable"],
        nutritionalBenefits: "Excellent source of plant protein, fiber, and folate. Supports digestive health and provides sustained energy.",
        ingredients: [
          { item: "Ground chickpeas (shiro powder)", amount: "2 cups" },
          { item: "Water or vegetable broth", amount: "4 cups" },
          { item: "Red onions", amount: "2 medium, minced" },
          { item: "Garlic", amount: "4 cloves, minced" },
          { item: "Berbere spice", amount: "2 tbsp" },
          { item: "Oil", amount: "3 tbsp" }
        ],
        instructions: [
          "Sauté onions and garlic until fragrant",
          "Add berbere spice and cook for 2 minutes",
          "Gradually add shiro powder while stirring",
          "Slowly add water while whisking to prevent lumps",
          "Simmer for 20-30 minutes, stirring frequently"
        ],
        createdAt: new Date()
      }
    ];

    // Sample experts
    const sampleExperts: Expert[] = [
      {
        id: "1",
        name: "Dr. Alem Gebre",
        title: "PhD in Nutritional Science",
        bio: "Leading researcher in indigenous Ethiopian crops and their health benefits. With over 15 years of experience, his work focuses on teff, sorghum, and traditional fermentation methods.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        specialties: ["Teff Nutrition", "Fermented Foods", "Plant-Based Diets"],
        yearsExperience: 15,
        createdAt: new Date()
      },
      {
        id: "2",
        name: "Nutritionist Selam Fesseha",
        title: "Clinical Nutrition Specialist",
        bio: "Expert in using Ethiopian cuisine for therapeutic nutrition. Creates personalized meal plans using traditional foods to manage diabetes, hypertension, and obesity.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        specialties: ["Diabetes Management", "Heart Health", "Weight Management"],
        yearsExperience: 12,
        createdAt: new Date()
      },
      {
        id: "3",
        name: "Chef Yordanos Hailu",
        title: "Culinary Nutrition Expert",
        bio: "Celebrated chef committed to making healthy Ethiopian cooking accessible. Develops and tests recipes, ensuring they are authentic, delicious, and nutritionally sound for contemporary lifestyles.",
        imageUrl: "https://pixabay.com/get/g751b31064bf062c932ba632c59b6b4696781789aea57298fbc3c95cf5ee99751d9181812598820f12ea0b06084874923273dc1d989a6e2b75c522b9b600ac6cb_1280.jpg",
        specialties: ["Traditional Cooking", "Recipe Development", "Healthy Modifications", "Food Education"],
        yearsExperience: 18,
        createdAt: new Date()
      }
    ];

    sampleRecipes.forEach(recipe => this.recipes.set(recipe.id, recipe));
    sampleExperts.forEach(expert => this.experts.set(expert.id, expert));
  }

  // Recipe methods
  async getRecipes(): Promise<Recipe[]> {
    return Array.from(this.recipes.values());
  }

  async getRecipe(id: string): Promise<Recipe | undefined> {
    return this.recipes.get(id);
  }

  async createRecipe(insertRecipe: InsertRecipe): Promise<Recipe> {
    const id = randomUUID();
    const recipe: Recipe = { ...insertRecipe, id, createdAt: new Date() };
    this.recipes.set(id, recipe);
    return recipe;
  }

  // Expert methods
  async getExperts(): Promise<Expert[]> {
    return Array.from(this.experts.values());
  }

  async getExpert(id: string): Promise<Expert | undefined> {
    return this.experts.get(id);
  }

  async createExpert(insertExpert: InsertExpert): Promise<Expert> {
    const id = randomUUID();
    const expert: Expert = { ...insertExpert, id, createdAt: new Date() };
    this.experts.set(id, expert);
    return expert;
  }

  // Consultation methods
  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = { 
      ...insertConsultation, 
      id, 
      status: 'pending', 
      createdAt: new Date() 
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      status: 'unread', 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Newsletter methods
  async getNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      isActive: 'true', 
      createdAt: new Date() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
