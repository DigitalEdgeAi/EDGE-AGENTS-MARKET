# Edge Agent Market - Netlify Deployment

This project is a modern, responsive web application for an AI Agent Marketplace, built with React, TypeScript, and Tailwind CSS. It's designed to be easily deployable on Netlify.

## Project Overview

The Edge Agent Market allows users to browse, view details of, and (in future full implementations) purchase or build AI-powered agents. This version provides a comprehensive frontend structure with stubbed backend functionalities, ready for integration with services like Netlify Functions and a BaaS (Backend as a Service).

## Features Implemented

*   **Modern UI/UX:** Clean, responsive design built with Tailwind CSS.
*   **Branding:** Custom logo, color scheme (Primary: #0EA5E9, Accent: #0369A1), and fonts (Inter, Nunito).
*   **Core Pages:**
    *   **Homepage:** Engaging landing page with calls to action, featured agents, and pricing overview.
    *   **Marketplace Page:** Displays a filterable and searchable list of AI agents using `AgentCard` components.
    *   **Agent Detail Page:** Shows comprehensive information about a specific agent, including description, creator, pricing, tags, and a demo interaction area (stubbed).
    *   **Pricing Page:** Displays different subscription tiers using a `PricingTable` component.
    *   **About Page:** Information about the platform.
    *   **FAQ Page:** Frequently asked questions with an accordion interface.
    *   **Contact Page:** A functional contact form ready for Netlify Forms integration.
*   **User Dashboard (Stubbed):**
    *   Layout with sidebar navigation.
    *   Sections for Overview, My Purchased Agents, My Created Agents, Earnings, and Settings (all populated with mock data).
*   **Agent Builder (Stubbed):**
    *   A form for users to define and submit new agents for review (submission is stubbed, can be integrated with Netlify Forms or a backend).
*   **Monetization Stubs:**
    *   UI elements for purchasing agents and subscribing to plans.
    *   Console logs and alerts indicate where Stripe integration would occur.
    *   Conceptual display of commission logic in the dashboard.
*   **Responsive Design:** Built with Tailwind CSS to ensure compatibility across various devices (desktop, tablet, mobile).

## Technology Stack

*   **Frontend:** React, TypeScript
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM
*   **Deployment:** Designed for Netlify

## Project Structure

```
/edge-agent-market
├── /public                 # Static assets (logo.svg, index.html)
├── /src
│   ├── /assets             # Images, icons (if any beyond public)
│   ├── /components         # Reusable React components
│   │   ├── /agent          # Agent-specific components (AgentCard.tsx, AgentForm.tsx)
│   │   ├── /common         # Common UI elements (Navbar.tsx, Footer.tsx)
│   │   └── /ui             # General UI components (PricingTable.tsx, SearchBar.tsx)
│   ├── /contexts           # React contexts (AuthContext.tsx, ThemeContext.tsx - stubs)
│   ├── /hooks              # Custom React hooks (useAuth.tsx - stub)
│   ├── /pages              # Page-level components (HomePage.tsx, MarketplacePage.tsx, etc.)
│   ├── /services           # API service stubs (agentService.ts, authService.ts)
│   ├── App.tsx             # Main application component with routing
│   ├── index.css           # Global styles, Tailwind imports
│   ├── main.tsx            # React entry point
│   └── router.tsx          # (If router config is separated, currently in App.tsx)
├── .gitignore
├── index.html              # Main HTML file (from /public, linked by Vite)
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration (used by create_react_app template)
└── README.md               # This file
```

## Setup and Local Development

1.  **Prerequisites:**
    *   Node.js and pnpm (or npm/yarn) installed.

2.  **Clone the repository (or extract the ZIP):**
    ```bash
    # If from Git
    # git clone <repository_url>
    # cd edge-agent-market
    ```

3.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```

4.  **Start the development server:**
    ```bash
    pnpm run dev
    # or npm run dev
    # or yarn dev
    ```
    This will typically start the application on `http://localhost:5173` (Vite default) or `http://localhost:3000`.

## Deployment to Netlify

This project is optimized for Netlify deployment.

1.  **Build the project:**
    ```bash
    pnpm run build
    # or npm run build
    # or yarn build
    ```
    This command will create a `dist` (or `build`) folder in your project root with the static assets ready for deployment.

2.  **Deploy via Netlify:**

    *   **Option 1: Netlify CLI**
        1.  Install Netlify CLI: `npm install netlify-cli -g`
        2.  Login: `netlify login`
        3.  Deploy: `netlify deploy --prod`
            *   When prompted for the **Publish directory**, enter `dist` (or `build`, check your `vite.config.ts` or `package.json` build script output folder).
            *   Follow CLI prompts for site creation or linking.

    *   **Option 2: Drag and Drop via Netlify UI**
        1.  Go to your Netlify dashboard.
        2.  Drag the `dist` (or `build`) folder from your project into the Netlify UI's deployment area.

    *   **Option 3: Connect to a Git Repository (Recommended for CI/CD)**
        1.  Push your project code to a Git provider (GitHub, GitLab, Bitbucket).
        2.  In Netlify, click "New site from Git".
        3.  Choose your Git provider and select your repository.
        4.  Configure build settings:
            *   **Build command:** `pnpm run build` (or `npm run build` / `yarn build`)
            *   **Publish directory:** `dist` (or `build`)
        5.  Deploy site.

3.  **Netlify Forms Integration (for Contact and Agent Builder pages):**
    *   The ContactPage.tsx and BuilderPage.tsx are set up with hidden forms (`<form name="contact" netlify ...>` and `<form name="agent-builder" netlify ...>`).
    *   Netlify should automatically detect these forms upon deployment.
    *   Submissions will appear in your Netlify site dashboard under "Forms".
    *   Ensure the `form-name` attribute in your JavaScript submission logic (if any, for SPAs) matches the `name` attribute of your hidden HTML form.

## Improvements Over Original Concept

*   **Structured React Application:** Implemented using a modern React setup with TypeScript, components, pages, and routing for better maintainability and scalability.
*   **Enhanced UI/UX:** Developed a more polished and visually appealing user interface using Tailwind CSS, adhering to the provided branding guidelines but with a more refined look and feel than basic wireframes.
*   **Responsive Design:** Ensured the application is responsive across various screen sizes.
*   **Component-Based Architecture:** Created reusable components for UI elements like Navbar, Footer, AgentCard, PricingTable, etc.
*   **Clearer Monetization Stubs:** Implemented UI elements for pricing tiers and buy/subscribe buttons with clear console logs indicating where Stripe integration would occur, making future development easier.
*   **Functional Contact Form:** Integrated with Netlify Forms for out-of-the-box submission handling.
*   **Stubbed Dashboard & Builder:** Provided functional UI for the User Dashboard and Agent Builder pages with mock data and stubbed submission logic, laying a strong foundation for backend integration.
*   **Detailed Mock Data:** Used more descriptive mock data for agents to better simulate a live marketplace.
*   **Netlify Optimization:** Designed with Netlify deployment in mind, including setup for Netlify Forms.

## Future Enhancements (Backend Integration)

This frontend application is ready for backend integration. Consider the following for a full-fledged application:

*   **User Authentication:** Integrate with Netlify Identity, Firebase Auth, Auth0, or a custom solution.
*   **Database:** Use a BaaS like FaunaDB, Supabase, Firebase Firestore, or a traditional database with Netlify Functions to store user data, agent information, and submissions.
*   **Stripe Integration (Full):** Implement server-side Stripe processing via Netlify Functions for secure payment handling, subscriptions, and commission payouts.
*   **Agent Management:** Develop backend logic for agent submission, review, and management.
*   **Dynamic Data:** Replace all mock data with API calls to your backend.

--- 

This README provides a comprehensive guide to get your Edge Agent Market application up and running locally and deployed on Netlify. Enjoy building and expanding upon it!
