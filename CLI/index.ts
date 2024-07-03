import readline from 'readline';
import chalk from 'chalk';
import { debounce } from '../src/debounce';


const args = process.argv.slice(2);
if (args.length < 2) {
    console.error(chalk.red('Invalid input. Use: node ./dest/index.js <message> <delay>'));
    process.exit(1);

}

const message= args[0];
const delay= parseInt(args[1],10);


if (isNaN(delay)) {
    console.error(chalk.red('Delay must be a number'));
    process.exit(1);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const debouncedFunction = debounce((msg: string) => {
    const endTime=Date.now();

    console.log(chalk.blue(`Message: ${msg}`));
    console.log(chalk.green(`Processed in: ${endTime-startTime} ms`))
}, delay);
let startTime:number
console.log(chalk.yellow('Type something and press Enter (out: CTRL+C )'));
rl.on('line', (input) => {
    startTime= Date.now();
    debouncedFunction(input);
});

