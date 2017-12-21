module.exports = function (grunt) {

    grunt.initConfig({
        
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        },

        browserSync: {
            bsFiles: {
                src: 'assets/css/*.css'
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'styles.css': 'styles.sass',       // 'destination': 'source'
                    'widgets.css': 'widgets.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['sass', 'watch', 'browserSync']);
};