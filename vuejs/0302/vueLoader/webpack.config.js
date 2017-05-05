/**
 * Created by badou on 2017/5/5.
 */
module.exports = {
    entry:'./main.js',
    output:{
        path:__dirname,
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:['vue-loader']
            },{
                test:/\.js$/,
                loader:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    }
};