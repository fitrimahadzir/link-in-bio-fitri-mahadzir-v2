import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

// Resolve paths correctly for both ESM (tsx) and CJS (bundled)
const isProd = process.env.NODE_ENV === "production";
const root = process.cwd();

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log(`[Server] Starting in ${isProd ? "production" : "development"} mode...`);

  // Middleware to log all requests - helpful for debugging 404s
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // Handle /v1 specifically
  const v1Path = isProd 
    ? path.join(root, 'dist/v1')
    : path.join(root, 'public/v1');
    
  app.use('/v1', express.static(v1Path));

  // Vite middleware for development
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    
    // Dev SPA fallback handled by Vite middlewares in 'spa' appType
  } else {
    // Production: Serve from dist folder
    const distPath = path.join(root, 'dist');
    
    // SPA fallback: Return index.html for all non-file routes
    // We do this BEFORE express.static if we want to customize headers for the HTML file
    app.get(['/', '/shop', '/services', '/sebutharga'], (req, res) => {
      console.log(`[Server] Serving index.html for route: ${req.path}`);
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.sendFile(path.join(distPath, 'index.html'));
    });

    // Static files
    app.use(express.static(distPath, {
      maxAge: '30d',
      immutable: true,
      index: false // We handle specific routes above
    }));
    
    // General fallback for any other possible routes
    app.get('*', (req, res) => {
      // If it's a request for a file that wasn't found, 404
      if (req.path.includes('.')) {
        return res.status(404).send('Not Found');
      }
      res.setHeader('Cache-Control', 'no-store');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('[Server] Critical failure:', err);
  process.exit(1);
});
