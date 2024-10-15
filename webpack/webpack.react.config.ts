import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const webpackReactConfig: webpack.Configuration & webpackDevServer.Configuration = {
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
        static: {
            directory: path.resolve(__dirname, '..', 'assets'),
            publicPath: '/assets/'
        }
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
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
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