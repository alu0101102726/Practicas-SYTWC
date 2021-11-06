// tailwind.config.js
module.exports = {
  plugins: [],
  gradientColorStops: theme => ({
    ...theme('colors'),
    'primary': '#3490dc',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
   })
}