module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        config: {
            helper_name: 'bootstrap-helper-blocks'
        },

        clean: {
            'dist': 'dist',
            'build': 'build'
        },

        sass: {
            options: {
                update: true
            },
            build_dev: {
                files: {
                    'build/<%= config.helper_name %>.css': [
                        'src/<%= config.helper_name %>.sass'
                    ],
                    'build/<%= config.helper_name %>-responsive.css': [
                        'src/<%= config.helper_name %>-responsive.sass'
                    ]
                }
            },
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/<%= config.helper_name %>.min.css': [
                        'src/<%= config.helper_name %>.sass'
                    ],
                    'build/<%= config.helper_name %>-responsive.min.css': [
                        'src/<%= config.helper_name %>-responsive.sass'
                    ]
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/<%= config.helper_name %>.min.css': [
                        'src/<%= config.helper_name %>.sass'
                    ],
                    'dist/<%= config.helper_name %>-responsive.min.css': [
                        'src/<%= config.helper_name %>-responsive.sass'
                    ]
                }
            }
        },

        watch: {
            css: {
                files: ['**/*.{sass,scss}'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            },
            css_dev: {
                files: ['**/*.{sass,scss}'],
                tasks: ['sass:build_dev'],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['clean:build', 'sass:build']);
    grunt.registerTask('css', ['clean', 'sass']);
    grunt.registerTask('dist', ['clean:dist', 'sass:dist']);
    grunt.registerTask('watch_css', ['watch:css']);
    grunt.registerTask('watch_css_dev', ['watch:css_dev']);

};