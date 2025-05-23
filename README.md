# ClimateWise

Welcome to the climatewise-app project repository! This project was created through the innovative thinking of Emmanuel Agbanyo - digital content coordinator and his core staff team at Youth Path Organization.

A web application providing information on climate change, adaptation strategies, and an interactive chatbot.

## Table of Contents

- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running the Development Server](#running-the-development-server)
- [Available Scripts](#available-scripts)
- [Admin Section](#admin-section)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Key Features

- **Comprehensive Information Hub:** Access detailed information on various aspects of climate change, including scientific data, impacts, and mitigation strategies.
- **Adaptation Strategies:** Explore practical strategies and solutions for adapting to the effects of climate change.
- **Interactive ClimateWise Chatbot:** Engage with an AI-powered chatbot for answers to your climate-related questions and guidance.
- **Blog Platform:** Stay updated with the latest news, articles, and insights on climate action through an integrated blog.
- **User-Friendly Interface:** Navigate easily through a clean, modern, and responsive user interface.
- **Admin Panel:** A secure area for administrators to:
    - Manage blog posts (create, edit, delete).
    - Configure and manage the ClimateWise Chatbot.
    - Oversee user activity and site data (general dashboard).

## Technology Stack

- **Frontend:** Vite, React, TypeScript
- **UI Components:** Shadcn/UI
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management & Data Fetching:** TanStack Query
- **Backend Services & Database:** Supabase
- **Linting:** ESLint

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (comes with Node.js) or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```
    *(Replace `https://github.com/your-username/your-repository-name.git` with the actual URL of this repository if you know it, otherwise leave as a placeholder).*

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Or `yarn install` if you prefer yarn)*

### Environment Configuration

The application connects to Supabase for backend services. The public API URL and anonymous key are currently included in the source code for ease of local setup (`src/integrations/supabase/client.ts`).

For a production environment or if you intend to connect to your own Supabase instance, you would typically use environment variables. You might create a `.env` file in the root of the project with your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

And update the `src/integrations/supabase/client.ts` to use these variables (e.g., `import.meta.env.VITE_SUPABASE_URL`). However, for simply running the project locally with the provided backend, this step is not immediately required.

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

This will start the Vite development server, and you should see output in your terminal indicating the local address where the application is running (usually `http://localhost:5173` or similar). Open this URL in your web browser to view the application.

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm run dev`
    -   Starts the development server using Vite.
-   `npm run build`
    -   Builds the application for production.
-   `npm run build:dev`
    -   Builds the application in development mode (useful for debugging build issues).
-   `npm run lint`
    -   Lints the codebase using ESLint to check for code quality and style issues.
-   `npm run preview`
    -   Previews the production build locally. This command should be run after you've built the project with `npm run build`.

## Admin Section

ClimateWise includes a protected admin area for site administrators.

-   **Purpose:** To manage content such as blog posts, configure aspects of the ClimateWise Chatbot, and view site analytics or user data via a dashboard.
-   **Access:** Typically, the admin section is accessible via a specific route like `/admin/login`. Authorized administrators can log in to access the dashboard and management tools.

Key admin functionalities include:
-   Dashboard (`/admin/dashboard`)
-   Posts Management (`/admin/posts`)
-   Chatbot Management (`/admin/chatbot`)

## Project Structure

A brief overview of the key directories in this project:

-   `public/`: Contains static assets like `favicon.ico`, `robots.txt`, and placeholder images. These files are directly served by the web server.
-   `src/`: The main folder containing all the application's source code.
    -   `src/components/`: Contains reusable UI components.
        -   `src/components/ui/`: Specifically for Shadcn/UI components.
    -   `src/context/`: For React Context API providers (e.g., `AuthContext.tsx`).
    -   `src/data/`: Likely for static data used by the application (e.g., `blogData.ts`).
    -   `src/hooks/`: Custom React hooks.
    -   `src/integrations/`: Code for integrating with third-party services, like Supabase (`src/integrations/supabase/`).
    -   `src/lib/`: Utility functions and libraries (e.g., `utils.ts`).
    -   `src/pages/`: Components that represent full pages or views, mapped to routes.
        -   `src/pages/Admin/`: Components specific to the admin section.
    -   `src/types/`: TypeScript type definitions.
-   `supabase/`: Contains configuration related to the Supabase backend, if managed within the project.

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to contribute code, please feel free to:

1.  Fork the repository (`climatewise-app`).
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Submit a pull request with a clear description of your changes.

Please ensure your code adheres to the existing style and that any new features are well-documented.

Alternatively, you can open an issue to discuss a bug or a new feature.
