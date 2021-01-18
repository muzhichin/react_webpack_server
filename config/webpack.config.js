const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            'public': path.resolve(__dirname, "../public"),
            'styles': path.resolve(__dirname, "../src/styles")
        }

    },
    entry: {
        index: [
            "react-hot-loader/patch",
            "./src/index.js",
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"
        ]
    },
    devServer: {
        // contentBase: "./src/",
        historyApiFallback: true,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, "../public"),
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: path.resolve(__dirname, "../public/index.html"),
            filename: 'index.html', // output file
        }),],
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            // JavaScript: использовать Babel для транспиляции
            {test: /\.js(x)?$/, exclude: /node_modules/, use: ['babel-loader']},

            // Styles: Inject CSS into the head with source maps
            // Стили: встроить CSS в head с картами источников
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true, importLoaders: 1},
                    },
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },

            // Images: Copy image files to build folder
            // Изображения: копировать файлы в директорию для файлов сборки
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

            // Fonts and SVGs: Inline files
            // Шрифты и SVG
            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
        ],
    },
};