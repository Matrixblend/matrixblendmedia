module.exports = function(grunt) {

const sass = require('sass');
const watch = require('watch');

// const task = require('load-grunt-tasks')(grunt);

grunt.initConfig({
   
    sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'src/components/main.css': 'src/sass/main.scss'
            }
        }
    },
    watch: {
      files: ['src/sass/*'],
      tasks: ['default']
    }

});

grunt.loadNpmTasks('grunt-contrib-watch');
 
grunt.registerTask('default', ['sass']);


};