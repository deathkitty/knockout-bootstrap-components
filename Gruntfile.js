/**
 * Created by johanvdm on 2015/06/18.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            pre:["dist"],
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
        },
        watch: {
            scripts: {
                files: [
                    'public/**/*.js', 'public/**/*.html', 'public/**/*.styl',
                    'src/**/*.js', 'src/**/*.html', 'src/**/*.styl'
                ],
                tasks: ['bower', 'htmlConvert', 'concat', 'uglify', 'stylus'],
                options: {
                    spawn: false
                }
            }
        },
        stylus: {
            compile: {
                //expand: true,
                cwd: 'public/stylesheets/',
                src: '*.styl',
                dest: 'public/stylesheets/',
                ext: '.css',
                options: {
                    paths: ['node_modules'],
                    use:[
                        require('jeet'),
                        require('rupture')
                    ]
                    //import: [
                    //    'jeet/stylus/jeet',
                    //    'rupture/rupture'
                    //]
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './public/bower_components',
                    layout: 'byType',
                    install: true,
                    verbose: true,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-to-js');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-bower-task');
    
    // Default task(s).
    grunt.registerTask('default', ['clean:pre', 'bower', 'htmlConvert', 'concat', 'uglify', 'stylus', 'clean:post']);

};