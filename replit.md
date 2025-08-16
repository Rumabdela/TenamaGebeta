# Overview

Tenamagebeta is a web application dedicated to preserving and promoting Ethiopian heritage nutrition. The platform serves as a comprehensive resource for traditional Ethiopian recipes, nutrition expertise, and cultural food education. It combines ancient culinary wisdom with modern nutritional science to help users understand the health benefits of traditional Ethiopian foods.

The application features traditional recipe collections, expert nutrition consultations, dietary guidelines based on Ethiopian food culture, and educational content about the nutritional value of indigenous ingredients and cooking methods.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom Ethiopian-themed color variables and shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency

## Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Development Server**: Custom Vite integration for seamless development experience
- **Data Storage**: In-memory storage implementation with interface-based design for easy database migration
- **API Design**: RESTful endpoints for recipes, experts, consultations, contacts, and newsletter subscriptions

## Data Storage Solutions
- **Current**: In-memory storage with TypeScript interfaces for rapid prototyping
- **Future Ready**: Drizzle ORM configured for PostgreSQL with Neon database provider
- **Schema**: Comprehensive database schema defined with proper relationships and validation
- **Migration Ready**: Drizzle Kit configured for database migrations and schema management

## Authentication and Authorization
- **Current**: No authentication system implemented
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage when authentication is added
- **Security**: CORS and basic security headers configured for production readiness

## External Service Integrations
- **Database**: Neon serverless PostgreSQL (configured but not active)
- **Image Storage**: External image URLs for recipe and expert photos
- **Email**: Prepared for newsletter and contact form integrations
- **Development Tools**: Replit-specific plugins for enhanced development experience

The architecture follows a modular design pattern with clear separation between frontend and backend concerns, making it easy to scale and maintain. The application is designed to handle Ethiopian cultural content with appropriate internationalization considerations and responsive design for various devices.

# External Dependencies

## Database and ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL hosting for production deployment
- **Connect-pg-Simple**: PostgreSQL session store for Express sessions

## Frontend UI and State
- **Radix UI**: Comprehensive collection of accessible UI primitives
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition
- **Tailwind CSS**: Utility-first CSS framework with custom design system

## Development and Build Tools
- **Vite**: Fast development server and build tool with React plugin
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment enhancements for Replit platform

## Content and Assets
- **Unsplash**: External image hosting for recipe and expert photography
- **Google Fonts**: Playfair Display and Poppins fonts for typography
- **Lucide React**: Icon library for consistent iconography throughout the application

The application is designed to be deployment-ready with minimal configuration changes, supporting both development and production environments with appropriate tooling for each stage.