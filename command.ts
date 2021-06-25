#! /usr/bin/env ts-node
const commander = require('commander');
const init = require('./src/commands/init.ts');
const update = require('./src/commands/update.ts');
const add = require('./src/commands/addition.ts');
const list = require('./src/commands/list.ts');
const clear = require('./src/commands/clear.ts');
/**
 * 引入commander展示版本号
 **/
commander.version('1.0.0')
  .option('-c, --component', 'Add component')
  .option('-p, --page', 'Add page')

  // 初始化 init
  init()

  // 更新物料 update
  update()

  // 增加物料 -c 组件  -p 页面
  add()

  // 目录数据查看   check
  list()

  // 清除数据 clear
  
  clear()

commander.parse(process.argv)
