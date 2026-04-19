# VeloGenie Tech Solutions

![VeloGenie Banner](src/assets/hero-image.png)

> **Architects of the Digital Future.**  
> Speed. Logic. Aesthetics.

VeloGenie is a high-performance web engineering agency dedicated to building lightning-fast, scalable, and visually stunning digital experiences. We believe that web performance is not just a metric—it's a feature.

## 🚀 Key Features

-   **High-Performance Architecture:** Built with **React 19** and **Vite** for sub-second load times and superior SEO.
-   **Modern Aesthetics:** Premium dark-themed UI featuring glassmorphism elements and custom color palettes.
-   **Smooth Interactions:** Advanced micro-animations and page transitions powered by **Framer Motion**.
-   **Comprehensive Service Suite:**
    -   **Technical Audits:** Built-in tools for analyzing web performance and security.
    -   **Service Tiers:** Clearly defined offerings from "LaunchPad" to "Enterprise Forge."
    -   **Interactive Quote System:** Dynamic request forms integrated with a backend database.
-   **Responsive Design:** Optimized for all devices, from ultra-wide monitors to mobile screens.
-   **Enterprise Ready:** Pre-configured for deployment on Vercel and Netlify.

## 🛠 Tech Stack

-   **Frontend:** [React 19](https://react.dev/)
-   **Build System:** [Vite](https://vitejs.dev/)
-   **Backend (BaaS):** [Supabase](https://supabase.com/) (Database & Auth ready)
-   **Styling:** Vanilla CSS with **CSS Modules** for scoped architecture.
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
-   **Routing:** [React Router 7](https://reactrouter.com/)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone git@github.com:jayesh-2210/VeloGenie.git
cd VeloGenie
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173`.

## 📂 Project Structure

```text
VeloGenie/
├── src/
│   ├── assets/          # Static media (images, banners)
│   ├── components/      # Atomic UI components (Buttons, Header, Preloader)
│   ├── context/         # React Context providers (Transition management)
│   ├── lib/             # Third-party configurations (Supabase client)
│   ├── sections/        # Page-level sections (Hero, About, Services, etc.)
│   ├── styles/          # Global styles and theme variables
│   ├── App.jsx          # Main routing and layout wrapper
│   └── main.jsx         # Application entry point
├── public/              # Public static assets
├── vite.config.js       # Vite configuration
├── netlify.toml         # Netlify deployment configuration
└── vercel.json          # Vercel deployment configuration
```

## 🌐 Deployment

This project is optimized for modern hosting platforms:

-   **Vercel:** Just connect your GitHub repository and it will auto-detect the Vite settings.
-   **Netlify:** Includes a `netlify.toml` for seamless SPA routing and build configuration.

## 👥 Founders

-   **Varun Ahankari** - Co-Founder & Technical Architect
-   **Jayesh Gupta** - Co-Founder & Creative Director

## 📍 Location

**VeloGenie HQ**  
2104, Sunscape, Sobha Hillview Apartment, Thalagattapura, Bengaluru, Karnataka, India - 560062

---

## 📄 License

This project is proprietary software. All rights reserved by **VeloGenie Tech Solutions**.

