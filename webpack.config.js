// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');


// export
module.exports = {
    // parcel index.html
    // 파일을 읽어들이기 시작하는 진입점 설정
    // 웹팩은 js를 진입점으로 사용
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 과정
    output: {
        // path: path.resolve(__dirname, 'dist'), // __dirname(webpack.config.js 경로)과 'dist'를 합쳐서 절대적인 경로를 만들어준다.
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [{
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new copyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}