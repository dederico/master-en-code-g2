// NODE commonJS
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      // las reglas van a cargar los LOADERS para que webpack haga lo que necesitamos
      {
        test: /\.html/,
        use: [
          // lo que encontre, que vamos a hacer con ello
          {
            loader: "html-loader", // El nombre del loader para que webpack lo entienda
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
