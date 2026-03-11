# Automation Tester Training Hub

A comprehensive 7-day training plan for automation testers covering BDD, Cucumber, Gherkin, Java, Maven, and Serenity.

## Features

- **7-Day Roadmap**: Structured learning path from Java basics to advanced Serenity BDD.
- **Progress Tracking**: Interactive task lists that save your progress locally.
- **Curated Resources**: Direct links to documentation, videos, and articles.
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion.

## Local Deployment

Follow these steps to run the application on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18.0 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone or Download** the project files to your local machine.
2. Open your terminal/command prompt in the project root directory.
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
2. (Optional) If you plan to extend the app with Gemini AI features, add your API key to the `.env` file:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   ```

### Running the App

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The static files will be generated in the `dist/` directory, which can be hosted on any static web hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite
