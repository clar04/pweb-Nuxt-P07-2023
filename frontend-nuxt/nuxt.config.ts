// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ['bootstrap-vue/nuxt'],
  css: [
    "~/assets/index.scss","~/assets/home.scss"
],
})

