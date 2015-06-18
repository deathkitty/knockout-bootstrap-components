/**
 * Created by johanvdm on 2015/06/18.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlConvert: {
            kobsTemplates: {
                src: ['src/templates/*.html'],
                dest: 'tmp/knockout-bootstrap-templates.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'build'
                },{
                    expand: true,
                    cwd: 'tmp/',
                    src: '**/*.js',
                    dest: 'build'
                }]
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-html-to-js');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['htmlConvert', 'uglify']);

};