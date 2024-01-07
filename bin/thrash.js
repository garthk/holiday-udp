#!/usr/bin/env node

import Holiday from '../lib/index.js';
import util from 'node:util';
import optimist from 'optimist';

const argv = optimist.argv;

optimist.usage('Usage: $0 [options] address')
        .options('h', { alias: 'help', describe: 'Help' });

if (argv._.length !== 1 || argv.help) {
    optimist.showHelp();
    process.exit(1);
}

var address = argv._[0],
    holiday = new Holiday(address),
    globes = new Array(50);

console.log(util.format('spamming %s', address));

function randomGlobe() {
    return Math.floor(Math.random() * 50);
}

function randomByteValue() {
    return Math.floor(Math.random() * 256);
}

function randomColour() {
    return [ randomByteValue(), randomByteValue(), randomByteValue() ];
}

function spam() {
    globes[randomGlobe()] = randomColour();
    holiday.send(globes);
}

setInterval(spam, 0).unref();
