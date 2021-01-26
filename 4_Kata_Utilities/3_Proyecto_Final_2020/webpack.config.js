// NODE commonJS
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      // las reglas van a cargar los LOADERS para que webpack haga lo que necesitamos
      {
        test: /\.html/, //REGEX busca todos los archivos que terminan en html
        use: [
          // lo que encontre, que vamos a hacer con ello
          {
            loader: "html-loader", // El nombre del loader para que webpack lo entienda
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.js$/, // va a buscar todos los archivos de JS
        exclude: /node_modules/, // significa que no va a buscar en la carpeta de node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/, // va a buscar archivos con esa terminacion
        use: ["file-loader"],
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader", // estilos en linea de css
          "sass-loader",
          //
          //
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css", // esto es para manejar muchas lineas de codigo
    }),
  ],
};
