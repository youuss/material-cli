const { path, fs } = require('./modules');

const getFileName = (url: string) => {
    let _url = path.join(__dirname, url);
    let _back = fs.readdirSync(_url);
    return _back;
}

const getComponentsFiles = () => {
    return getFileName('../../material/generate_components');
}

module.exports = {
    getComponentsFiles,
    getFileName
}

export {}