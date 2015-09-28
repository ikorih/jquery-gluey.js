'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            sass: {
                files: ['assets/styles/**/*.{scss,sass}'],
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                },
                files: {
                    './style.css': 'assets/styles/style.scss',
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['ie >= 9', 'Chrome >= 14', 'ff >= 14', 'Safari >= 5.1', 'Opera >= 12', 'last 2 iOS versions', 'last 2 Android versions'],
            },
            files: {
                expand: true,
                flatten: true,
                src: './*.css',
                dest: './'
            },
        },

        cssmin: {
            options: {
                keepSpecialComments: 1
            },
            minify: {
                expand: true,
                cwd: './',
                src: ['*.css', '!*.min.css'],
                ext: '.css'
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'assets/js/source/**/*.js'
            ]
        },

        uglify: {
            main: {
                options: {
                    banner: '/*!\n* jquery-gluey.js <%= grunt.template.today("yyyy-mm-dd") %> \n* https://github.com/ikorih/jquery-gluey.js"\n* Licence: MIT\n*/\n',
                },
                files: {
                    './jquery-gluey.min.js': [
                        'assets/js/source/jquery-gluey.js',
                    ]
                }
            }

        },

        browserSync: {
            bsFiles: {
                src : ['index.html' ,'./style.css', './*.js', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
            },
            options: {
                server: {
                    baseDir: "./"
                },
                watchTask: true
            }
        },

    });

    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin','browserSync' ,'uglify', 'watch']);

};


