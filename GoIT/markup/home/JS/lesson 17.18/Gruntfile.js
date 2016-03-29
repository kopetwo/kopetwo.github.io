module.exports = function(grunt) {

    grunt.initConfig({

       	pkg: grunt.file.readJSON('package.json'),
		 	concat: {
			    js: {
			        src: [
			            'js/*.js'
			        ],
			        dest: 'build/build.js',
			    },
			    css: {
			        src: [
			            'css/*.css'
			        ],
			        dest: 'build/build.css',
			        }
			},
			uglify: {
    			js: {
        			src: 'build/build.js',
        			dest: 'build/build.min.js'
    			}
			},
			cssmin: {
            	target: {
              	files: [{
                	expand: true,
                	cwd: 'build',
                	src: ['*.css', '!*.min.css'],
                	dest: 'build',
                	ext: '.min.css'
              	}]
            	}
}
});

	 grunt.loadNpmTasks('grunt-contrib-concat');
	 grunt.loadNpmTasks('grunt-contrib-uglify');
	 grunt.loadNpmTasks('grunt-contrib-cssmin');

	 grunt.registerTask('default', ['concat','uglify','cssmin']);
}