import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the tool that runs our app during development
// and bundles it into fast, small files when we're ready to publish it.
export default defineConfig({
  plugins: [react()],
});
