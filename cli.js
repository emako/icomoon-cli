#!/usr/bin/env node
const yargs = require('yargs');
const pipeline = require('./index');

const argv = yargs
  .alias('h', 'help')
  .option('s', {
    alias : 'selection',
    demand: true,
    describe: 'path to icomoon selection file',
  })
  .option('i', {
    alias: 'icons',
    describe: 'paths to icons need to be imported, separated by comma',
    default: '',
  })
  .option('n', {
    alias: 'names',
    describe: 'rename icons, separated by comma, matched by index',
    default: '',
  })
  .option('o', {
    alias: 'output',
    default: './output',
    describe: 'output directory',
  })
  .option('f', {
    alias: 'force',
    default: false,
    describe: 'force override current icon when icon name duplicated',
  })
  .option('v', {
    alias: 'visible',
    default: false,
    describe: 'run a GUI chrome instead of headless mode',
  })
  .option('e', {
    alias: 'exit',
    default: false,
    describe: 'exit process with exit code 0 once successed',
  })
  .argv;

pipeline({
  selectionPath: argv.s,
  icons: argv.i.toString().includes(',') ? argv.i.split(',') : [argv.i],
  names: argv.n.toString().includes(',') ? argv.n.split(',') : [argv.n],
  outputDir: argv.o,
  forceOverride: argv.f,
  visible: argv.v,
  exit: argv.e,
});
