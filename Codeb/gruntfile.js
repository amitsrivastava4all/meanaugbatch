module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
          scripts: {
            files: ['scripts/*.js','spec/*.js'],
            tasks: ['uglify:mykey'],
            options: {
              spawn: false,
            },
          },
        },
        uglify: {
            mykey: {
              files: {
                'release/all.min.js': ['scripts/*.js']
              }
            }
          }
        });

        grunt.loadNpmTasks('grunt-contrib-uglify-es');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('default', ['watch']);
}


