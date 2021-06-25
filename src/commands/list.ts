const { commander, log, path, fs } = require('../plugins/modules');

module.exports = () => {
	commander
		.command('check')
		.description('查看物料目录内容')
		.action(() => {
			let components_url = path.join(__dirname, '../../material/generate_components')
			let page_url = path.join(__dirname, '../../material/generate_modules')
			const _readdir = (url: string) => {
				return fs.readdir(url, (err: any, back: any) => {
					log.info(`${url}具有以下内容`)
					back.map((item: any) => {
						console.log(item)
					})
				})
			}
			_readdir(components_url)
			_readdir(page_url)
		})
}

export {};