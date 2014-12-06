module.exports = function (grunt) {
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            build: {
                src: ['scripts/dev/*.js'],
                dest: 'scripts/production.min.js'
            }
        },
        
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    loadPath: require('node-bourbon').includePaths
                },
                files: {
                    'css/production.css': 'css/sass/main.scss'
                }
            }
            
        },
        
        watch: {
            scripts: {
                files: ['scripts/dev/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            
            css: {
                files: ['css/sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['uglify', 'sass', 'watch']);
    
};