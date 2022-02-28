module.exports = {
  // prefix:'hljs-',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#0A192F",
        'highlight':"#5DEDCB",
        'secondry':"#172A46",
        'sub':'#8892B0',
        'lwhite':'#D0D0D2'
      }
    },
  },
  plugins: [],
}
