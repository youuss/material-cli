const commander = require('commander');
const inquirer = require('inquirer');
const clone = require('git-clone');
const log = require('tracer').colorConsole();
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

module.exports = {
    commander,
    inquirer,
    clone,
    log,
    shell,
    path,
    fs
}
export {};