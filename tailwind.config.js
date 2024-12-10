
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "retro",
      "dark",
      "dracula",
      "night",
      "winter",
      "dim",
      "nord",
    ],
    darkTheme: "night", // thème par défaut quand le mode sombre est activé
    base: true, // applique les styles de base
    styled: true, // applique les styles des composants
    utils: true, // applique les utilitaires
  },
}
