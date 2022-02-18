/**
 * path nos va a permitir saber donde vamos trabajar o donde va a 
 * estar ubicado este proyecto.
 * vamos a requerir path con el metodo 'require' y lo almacenamos en 
 * la 'const path'
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = { //este objeto nos permite definir cada configuracion
//extandar para nuestro proyecto.    

entry: './src/index.js', // con 'entry' definimos el puntro de entrada de nuestro proyecto

output:{// aqui definimos donde va a vivir el proyecto una vez este preparado 
    //por estandar sera en la carpeta 'dist'
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
},

resolve: {//definimos las extenciones que vamos a utilizar
    
        extensions: ['.js', '.jsx'],

        alias: {//en este objeto convertiremos los elementos presentres es referencias
            //usando alias, Clase 15. 
           '@components': path.resolve(__dirname, 'src/components/'), 
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/')

        }
   
},

module: {// aqui definimos las reglas que vamos a crear don nuestros 'loaders'
    //si como tambien con los puglins 
    rules:[
        {
            //esta es la primera regla 
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,

            use:{
                loader: 'babel-loader'
            }
            
        },
        {
            //esta es la segunda regla 
            test: /\.html$/ ,
            
            use: [
                {
                    loader: 'html-loader',
                }
            ]
        },
        {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
            
        },
        {//definimos la configuracion para trabajar con las extensiones de nuestras imagenes
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset'
        }

        
    ]

},
plugins: [//aqui vamos a agregar los plugins que ya hemos instalar con 'npm'
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),

],
devServer:{
    historyApiFallback: true,
   /*static: path.join(__dirname, 'dist'),
    //compress: true,
    port: 3005*/
}

}