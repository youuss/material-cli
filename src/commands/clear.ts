const { commander, inquirer, clone, log, shell } = require('../plugins/modules');

module.exports = () => {
    commander
        .command('clear')
        .description('just a joke')
        .action(() => {
            log.info('clearing...')
            shell.rm('-rf', 'package.json');
            shell.rm('-rf', 'yarn.lock');
            shell.rm('-rf', 'node_modules/');
            shell.rm('-rf', 'command.ts');
            log.info('done!')
        })
}

export {}
