module.exports = {
    entry: './source/app.jsx',
    output: {
        path: './source/',
        filename: 'bundle.js'
    },    
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname,
        alias: {
            Greeter: 'source/components/greeter.jsx',
            GreeterForm: 'source/components/greeterForm.jsx',
            GreeterHeader: 'source/components/greeterHeader.jsx'
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)|(bower_components)/
            }
        ]
    }
};