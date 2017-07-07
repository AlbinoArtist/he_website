module.exports = function(grunt){

// Project configuration. 
grunt.initConfig({
//Concat
  concat: {
    options: {
    },
    js: {
      src: ['js/app.js','js/navController.js', 'js/animateText.js'],
      dest: 'dist/scripts.js',
    },
    css:{
      src: ['css/animate.css', 'css/custom.css', 'css/timeline.css'],   
      dest: 'dist/css/stylesheet.css',
    },
  },

  //Watch
  watch: {
  js:{
      files: ['script.js'],
      tasks:['concat:js'],
  },
  css: {
      files: ['css/*.css'],
      tasks: ['concat:css'],
  }
},
//Uglify

  uglify: {
    my_target: {
      files: {
        'dist/scripts.min.js': ['dist/scripts.js']
      }
    }
  }
});

grunt.registerTask('default',['concat','uglify','watch']);
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

};

