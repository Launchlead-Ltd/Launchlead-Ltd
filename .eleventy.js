const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    // Input Directory : src Output directory: _site
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        dir: { input: 'src', output: '_site' }
    };
};