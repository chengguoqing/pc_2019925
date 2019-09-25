var ljsd = "生产完成/高冠教育_phone",
    ty = "phone"

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        fixturesPath: "src",
        htmlbuild: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: './src/' + ty,
                        src: '**/*.html',
                        dest: ljsd
                    }
                  ]
            }
        },
        htmlmin: { // 压缩html
            dist: { // Target 
                options: { // Target options 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                  expand: true,
                        cwd: './src/' + ty,
                        src: '**/*.html',
                        dest: ljsd
                }]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: './src/' + ty + '/fonts',
                src: '**',
                dest: ljsd + "/fonts",
            },
        },
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平  
                },
                files: [
                    {
                        expand: true,
                        cwd: './src/' + ty + '/img',
                        src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg 图片  
                        dest: ljsd + '/img' // 优化后的图片保存位置，覆盖旧图片，并且不作提示  
                        }
                        ]
            }
        },

        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/' + ty + '/css',
                        src: '**/*.css',
                        dest: ljsd + '/css'
                    }

                       ]
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/' + ty + '/js/page', //js目录下
                    src: '*.js', //所有js文件
                    dest: ljsd + '/js/page' //输出到此目录下
             }]
            }
        },
        uglify: { //压缩
            buildall: { //按原文件结构压缩js文件夹内所有JS文件
                files: [{
                             expand: true,
                             cwd: 'src/' + ty + '/js', //js目录下
                             src: '*.js', //所有js文件
                             dest: ljsd + '/js' //输出到此目录下
                      }]
//                files: [{
//                        expand: true,
//                        cwd: ljsd + '/js', //js目录下
//                        src: '*.js', //所有js文件
//                        dest: ljsd + '/js' //输出到此目录下
//                    }
//
//                           ]
            }

        },




    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-css-sprite');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');




    grunt.registerTask('default', ["htmlbuild","copy","imagemin","uglify","cssmin"]);
}
