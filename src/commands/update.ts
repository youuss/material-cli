const { commander, shell, path } = require('../plugins/modules');

module.exports = () => {
	commander
		.command('update')
		.description('更新物料库')
		.action(() => {
			let pwd = shell.pwd()
			shell.cd(__dirname)
			shell.exec('rm -rf .git')
			const updateFiles = () => {
				shell.cd(path.join(__dirname, '/material/generate_components'))
				shell.rm('-rf', '*')
				shell.cd(path.join(__dirname, '/material/generate_modules'))
				shell.rm('-rf', '*')
				shell.cd(__dirname)
				shell.exec('git pull origin master')
			}

			shell.exec('git init')
			shell.exec('git remote add origin https://github.com/youuss/material-center.git') // 物料仓库
			shell.exec('git config core.sparseCheckout true')
			shell.exec("echo 'material' >> .git/info/sparse-checkout")
			updateFiles()
		})
}

export {};