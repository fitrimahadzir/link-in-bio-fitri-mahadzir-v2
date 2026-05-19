import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve the v1 static files specifically at /v1
  // In dev, this is in the public folder. In prod, it is copied to dist.
  const v1Path = process.env.NODE_ENV === "production" 
    ? path.join(process.cwd(), 'dist/v1')
    : path.join(process.cwd(), 'public/v1');
    
  app.use('/v1', express.static(v1Path));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Legacy v1 version accessible at http://localhost:${PORT}/v1`);
  });
}

startServer();
