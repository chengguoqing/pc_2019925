var ljsd = "生产完成/健身助手",
    ty = "pc"

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        fixturesPath: './src/' + ty,
        postcss: { //css加前缀
            options: {
                map: false,
                processors: [

                  require('autoprefixer')(),
                  require('cssgrace')
            ]
            },
            dist: {
                src: [ljsd + '/css/style.css', ljsd + '/css/base.css']
            }
        },
        apidoc: {
            mypp: {
                src: "app/",
                dest: "apidoc/",
                options: {
                    debug: true,
                    includeFilters: [".*\\.js$"],
                    excludeFilters: ["node_modules/"]
                }
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

        htmlbuild: {
            //            html上这样引入 就可以插入 头部和尾部
            //   <!-- build:section layout.header -->
            //    <!-- /build -->
            //    <!-- build:section layout.footer -->
            //    <!-- /build -->
            //这样就可以加版本号了
            // <!-- build:process -->
            //    <script src="js/jquery-1.11.3.min.js?v=<%= version %>"></script>
            //    <script src="js/mui.min.js?v=<%= version %>"></script>
            //    <script src="js/swiper3.07.min.js?v=<%= version %>"></script>
            //    <!-- /build -->
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: './src/' + ty,
                        src: '**/*.html',
                        dest: ljsd
                    }
                  ],
                options: {
                    sections: {
                        layout: {
                            header: '<%= fixturesPath %>/layout/header.html',
                            footer: '<%= fixturesPath %>/layout/footer.html'
                        }
                    },
                    data: {
                        version: "0.1.0",
                    },
                }
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

        uglify: { //压缩
            buildall: {
                files: [{
                        expand: true,
                        cwd: 'src/' + ty + '/js', //js目录下
                        src: ['*.js'], //所有js文件
                        dest: ljsd + '/js' //输出到此目录下
                    }, {
                        expand: true,
                        cwd: ljsd + '/js', //js目录下
                        src: ['page/*.js', 'page/**/*.js', "components/*.js"], //所有js文件
                        dest: ljsd + '/js' //输出到此目录下
                    }

                           ]
            }

        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/' + ty + '/js', //js目录下
                    src: ['page/*.js', 'page/**/*.js', "components/*.js"], //所有js文件
                    dest: ljsd + '/js' //输出到此目录下
             }]
            }
        },
//        apidoc: {
//            myapp: {
//                src: "app/",
//                dest: "apidoc/"
//            }
//        }
    });
    grunt.loadNpmTasks('grunt-babel');

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-css-sprite');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-postcss')
  grunt.loadNpmTasks('apidoc');
//    grunt.loadNpmTasks('grunt-apidoc')
    //    grunt.registerTask('default', ["babel"]);
    //     ""
      grunt.registerTask('default', ['cssmin','copy','uglify',"htmlbuild"]);
}