const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
  if(input[0]){
    return input[0].map(function(_,i){
            return input.map(function(array){return array[i]})
        });
  } else {
    return [];
  }

}

module.exports = {
  zip: zip,
  run: zip
}
