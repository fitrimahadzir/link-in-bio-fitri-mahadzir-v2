import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

// Resolve paths correctly for both ESM (ts-node/tsx) and CJS (bundled)
const isProd = process.env.NODE_ENV === "production";
const root = process.cwd();

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log(`Starting server in ${isProd ? "production" : "development"} mode...`);

  // Handle /v1 specifically
  const v1Path = isProd 
    ? path.join(root, 'dist/v1')
    : path.join(root, 'public/v1');
    
  console.log(`Serving /v1 from: ${v1Path}`);
  app.use('/v1', express.static(v1Path));

  // Vite middleware for development
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    
    // Dev SPA fallback
    app.get('*', async (req, res, next) => {
      // Don't handle internal vite requests
      if (req.originalUrl.startsWith('/@vite') || req.originalUrl.includes('.')) {
        return next();
      }
      try {
        const fs = await import("fs");
        let template = fs.readFileSync(path.resolve(root, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production: Serve from dist folder
    const distPath = path.join(root, 'dist');
    
    // Disable caching for index.html to ensure latest version is always served
    app.use((req, res, next) => {
      if (req.url === '/' || req.url === '/index.html' || !req.url.includes('.')) {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      }
      next();
    });

    app.use(express.static(distPath, {
      maxAge: '1y', // Cache static assets heavily
      index: false  // We handle index.html manually below
    }));
    
    // SPA fallback: send index.html for any unknown routes
    app.get('*', (req, res) => {
      // If it looks like a file request but wasn't found by express.static, just 404
      if (req.path.includes('.') && !req.path.endsWith('.html')) {
        return res.status(404).end();
      }
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
