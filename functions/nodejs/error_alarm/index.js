// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
 function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms))
}
module.exports = async function (params, context, logger) {
  // 日志功能
  logger.error(`1我是error函数开始执行`);
  await sleep(500)
  logger.info(`2 函数开始执行`);
  await sleep(500)
  logger.warn(`3我是warn函数开始执行`);
  await sleep(500)
  logger.info(`4函数开始执行`);
  await sleep(500)
  logger.info(`5函数开始执行`);
  await sleep(500)
  logger.warn(`6我是warn函数开始执行`);
  await sleep(500)
  logger.info(`7函数开始执行`);
  await sleep(500)
  logger.info(`8函数开始执行`);
  await sleep(500)
  logger.error(`9我是error函数开始执行`);
  await sleep(500)
  logger.info(`10函数结束执行`);


  // 在这里补充业务代码
}