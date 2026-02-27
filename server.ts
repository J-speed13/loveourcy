import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try to load from .env first, then fallback to .env.example
dotenv.config();
const envExamplePath = path.join(__dirname, ".env.example");
dotenv.config({ path: envExamplePath });

// Manual fallback for environments where dotenv might struggle with .env.example
function getEnvVar(key: string): string | undefined {
  if (process.env[key]) return process.env[key];
  
  try {
    if (fs.existsSync(envExamplePath)) {
      const content = fs.readFileSync(envExamplePath, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const [k, ...v] = line.split('=');
        if (k.trim() === key) {
          let value = v.join('=').trim();
          // Remove quotes if present
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          return value;
        }
      }
    }
  } catch (e) {
    console.error("Error reading .env.example manually:", e);
  }
  return undefined;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Request logging
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    const user = getEnvVar("SMTP_USER");
    const pass = getEnvVar("SMTP_PASS");

    if (!user || !pass) {
      console.error("SMTP credentials missing. Checked process.env and .env.example");
      return res.status(500).json({ 
        error: "Server configuration error: SMTP credentials not found.",
        details: "Please ensure SMTP_USER and SMTP_PASS are set in your environment or .env.example file."
      });
    }

    // Use 'service: gmail' for better reliability with Gmail accounts
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });

    try {
      // Verify connection configuration
      await transporter.verify();
      
      await transporter.sendMail({
        from: `"${name}" <${user}>`,
        to: "iamjamesstanton@gmail.com",
        replyTo: email,
        subject: `New Contact from Love Our Island: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("Email error:", error);
      res.status(500).json({ 
        error: "Failed to send email", 
        details: error.message || "Unknown error occurred" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
    // Startup check for credentials
    const user = getEnvVar("SMTP_USER");
    const pass = getEnvVar("SMTP_PASS");
    if (user && pass) {
      console.log("✅ SMTP credentials loaded successfully.");
    } else {
      console.warn("⚠️ SMTP credentials NOT found. Contact form will not work.");
    }
  });
}

startServer();
