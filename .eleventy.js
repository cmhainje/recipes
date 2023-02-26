const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./public/": "/" });
	eleventyConfig.addPlugin(bundlerPlugin);
    eleventyConfig.addPairedShortcode("div", (content, className) => `<div class="${className}">${content}</div>`)
};