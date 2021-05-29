// entry => output
const path = require("path");

// webpack grab the object: 
module.exports = {
    entry: "./src/app.js",
    mode: 'development',
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    }
    ,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};