import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/task/',  // تأكد من أن المسار هنا يشير إلى اسم المستودع الصحيح
});
