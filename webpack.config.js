// 导入路径处理模块
const path = require('path');

// 启用热更新2
// const webpack = require('webpack')

// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面index.html
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')


// 导出一个配置对象
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),// 项目入口文件
    output: {// 配置输入选项
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // devServer: {// 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
    //     //  --open --port 3000 --contentBase src --hot
    //     open: true,// 自动打开浏览器
    //     port: 3000, // 端口
    //     contentBase: 'src', // 指定托管的根目录
    //     hot: true// 启用热更新 1
    // },
    plugins:[// 添加plugin节点配置插件
        // new webpack.HotModuleReplacementPlugin(), // 启用热更新 3
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//模板路径
            filename: 'index.html'//自动生成的HTML文件的名称，在内存中生成一个index.html
        }),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: { // 用来配置第三方loader模块的
        rules:[// 文件的匹配规则
            { test:/\.css$/, use:['style-loader', 'css-loader'] },//处理css文件的规则
            { test:/\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },// 配置处理 .less 文件的第三方 loader 规则
            { test:/\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
            //{ test: /\.(png|jpg|gif|bmp|jpeg)$/, use: 'url-loader' },// 处理图片路径的loader
            { test: /\.(png|jpg|gif|bmp|jpeg)$/, use: 'url-loader?limit=761&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
            { test: /\.vue$/, use: 'vue-loader'}, // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}