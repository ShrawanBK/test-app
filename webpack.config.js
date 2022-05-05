const path = require('path');
module.exports = {
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "fs": false,
        },
        alias: {
            "fs.realpath": path.resolve(__dirname, 'realpath'),
            "selenium-webdriver": path.resolve(__dirname, './selenium'),
        }
    },
    node: { fs: 'empty' },
}