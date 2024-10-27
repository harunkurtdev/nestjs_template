var path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    target: "node",
    devtool: 'inline-source-map',
    mode: 'development', // or 'development' if you are in dev mode
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    stats: {
        warnings: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.json')  // Add this line to explicitly reference tsconfig.json
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                // { from: 'src/index.html', to: 'index.html' }, // Adjust the source path as needed
                // { from: 'src/swagger.json', to: 'swagger.json' }, // Adjust the source path as needed
                { from: 'node_modules/swagger-ui-dist/swagger-ui.css', to: 'swagger-ui.css' },
                { from: 'node_modules/swagger-ui-dist/swagger-ui-bundle.js', to: 'swagger-ui-bundle.js' },
                { from: 'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js', to: 'swagger-ui-standalone-preset.js' },
                { from: 'node_modules/swagger-ui-dist/favicon-16x16.png', to: 'favicon-16x16.png' },
                { from: 'node_modules/swagger-ui-dist/favicon-32x32.png', to: 'favicon-32x32.png' }
            ]
        })
    ]
}
