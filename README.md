# Portfolio & Kedai Digital - Fitri Mahadzir

link-in-bio-fitri-mahadzir-v2A modern, responsive personal portfolio and digital product shop built with React, Vite, Tailwind CSS, and Framer Motion. This project features dynamic product fetching from Supabase, a seamless user experience, and a beautifully crafted UI.

## ✨ Features

- **Personal Portfolio:** Showcase skills, experience, and professional links.
- **Kedai Digital (Digital Shop):** Display and sell digital products with dynamic data loading directly from Supabase.
- **Servis (Services):** Dedicated page listing professional services offered.
- **Sebut Harga (Quotation):** A clear and structured page to present pricing and request quotes.
- **Dark Mode Support:** Built-in elegant dark and light themes using Tailwind CSS.
- **Share Modal:** Easily share the portfolio via direct URL copying, QR Code, or direct WhatsApp messaging.
- **Smooth Animations:** Fluid page transitions and micro-interactions powered by Framer Motion.
- **Responsive Layout:** Mobile-first approach ensuring perfect presentation on any device screen size.

## 🛠 Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://motion.dev/)
- **Database / Backend:** [Supabase](https://supabase.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory based on the `.env.example` file and add your Supabase project credentials:
   ```env
   VITE_SUPABASE_URL="your-supabase-project-url"
   VITE_SUPABASE_ANON_KEY="your-supabase-anon-key"
   APP_URL="http://localhost:3000"
   ```

4. **Database Setup (Supabase):**
   Ensure you have a `products` table created in your Supabase database with the following structure:
   - `id` (int8/uuid, primary key)
   - `title` (text)
   - `price` (text, e.g., "Free" or "RM 15.00")
   - `image` (text, URL to the product image)
   - `is_free` (boolean)

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
