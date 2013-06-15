module.exports = function(grunt) {
	grunt.initConfig({
		requirejs: {
			build: {
				options: {
					baseUrl: "js",
					mainConfigFile: "js/grunticon-ui.js",
					out: "js/grunticon-ui.min.js",
					name: "grunticon-ui"
				}
			}
		},
		connect: {
			server: {
				options: {
        			port: 9001,
        			keepalive: true
      			}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-watch");
};