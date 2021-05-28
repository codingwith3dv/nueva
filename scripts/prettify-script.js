const prettier = require("prettier");
const fs = require("fs");
const glob = require("glob");

const options = {
  semi: true,
  singleQuote: true,
  parser: "babel-ts"
};

var getDirectories = function(src, callback) {
  glob(src + '/**/*', callback);
};
getDirectories('src', function(err, res) {
  if (err) return;
  Array.from(res).forEach(file => {
    if (fs.lstatSync(file).isDirectory()) return;
    const data = fs.readFileSync(file, { encoding: 'utf-8' });
    const pretty_data = prettier.format(data, options);
    fs.writeFileSync(file, pretty_data);
  })
});