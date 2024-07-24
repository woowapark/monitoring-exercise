import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// TODO: Sentry 플러그인을 추가하세요.
// TODO: sourcemap을 생성할 수 있도록 설정하세요.
export default defineConfig({
  plugins: [react()],
  base: "/monitoring-exercise/",
});
