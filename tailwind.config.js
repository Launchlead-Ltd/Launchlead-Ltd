/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_site/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,jpg,gif}",
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,jpg,gif}",
    "./src/img/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,jpg,gif}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,jpg,gif}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,jpg,gif}",
  ],

  theme: {
    extend: {
      colors: {
        'launchlead-blue': '#2e77ff',
        'launchlead-gradient-from': '#001464',
        'launchlead-gradient-to': '#1e38a3',
      },
    }
  },

  plugins: [
  ],
}
