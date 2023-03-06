/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "apple": ["-apple-system, BlinkMacSystemFont"],
        "plex-sans-thai": ["IBM Plex Sans Thai", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "inter": ['Inter', "sans-serif"]
      },
      boxShadow: {
        'apple': '0px 4px 17px rgba(0, 0, 0, 0.15)'
        
      },
      textColor: {
        'grayed': 'rgba(0,0,0,0.6)'
      }
    },
  },
  plugins: [],
};
