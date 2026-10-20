import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-contact-handler',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/api/contact')) {
            const { default: handler } = await import('./api/contact.js');
            let body = '';
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', async () => {
              req.body = body;
              const customRes = {
                status(code) { res.statusCode = code; return this; },
                setHeader(k, v) { res.setHeader(k, v); return this; },
                json(data) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                },
                end() { res.end(); },
              };
              try {
                await handler(req, customRes);
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }
          next();
        });
      },
    },
  ],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          lucide: ['lucide-react'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
