module.exports = {
    entry: './source/app.js',
    output: {
        path: './source/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};