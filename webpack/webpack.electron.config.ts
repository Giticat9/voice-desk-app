import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import * as path from "node:path";

const webpackElectronConfig: webpack.Configuration & webpackDevServer.Configuration = {
    mode: 'development',
    target: 'electron-main',
    entry: './src/electron/index.ts',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ]
    }
}

export default webpackElectronConfig;