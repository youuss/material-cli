const { commander, inquirer, fs, log, shell, path } = require('../plugins/modules');
const modulesFileContent = ['data.js', 'index.js', 'vx.js', '__className__.vue'];
const { generateComponent, generateModule } = require('../plugins/controller');
const { getComponentsFiles } = require('../plugins/utils');
const { PAGE_QUESTIONS } = require('../plugins/constant');

module.exports = () => {
	commander
		.command('add [args...]')
		.description('增加物料 -c 组件  -p 页面')
		.action((args: any) => {
			// 缺少参数
			if (!commander.component && !commander.page) {
				log.warn('缺少参数-c或者-p, 以区分物料种类, 具体见--help')
			}
			// 增加组件
			if (commander.component) {
				let pwd = shell.pwd()
				args.map((componentType: any) => {
					const _componentType = getComponentsFiles().indexOf(componentType) > -1 ? componentType : getComponentsFiles().indexOf(componentType + '.vue') > -1 ? componentType + '.vue' : void 0
					if (!_componentType) {
						log.warn(`:${componentType}  --> 组件不存在, 请检查拼写`)
					} else {
						let _filePath = path.join(__dirname, `./material/generate_components/${_componentType}`)
						let _isFile = fs.statSync(_filePath).isFile()
						if (_isFile) {
							generateComponent(_componentType, '', pwd)
						} else {
							let _aimFiles = fs.readdirSync(_filePath)
							// 建文件夹
							fs.mkdir(`${pwd}/src/components/${_componentType}`, 777, (err: any) => {
								if (err) {
									log.info(`${componentType}目录已经建立`)
								}
							})
							_aimFiles.map((item: any) => {
								generateComponent(_componentType, `/${item}`, pwd)
							})
						}
					}
				})
			}
			// 增加页面
			if (commander.page) {
				inquirer.prompt(PAGE_QUESTIONS)
					.then((answers: any) => {
						const { modelType } = answers
						let pwd = shell.pwd()
						console.log(`commander.page`, args)
						args.map((pageName: string) => {
							console.log('pageName', pageName)
							// 创建对应目录的文件夹
							if (pageName.split('/').length === 2) {
								fs.mkdir(`${pwd}/src/views/${pageName.split('/')[0]}`, 755, (err: any) => {
									log.info(`${pageName.split('/')[0]}已存在`)
								})
							}
							fs.mkdir(`${pwd}/src/views/${pageName}`, 755, (err: any) => {
								log.info(`${pageName}已存在`)
							})
							/* 读取./generate_modules下面的文件 */
							modulesFileContent.map(fileName => {
								generateModule(modelType, pageName, fileName, pwd)
							})
						})
					})
			}
		})
}

export {}