const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 3 LOADED\n'));

const reverseString = (input) => {
  if (input === "") {
      return "";
  } else {
      return reverseString(input.substr(1)) + input.charAt(0);
  }
}

module.exports = {
  reverseString: reverseString,
  run: reverseString
}
