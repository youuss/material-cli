const { getFileName } = require('./utils');

const modulesFiles = getFileName('../../material/generate_modules');
const componentsFiles = getFileName('../../material/generate_components');

interface URL {
    [key: string]: string
}
const PROJECT_URL_MAP: URL = {
    'empty-vue-template': 'template_url', // 空白库
    'empty-vue-template(备用)': 'template_ssh'
};

const QUESTIONS = [
    {
        type: 'input',
        name: 'projectName',
        message: '请为项目命名',
        filter: (val: any) => {
            return val;
        }
    },
    {
        type: 'list',
        name: 'type',
        message: '请选择使用的模板',
        choices: Object.keys(PROJECT_URL_MAP),
        filter: (val: any) => {
            return val.toLowerCase();
        }
    }
]

const PAGE_QUESTIONS = [
    {
        type: 'input',
        name: 'modelType',
        message: '请输入想要使用的页面种类',
        filter: (val: any) => {
            return val;
        }
    }
]

const COMPONENTS_QUESTIONS = [
    {
        type: 'list',
        name: 'componentType',
        message: '选择想要添加的组件',
        choices: componentsFiles,
        filter: (val: any) => {
            return val;
        }
    }
]

module.exports = {
    PROJECT_URL_MAP,
    QUESTIONS,
    PAGE_QUESTIONS,
    COMPONENTS_QUESTIONS
}

export {};