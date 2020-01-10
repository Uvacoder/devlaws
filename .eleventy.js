const Terser = require("terser");


module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter("jsmin", function(code) {
		let minified = Terser.minify(code);
		if( minified.error ) {
			console.log("Terser error: ", minified.error);
			return code;
		}

		return minified.code;
	});

	// eleventyConfig.addFilter("filterSlugs", function(data) {
	// 	return data.map(d => {d.slug});
	// });
}