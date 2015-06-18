/**
 * Created by johanvdm on 2015/06/18.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            pre:["dist", "tmp"],
            post:["tmp"]
        },
        htmlConvert: {
            kobsTemplates: {
                src: ['src/templates/*.html'],
                dest: 'tmp/knockout-bootstrap-templates.js'
            }
        },
        concat: {
            options: {
                separator: '\r'
            },
            dist: {
                src: ['tmp/knockout-bootstrap-templates.js', 'src/*.js'],
                dest: 'tmp/knockout-bootstrap-components-all.js'
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
                    dest: 'dist'
                },{
                    expand: true,
                    cwd: 'tmp/',
                    src: '**/*.js',
                    dest: 'dist'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-to-js');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['clean:pre', 'htmlConvert', 'concat', 'uglify', 'clean:post']);

};