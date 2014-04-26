module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                files: {
                    'css/main.css': ['styl/*.styl']
                },
                options: {
                    compress: false
                }
            }
        },
        connect: {
            all: {
                options:{
                    port: 9000,
                    hostname: '127.0.0.1',
                    base: '.',
                    livereload: true
                }
            }
        },
        watch: {
            stylus: {
                files: ['styl/*.styl'],
                tasks: ['stylus']
            },
            files: '*.html',
            options: {
                livereload: true
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['stylus', 'connect', 'watch']);

};