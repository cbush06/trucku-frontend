const webpack = require('webpack');
const moment = require('moment');

let publicPath;
switch(process.env.NODE_ENV) {
    case 'production':
        publicPath = '/';
        break;
    case 'local':
        publicPath = '/';
        break;
    default:
        break;
}

process.env.VUE_APP_PUBLIC_PATH = publicPath;
process.env.VUE_APP_VERSION = require('./package.json').version;
process.env.VUE_APP_BUILDDATE = moment().format('MMMM Do YYYY, h:mm:ss a');

module.exports = {
    publicPath: publicPath,
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                'moment': 'moment',
                '_': 'lodash'
            })
        ]
    }
}
