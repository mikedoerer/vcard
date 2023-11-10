// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from "@multivisio/layout/scripts/config.js";
import path from "node:path";

config(path.resolve(__dirname, "./layout"));

export default defineNuxtConfig({
  devtools: { 
    enabled: true
  },
  buildModules: ["@nuxtjs/style-resources"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/layout/config.scss";`,
        },
      },
    },
  },
});