const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
            main: './src/index.js',
            vendor: [
                "react", 
                "react-dom", 
                "react-router-dom", 
                "react-redux", 
                "whatwg-fetch", 
                "core-js", 
                "redux",
                "redux-promise-middleware",
                "redux-promise-middleware-actions",
                "react-audio-player",
                "regenerator-runtime"
            ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[chunkhash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true
    },
    optimization: {
        usedExports: true,
        sideEffects: true,
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: 'vendor',
                    name : 'vendor',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    }
}

// Modificamos la configuración según el modo
module.exports = (env, argv) => {
    // Comprobamos si estamos en desarrollo
    const isDevelopment = argv.mode === 'development';

    if (isDevelopment) {
        config.devtool = 'eval-source-map';
    } else {
        config.devtool = 'source-map'; // o hidden-source-map
    }

    return config;
};