// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: ["@nuxtjs/style-resources"],
  alias: {
    module: fileURLToPath(new URL("./scss", import.meta.url)),
  },
});
