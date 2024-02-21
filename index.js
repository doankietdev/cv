const unCss = require('uncss');

const files = ['index.html']

const options = {
    stylesheets: ['css/main.css']
}

unCss(files, options, (error, output) => {
    console.log(output);
})