import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

console.log(path.resolve(__dirname, '..', 'src', 'template', 'index.html'));

const webpackReactConfig: webpack.Configuration & webpackDevServer.Configuration = {
    target: 'electron-renderer',
    entry: path.resolve(__dirname, '..', 'src', 'app', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, '..', 'dist', 'renderer'),
        filename: 'js/[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['main', 'module', 'browser'],
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 4000,
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'template', 'index.html'),
            inject: 'body',
        }),
    ],
}

export default webpackReactConfig;