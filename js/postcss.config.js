module.exports = {
    plugins: [
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.html',
                './src/**/*.js',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
}