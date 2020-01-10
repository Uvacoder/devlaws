const Terser = require("terser");
const CleanCSS = require("clean-css");


module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter("jsmin", function(code) {
		let minified = Terser.minify(code);
		if( minified.error ) {
			console.log("Terser error: ", minified.error);
			return code;
		}

		return minified.code;
	});

	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// eleventyConfig.addFilter("filterSlugs", function(data) {
	// 	return data.map(d => {d.slug});
	// });
}