const timeStamp = Date.now();
const CompressionPlugin = require('compression-webpack-plugin');
const port = 7000;
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    // 部署应用时的基本 URL
    // publicPath: process.env.VUE_APP_ROOT_PATH || '/',

    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: 'dist',

    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',

    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,

    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
    lintOnSave: isDev,

    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,

    // Babel 显式转译列表
    transpileDependencies: ['element-ui', 'vuex-module-decorators'],

    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,

    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
    crossorigin: '',

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
    integrity: false,

    /*
     * 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
     * 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
     */
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map';
        } else {
            // 代码分割
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        vendors: {
                            name: 'chunk-vendors',
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'initial',
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        echarts: {
                            name: 'chunk-echarts',
                            test: /[\\/]node_modules[\\/]echarts[\\/]/,
                            chunks: 'initial',
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        moment: {
                            name: 'chunk-moment',
                            test: /[\\/]node_modules[\\/]moment[\\/]/,
                            chunks: 'initial',
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        xlsx: {
                            name: 'chunk-xlsx',
                            test: /[\\/]node_modules[\\/]xlsx[\\/]/,
                            chunks: 'initial',
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        element: {
                            name: 'chunk-element',
                            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                            chunks: 'initial',
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        elementTheme: {
                            name: 'chunk-element-theme',
                            test: /[\\/]node_modules[\\/]element-ui[\\/]lib[\\/]theme-chalk[\\/]/,
                            chunks: 'initial',
                            priority: 4,
                            reuseExistingChunk: true,
                            enforce: true
                        }
                    }
                }
            };
            // 打包编译 文件名称[hash.版本号.时间戳]
            config.output.filename = `static/js/[name].${process.env.VUE_APP_Version}.t${timeStamp}.js`;
            config.output.chunkFilename = `static/js/[name].${process.env.VUE_APP_Version}.t${timeStamp}.js`;
        }
    },

    // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    chainWebpack: (config) => {
        // report配置
        if (process.env.npm_config_report) {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        }
        // 开启gzip压缩
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|.\css/, // 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: false // 不删除源文件
                    })
                ]
            };
        }
    },

    // css的处理
    css: {
        // 当为true时，css文件名可省略 module 默认为 false
        requireModuleExtension: false,
        /*
         * 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
         * 默认生产环境下是 true，开发环境下是 false
         */
        extract: false,
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
        sourceMap: false,
        // 向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
        loaderOptions: {
            css: {},
            sass: {
                prependData: '@import "@/assets/scss/_base.scss";'
            }
        }
    },

    // 所有 webpack-dev-server 的选项都支持
    devServer: {
        open: false,
        disableHostCheck: true,
        port,
        https: false,
        hotOnly: false,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/userDomain/admin/v1': {
                target: 'http://39.101.217.105:5080/'
            }
        }
    },

    // 是否为 Babel 或 TypeScript 使用 thread-loader
    parallel: require('os').cpus().length > 1,

    // 向 PWA 插件传递选项
    pwa: {},

    // 可以用来传递任何第三方插件选项
    pluginOptions: {}
};
