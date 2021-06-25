const { commander, inquirer, clone, log, shell } = require('../plugins/modules');
const { QUESTIONS, PROJECT_URL_MAP } = require('../plugins/constant')

module.exports = () => {
    commander
        .command('init')
        .description('用来初始化项目, 拉取模板')
        .action(() => {
            console.log('正在构建...')
            inquirer.prompt(QUESTIONS)
                .then((answers: any) => {
                    const { projectName, type } = answers;
                    console.log(projectName)
                    console.log(type)
                    clone(`${PROJECT_URL_MAP[type]}`, `./${projectName}`, null, function () {
                        log.info('星系构建完成')
                        shell.rm('-rf', `./${projectName}/.git`);
                        log.info(`清除掉${projectName}的git, 记得进入项目npm install`)
                    })
                })
        })
}

export {}